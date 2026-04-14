import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'jupho2025';

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    const password = authHeader?.replace('Bearer ', '');

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { imageUrl, clientName, campaign, metric, caption } = body;

    if (!imageUrl) {
      return NextResponse.json({ ok: false, error: 'imageUrl is required' }, { status: 400 });
    }

    // Update results.json
    const dataPath = path.join(process.cwd(), 'data', 'results.json');
    let contents = '[]';
    try {
      contents = await fs.readFile(dataPath, 'utf-8');
    } catch (e) {
      // file may not exist yet
    }

    const arr = JSON.parse(contents || '[]');
    const item = {
      id: Date.now().toString(),
      imageUrl,
      clientName: clientName || '',
      campaign: campaign || '',
      metric: metric || '',
      date: new Date().toISOString(),
      caption: caption || '',
    };

    arr.unshift(item);
    await fs.mkdir(path.join(process.cwd(), 'data'), { recursive: true });
    await fs.writeFile(dataPath, JSON.stringify(arr, null, 2), 'utf-8');

    return NextResponse.json({ ok: true, item });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message || 'Unknown error' }, { status: 500 });
  }
}
