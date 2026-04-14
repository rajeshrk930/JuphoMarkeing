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

type Props = {
  showDelete?: boolean;
};

export default function ResultsGallery({ showDelete = false }: Props) {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load results from localStorage (temporary solution for serverless)
    const savedResults = localStorage.getItem('uploadedResults');
    if (savedResults) {
      try {
        const parsed = JSON.parse(savedResults);
        setResults(Array.isArray(parsed) ? parsed : []);
      } catch (e) {
        console.error('Error parsing results:', e);
      }
    }
    setLoading(false);

    // Listen for new uploads
    const handleNewUpload = (event: CustomEvent) => {
      const newResult = event.detail;
      setResults(prev => [newResult, ...prev]);
    };

    window.addEventListener('newResultUploaded' as any, handleNewUpload);
    return () => window.removeEventListener('newResultUploaded' as any, handleNewUpload);
  }, []);

  const handleDelete = (id: string) => {
    if (!confirm('Are you sure you want to delete this result?')) return;
    
    const updatedResults = results.filter(r => r.id !== id);
    setResults(updatedResults);
    localStorage.setItem('uploadedResults', JSON.stringify(updatedResults));
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Loading results...</div>;
  }

  if (!results.length) {
    return (
      <div className="p-12 text-center">
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-lg font-medium">No results yet</p>
          <p className="text-sm mt-2">Upload your first ad result from the admin panel</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {results.map((r) => (
        <div key={r.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow relative group">
          <img src={r.imageUrl} alt={r.caption || r.clientName || 'Result'} className="w-full h-64 object-cover" />
          <div className="p-4">
            {r.clientName && <div className="text-sm font-semibold text-gray-900 mb-1">{r.clientName}</div>}
            {r.campaign && <div className="text-xs text-gray-500 mb-2">{r.campaign}</div>}
            {r.metric && <div className="text-sm text-blue-600 font-medium mb-2">{r.metric}</div>}
            {r.caption && <div className="text-xs text-gray-600 mt-2">{r.caption}</div>}
          </div>
          
          {/* Admin Delete Button */}
          {showDelete && (
            <button
              onClick={() => handleDelete(r.id)}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              title="Delete this result"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
