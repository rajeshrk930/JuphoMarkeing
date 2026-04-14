import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dataPath = path.join(process.cwd(), 'data', 'results.json');
    let contents = '[]';
    try {
      contents = await fs.readFile(dataPath, 'utf-8');
    } catch (e) {
      // return empty array if no file
    }

    const arr = JSON.parse(contents || '[]');
    return NextResponse.json({ ok: true, results: arr });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message || 'Unknown error' }, { status: 500 });
  }
}
