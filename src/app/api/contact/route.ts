import { NextResponse } from 'next/server';
import { handleLeadSubmission, type LeadPayload } from '@/lib/contact';

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload;
    const result = await handleLeadSubmission(payload);

    return NextResponse.json(result, { status: result.status });
  } catch (error) {
    console.error('Contact API error', error);
    return NextResponse.json(
      { ok: false, status: 500, message: 'Unable to process your inquiry right now.' },
      { status: 500 }
    );
  }
}
