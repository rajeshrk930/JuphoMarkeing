// THEME LOCK - DO NOT AUTO MODIFY
// Primary: #14B8A6 (teal)  Secondary CTA/accents: #3B82F6 (blue)

import React from "react";

type Props = {
  title: string;
  benefits: string[];
  icon?: React.ReactNode;
  tint?: string; // optional bg tint like "bg-[#E6FFFA]/20"
  bestFor?: string; // SMB context label
};

export default function ServiceCard({ title, benefits, icon, tint = "bg-[#E6FFFA]/20", bestFor }: Props) {
  return (
    <article
      className="group relative bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:-translate-y-1"
      aria-labelledby={`service-${title}`}
    >
      {/* subtle top accent (kept but faint) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex-1 space-y-5 mt-2">
        {/* Icon + title row */}
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-md bg-white flex items-center justify-center border border-gray-200">
            <span className="inline-block">{icon}</span>
          </div>

          <div>
            <h3 id={`service-${title}`} className="text-xl font-bold text-ink group-hover:text-brand transition-colors duration-300">
              {title}
            </h3>
            {bestFor && (
              <span className="inline-block mt-1 px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-md">
                Best for: {bestFor}
              </span>
            )}
          </div>
        </div>

        {/* Benefits list */}
        <ul className="space-y-2.5 mt-3">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg className="w-5 h-5 flex-shrink-0 text-brand mt-0.5" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" stroke="var(--primary)" strokeWidth="2" fill="none" />
                <path d="M7.5 10.5l1.5 1.5 3-3" stroke="var(--primary-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <span className="text-sm text-[#333333] font-medium leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>

        {/* hover arrow */}
        <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-9 h-9 rounded-md bg-brand/10 flex items-center justify-center group-hover:bg-brand/20">
            <svg className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}