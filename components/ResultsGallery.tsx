"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

type Result = {
  id: string;
  image_url: string;
  client_name?: string | null;
  campaign?: string | null;
  metric?: string | null;
  created_at?: string;
  caption?: string | null;
};

type Props = {
  showDelete?: boolean;
};

export default function ResultsGallery({ showDelete = false }: Props) {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load results from Supabase
    const fetchResults = async () => {
      if (!supabase) {
        console.warn('Supabase not configured');
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('ad_results')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching results:', error);
      } else {
        setResults(data || []);
      }
      setLoading(false);
    };

    fetchResults();

    // Listen for new uploads
    const handleNewUpload = (event: CustomEvent) => {
      const newResult = event.detail;
      setResults(prev => [newResult, ...prev]);
    };

    window.addEventListener('newResultUploaded' as any, handleNewUpload);
    return () => window.removeEventListener('newResultUploaded' as any, handleNewUpload);
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this result?')) return;
    
    if (!supabase) {
      alert('Database not configured');
      return;
    }

    const { error } = await supabase
      .from('ad_results')
      .delete()
      .eq('id', id);

    if (error) {
      alert('Error deleting: ' + error.message);
    } else {
      setResults(results.filter(r => r.id !== id));
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Loading results...</div>;
  }

  if (!results.length) {
    return (
      <div className="p-12 text-center">
        <div className="max-w-md mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="text-gray-400 mb-4">
            <svg className="w-20 h-20 mx-auto mb-6 text-orange-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-lg font-medium text-white mb-2">No results yet</p>
            <p className="text-sm text-gray-400">Check back soon for amazing campaign results!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {results.map((r) => (
        <div key={r.id} className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:border-orange-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-[1.02]">
          {/* Image Container */}
          <div className="relative overflow-hidden">
            <img 
              src={r.image_url} 
              alt={r.caption || r.client_name || 'Result'} 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
            />
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Content */}
          <div className="p-5">
            {r.client_name && (
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {r.client_name.charAt(0).toUpperCase()}
                </div>
                <div className="text-sm font-semibold text-white">{r.client_name}</div>
              </div>
            )}
            {r.campaign && (
              <div className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                </svg>
                {r.campaign}
              </div>
            )}
            {r.metric && (
              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500/20 to-[#00b67a]/20 border border-orange-400/30 text-orange-300 px-3 py-1.5 rounded-full text-sm font-semibold mb-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {r.metric}
              </div>
            )}
            {r.caption && <div className="text-xs text-gray-400 mt-3 line-clamp-2">{r.caption}</div>}
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
