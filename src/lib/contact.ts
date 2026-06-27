import { Resend } from 'resend';
import { persistLead } from './lead-store';

export type LeadStatus = 'New' | 'Reviewed' | 'Qualified' | 'Closed';

export interface LeadPayload {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  timeline: string;
  projectDescription: string;
}

export interface LeadInsights {
  category: string;
  summary: string;
  urgency: 'High' | 'Medium' | 'Low';
  priority: 'High' | 'Medium' | 'Low';
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export function validateLeadInput(payload: LeadPayload): ValidationResult {
  const errors: string[] = [];

  if (!payload.fullName?.trim()) errors.push('Full name is required.');
  if (!payload.email?.trim() || !emailPattern.test(payload.email.trim())) errors.push('A valid email is required.');
  if (!payload.phone?.trim()) errors.push('Phone number is required.');
  if (!payload.projectType?.trim()) errors.push('Project type is required.');
  if (!payload.timeline?.trim()) errors.push('Project timeline is required.');
  if (!payload.projectDescription?.trim()) errors.push('Project description is required.');

  return { valid: errors.length === 0, errors };
}

export function buildAiInsights(payload: LeadPayload): LeadInsights {
  const description = payload.projectDescription.toLowerCase();
  const urgency = /urgent|asap|immediately|within a week|today|quickly/.test(description)
    ? 'High'
    : /soon|launch|launching|month|timeline|deadline/.test(description)
      ? 'Medium'
      : 'Low';

  const priority = urgency === 'High' ? 'High' : urgency === 'Medium' ? 'Medium' : 'Low';

  const category = payload.projectType || 'Other';
  const companyLabel = payload.company?.trim() || 'a new client';
  const summary = `${companyLabel} requested a ${category.toLowerCase()} project with ${urgency.toLowerCase()} urgency. ${payload.projectDescription.trim().slice(0, 140)}${payload.projectDescription.trim().length > 140 ? '…' : ''}`;

  return {
    category,
    summary,
    urgency,
    priority
  };
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatLeadEmail(payload: LeadPayload, insights: LeadInsights) {
  const rows = [
    ['Full Name', payload.fullName],
    ['Email Address', payload.email],
    ['Phone Number', payload.phone],
    ['Company / Brand', payload.company || 'Not provided'],
    ['Project Type', payload.projectType],
    ['Project Timeline', payload.timeline],
    ['Project Description', payload.projectDescription],
    ['Category', insights.category],
    ['Urgency', insights.urgency],
    ['Priority', insights.priority],
    ['AI Summary', insights.summary],
    ['Submitted At', new Date().toISOString()]
  ];

  return `<!DOCTYPE html>
<html>
  <body style="font-family:Inter, Arial, sans-serif; background:#050505; color:#f5f5f5; padding:24px;">
    <div style="max-width:720px; margin:0 auto; background:#111111; border:1px solid #7cff4f; border-radius:24px; padding:24px;">
      <h2 style="margin:0 0 8px; color:#7cff4f;">New MG Webworks Lead</h2>
      <p style="margin:0 0 20px; color:#cfcfcf;">A new project inquiry has been submitted through the agency website.</p>
      <table style="width:100%; border-collapse:collapse;">
        ${rows.map(([label, value]) => `
          <tr>
            <td style="padding:8px 0; font-weight:600; color:#ffffff; width:180px; vertical-align:top;">${escapeHtml(label as string)}</td>
            <td style="padding:8px 0; color:#d9d9d9; white-space:pre-wrap;">${escapeHtml(value as string)}</td>
          </tr>
        `).join('')}
      </table>
    </div>
  </body>
</html>`;
}

export async function handleLeadSubmission(payload: LeadPayload) {
  const validation = validateLeadInput(payload);
  if (!validation.valid) {
    return { ok: false, status: 400, message: validation.errors[0], validation };
  }

  const insights = buildAiInsights(payload);
  const businessEmail = process.env.BUSINESS_EMAIL || 'mgwebworksglobal@gmail.com';

  const persisted = await persistLead(payload, insights);

  if (!resend) {
    console.warn('Resend is not configured. Lead was persisted locally and email delivery was skipped.', { businessEmail, storage: persisted.storage });
    return {
      ok: true,
      status: 200,
      message: 'Project inquiry submitted successfully. Lead details were stored and will be emailed once delivery is configured.',
      insights,
      validation,
      storage: persisted.storage
    };
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'MG Webworks <onboarding@resend.dev>',
      to: [businessEmail],
      subject: `New Project Inquiry from ${payload.fullName}`,
      html: formatLeadEmail(payload, insights)
    });

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'MG Webworks <onboarding@resend.dev>',
      to: [payload.email],
      subject: "We've received your project inquiry",
      html: `
        <div style="font-family:Inter, Arial, sans-serif; background:#050505; color:#f5f5f5; padding:24px;">
          <div style="max-width:640px; margin:0 auto; background:#111111; border:1px solid #7cff4f; border-radius:24px; padding:24px;">
            <h2 style="margin:0 0 10px; color:#7cff4f;">Thank you for contacting MG Webworks</h2>
            <p style="line-height:1.6; color:#d9d9d9;">Our team has successfully received your project inquiry and will review your requirements carefully.</p>
            <p style="line-height:1.6; color:#d9d9d9;">A member of our team will contact you soon to discuss the next steps.</p>
            <p style="line-height:1.6; color:#d9d9d9;">We appreciate your interest in working with MG Webworks.</p>
          </div>
        </div>
      `
    });
  } catch (error) {
    console.error('Lead email delivery failed', error);
    return { ok: false, status: 500, message: 'Lead was not delivered successfully.', insights, validation, storage: persisted.storage };
  }

  return {
    ok: true,
    status: 200,
    message: 'Project inquiry submitted successfully.',
    insights,
    validation,
    storage: persisted.storage
  };
}
