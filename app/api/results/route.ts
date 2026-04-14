import { NextResponse } from 'next/server';

const CLOUDINARY_CLOUD_NAME = 'dzbscdr3f';
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || ''; // Optional for public access
const CLOUDINARY_FOLDER = 'ads'; // Your upload folder

export async function GET() {
  try {
    // Fetch images from Cloudinary folder
    const cloudinaryUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/list/${CLOUDINARY_FOLDER}.json`;
    
    const response = await fetch(cloudinaryUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      // If fetching from Cloudinary fails, return empty results
      return NextResponse.json({ ok: true, results: [] });
    }

    const data = await response.json();
    
    // Transform Cloudinary response to match our format
    const results = (data.resources || []).map((resource: any, index: number) => ({
      id: resource.public_id || index.toString(),
      imageUrl: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${resource.public_id}.${resource.format}`,
      clientName: resource.context?.custom?.clientName || '',
      campaign: resource.context?.custom?.campaign || '',
      metric: resource.context?.custom?.metric || '',
      caption: resource.context?.custom?.caption || '',
      date: resource.created_at || new Date().toISOString(),
    }));

    return NextResponse.json({ ok: true, results: results.reverse() }); // Newest first
  } catch (err: any) {
    console.error('Error fetching from Cloudinary:', err);
    return NextResponse.json({ ok: true, results: [] }); // Return empty array on error
  }
}
