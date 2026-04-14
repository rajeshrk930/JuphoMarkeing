"use client";

import React, { useEffect, useState } from 'react';

type Result = {
  id: string;
  imageUrl: string;
  clientName?: string;
  campaign?: string;
  metric?: string;
  date?: string;
  caption?: string;
};

export default function ResultsGallery() {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    fetch('/api/results')
      .then((r) => r.json())
      .then((d) => {
        if (d.ok && Array.isArray(d.results)) setResults(d.results);
      })
      .catch(console.error);
  }, []);

  if (!results.length) return <div className="p-8 text-center text-gray-500">No results yet</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {results.map((r) => (
        <div key={r.id} className="bg-white rounded-lg shadow overflow-hidden">
          <img src={r.imageUrl} alt={r.caption || r.clientName || 'Result'} className="w-full h-56 object-cover" />
          <div className="p-3">
            <div className="text-sm font-semibold text-gray-900">{r.clientName}</div>
            <div className="text-xs text-gray-500">{r.campaign}</div>
            <div className="text-sm text-gray-700 mt-2">{r.metric}</div>
            {r.caption && <div className="text-xs text-gray-600 mt-2">{r.caption}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}
