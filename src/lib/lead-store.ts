import { appendFile, mkdir } from 'fs/promises';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import type { LeadInsights, LeadPayload } from './contact';

export interface PersistedLeadRecord {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  timeline: string;
  projectDescription: string;
  status: 'New';
  category: string;
  summary: string;
  urgency: LeadInsights['urgency'];
  priority: LeadInsights['priority'];
  submittedAt: string;
}

export async function persistLead(payload: LeadPayload, insights: LeadInsights) {
  const record: PersistedLeadRecord = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    fullName: payload.fullName.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    company: payload.company.trim(),
    projectType: payload.projectType.trim(),
    timeline: payload.timeline.trim(),
    projectDescription: payload.projectDescription.trim(),
    status: 'New',
    category: insights.category,
    summary: insights.summary,
    urgency: insights.urgency,
    priority: insights.priority,
    submittedAt: new Date().toISOString()
  };

  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
      const { error } = await supabase.from('leads').insert(record);
      if (!error) {
        return { ok: true, storage: 'supabase' as const, record };
      }
      console.warn('Supabase lead insert failed, falling back to local storage.', error.message);
    } catch (error) {
      console.warn('Supabase client setup failed, falling back to local storage.', error);
    }
  }

  const filePath = path.join(process.cwd(), 'data', 'leads.jsonl');
  await mkdir(path.dirname(filePath), { recursive: true });
  await appendFile(filePath, `${JSON.stringify(record)}\n`, 'utf8');

  return { ok: true, storage: 'local-file' as const, record };
}
