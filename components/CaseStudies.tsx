// Simple Case Studies Section (SMB-friendly real numbers)
import React from "react";

interface CaseStudy {
  client: string;
  leads: number;
  cpl: number; // cost per lead in INR
  time: string;
  summary: string;
}

const studies: CaseStudy[] = [
  {
    client: "Local Jewellery Shop",
    leads: 267,
    cpl: 34,
    time: "12 Days",
    summary: "Used location-targeted Meta ads + WhatsApp follow-up to drive steady daily inquiries." 
  },
  {
    client: "Neighbourhood Gym",
    leads: 183,
    cpl: 42,
    time: "21 Days",
    summary: "Simple interest-based ad sets + landing page form + morning WhatsApp automation." 
  },
  {
    client: "Regional Electronics Retailer",
    leads: 392,
    cpl: 51,
    time: "30 Days",
    summary: "Offer-focused creatives + daily optimization to reduce CPL week over week." 
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="w-full bg-white py-12 md:py-18">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">Recent Results</h2>
          <p className="text-base text-[#333333] font-medium max-w-xl mx-auto">
            Real campaigns with clear, simple performance metrics Indian businesses understand immediately.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {studies.map((s, i) => (
            <div key={i} className="group bg-white rounded-md border border-orange-200 p-5 shadow-lg shadow-orange-100 hover:shadow-xl hover:shadow-orange-200 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-[#1A1A1A]">{s.client}</h3>
                <span className="inline-block text-xs font-medium bg-[#FF6B00] text-white px-2 py-1 rounded">
                  {s.time}
                </span>
              </div>
              <p className="text-sm text-[#333333] font-medium mb-4 leading-relaxed">{s.summary}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white rounded-md p-3 flex flex-col border border-gray-200 shadow-sm">
                  <span className="text-[10px] font-semibold text-[#333333]">Leads Generated</span>
                  <span className="text-xl font-bold text-[#FF6B00]">{s.leads}</span>
                </div>
                <div className="bg-white rounded-md p-3 flex flex-col border border-gray-200 shadow-sm">
                  <span className="text-[10px] font-semibold text-[#333333]">Cost Per Lead</span>
                  <span className="text-xl font-bold text-brand-light" style={{color: '#B45309'}}>₹{s.cpl}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#666666] font-medium mt-6 text-center">
          Figures are representative of structured ad spend + daily optimization. Individual results vary by offer, market and budget.
        </p>
      </div>
    </section>
  );
}
