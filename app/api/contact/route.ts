import { NextResponse } from 'next/server';

// Placeholder Google Apps Script web app endpoint; replace with env var
const SCRIPT_ENDPOINT = process.env.GOOGLE_SCRIPT_ENDPOINT || 'https://script.google.com/macros/s/REPLACE_DEPLOY_ID/exec';

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

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message || 'Unknown error' }, { status: 500 });
  }
}
