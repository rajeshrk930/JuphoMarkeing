// THEME LOCK - DO NOT AUTO MODIFY
// Primary: #14B8A6 (teal)  Secondary CTA/accents: #3B82F6 (blue)

import React from "react";

type Props = {
  title: string;
  benefits: string[];
  icon?: React.ReactNode;
  tint?: string; // optional bg tint like "bg-[#E6FFFA]/20"
};

export default function ServiceCard({ title, benefits, icon, tint = "bg-[#E6FFFA]/20" }: Props) {
  return (
    <article
      className="group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-400 border border-gray-100 hover:-translate-y-2"
      aria-labelledby={`service-${title}`}
    >
      {/* subtle top accent (kept but faint) */}
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex-1 space-y-5 mt-2">
        {/* Icon + title row */}
        <div className="flex items-start gap-4">
          <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${tint}`}>
            <span className="inline-block">{icon}</span>
          </div>

          <div>
            <h3 id={`service-${title}`} className="text-2xl font-bold text-[#111111] group-hover:text-[#3B82F6] transition-colors duration-300">
              {title}
            </h3>
          </div>
        </div>

        {/* Benefits list */}
        <ul className="space-y-3.5 mt-2">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg className="w-5 h-5 flex-shrink-0 text-[#14B8A6] mt-0.5" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" stroke="#14B8A6" strokeWidth="1.4" fill="none" />
                <path d="M7.5 10.5l1.5 1.5 3-3" stroke="#14B8A6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <span className="text-sm text-[#444444] leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>

        {/* hover arrow */}
        <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center group-hover:bg-[#3B82F6]/20">
            <svg className="w-5 h-5 text-[#3B82F6] group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}