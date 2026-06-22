import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Simulate backend processing (e.g., sending email via Resend or saving to DB)
    console.log("Received inquiry:", { name, email, message });

    // In a real app, you would validate the input and handle the external API call here

    return NextResponse.json({ success: true, message: "Inquiry received successfully." }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ success: false, error: "Failed to process inquiry." }, { status: 500 });
  }
}
