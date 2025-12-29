import { NextResponse } from 'next/server';

const SCRIPT_ENDPOINT = process.env.GOOGLE_SCRIPT_ENDPOINT || '';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'jupho2025';

export async function GET(req: Request) {
  try {
    // Check password from header
    const authHeader = req.headers.get('authorization');
    const password = authHeader?.replace('Bearer ', '');
    
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
    }

    // Fetch leads from Google Sheets
    const res = await fetch(SCRIPT_ENDPOINT, {
      method: 'GET',
    });

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: 'Failed to fetch leads' }, { status: 502 });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message || 'Unknown error' }, { status: 500 });
  }
}
