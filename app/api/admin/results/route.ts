import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { writeFile } from 'fs/promises';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'jupho2025';

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    const password = authHeader?.replace('Bearer ', '');

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;
    const clientName = formData.get('clientName') as string;
    const campaign = formData.get('campaign') as string;
    const metric = formData.get('metric') as string;
    const caption = formData.get('caption') as string;

    if (!file) {
      return NextResponse.json({ ok: false, error: 'File is required' }, { status: 400 });
    }

    // Create unique filename
    const timestamp = Date.now();
    const fileExtension = file.name.split('.').pop();
    const fileName = `ad-${timestamp}.${fileExtension}`;
    
    // Save file to public/ads/
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const adsDir = path.join(process.cwd(), 'public', 'ads');
    
    // Create ads directory if it doesn't exist
    await fs.mkdir(adsDir, { recursive: true });
    
    const filePath = path.join(adsDir, fileName);
    await writeFile(filePath, buffer);

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
      id: timestamp.toString(),
      imageUrl: `/ads/${fileName}`,
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
