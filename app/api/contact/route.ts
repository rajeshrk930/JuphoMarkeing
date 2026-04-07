import { NextResponse } from 'next/server';
import twilio from 'twilio';

// Placeholder Google Apps Script web app endpoint; replace with env var
const SCRIPT_ENDPOINT = process.env.GOOGLE_SCRIPT_ENDPOINT || 'https://script.google.com/macros/s/REPLACE_DEPLOY_ID/exec';

// Twilio WhatsApp configuration
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_WHATSAPP_FROM = process.env.TWILIO_WHATSAPP_FROM; // e.g., 'whatsapp:+14155238886'
const WHATSAPP_TO = process.env.WHATSAPP_TO; // e.g., 'whatsapp:+919876543210'

// Initialize Twilio client
let twilioClient: ReturnType<typeof twilio> | null = null;
if (TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN) {
  twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
}

async function sendWhatsAppNotification(leadData: any) {
  if (!twilioClient || !TWILIO_WHATSAPP_FROM || !WHATSAPP_TO) {
    console.log('WhatsApp notifications not configured');
    return;
  }

  try {
    const message = `🎉 *New Lead Received!*

👤 *Name:* ${leadData.name}
📧 *Email:* ${leadData.email}
📱 *Phone:* ${leadData.phone || 'Not provided'}
🌐 *Website:* ${leadData.website || 'Not provided'}
💰 *Budget:* ${leadData.spend}
💬 *Message:* ${leadData.message || 'No message'}

🕐 *Time:* ${new Date().toLocaleString()}

---
_ClickBoost Lead Dashboard_`;

    await twilioClient.messages.create({
      from: TWILIO_WHATSAPP_FROM,
      to: WHATSAPP_TO,
      body: message,
    });

    console.log('WhatsApp notification sent successfully');
  } catch (error: any) {
    console.error('Failed to send WhatsApp notification:', error.message);
    // Don't fail the entire request if WhatsApp fails
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // Basic server-side validation
    const required = ['name','email','spend','consent'];
    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json({ ok: false, error: `Missing field: ${field}` }, { status: 400 });
      }
    }
    // Forward to Google Apps Script as form-encoded
    const formBody = new URLSearchParams();
    Object.entries(data).forEach(([k,v]) => formBody.append(k, String(v)));

    console.log('Sending to Google Script:', SCRIPT_ENDPOINT);
    console.log('Form data:', formBody.toString());
    
    const res = await fetch(SCRIPT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formBody.toString(),
    });

    console.log('Google Script response status:', res.status);
    const responseText = await res.text();
    console.log('Google Script response:', responseText);

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: 'Upstream error', details: responseText }, { status: 502 });
    }

    // Send WhatsApp notification (async, don't wait)
    sendWhatsAppNotification(data).catch(err => console.error('WhatsApp error:', err));

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message || 'Unknown error' }, { status: 500 });
  }
}
