"use client";

import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes your performance marketing approach different?",
      answer: "We focus on profit-first metrics like MER, CAC, and payback windows rather than vanity metrics. Our data-driven approach includes rapid creative testing, clean tracking architecture, and strategic budget allocation to maximize ROI at every stage."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients see initial improvements within 2-3 weeks as we optimize campaigns. Significant scaling typically happens after 30-45 days once we've identified winning creative angles and audience segments. We provide weekly reports to track progress transparently."
    },
    {
      question: "What industries do you work with?",
      answer: "We specialize in DTC brands, SaaS companies, coaching businesses, and professional services. Our performance marketing strategies are adaptable across industries, with proven success in e-commerce, B2B lead generation, and high-ticket service offerings."
    },
    {
      question: "Do you require a minimum ad spend commitment?",
      answer: "Our starter package begins at ₹20,000 per month, which includes strategy, creative development, and campaign management. We recommend a minimum ad spend of ₹15,000-30,000 monthly to generate sufficient data for optimization and meaningful results."
    },
    {
      question: "How do you handle creative production?",
      answer: "We produce UGC-style ads with proven hooks and native formats. Our team handles scripting, creator sourcing, and editing. We typically deliver 3-5 video variations per sprint with rapid iteration based on performance data."
    },
    {
      question: "What platforms do you run ads on?",
      answer: "We primarily focus on Meta (Facebook & Instagram) and Google Ads, with WhatsApp funnel integration for direct response. We can also manage LinkedIn, TikTok, and YouTube campaigns based on your target audience and business objectives."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full bg-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-brand mx-auto mt-6 rounded-full" />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg md:text-xl font-bold text-black pr-8">
                  {faq.question}
                </span>
                
                {/* Plus/Minus Icon */}
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center">
                    {openIndex === index ? (
                      <svg
                        className="w-5 h-5 text-brand transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-brand transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </button>

              {/* Answer (Collapsible) */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Removed CTA; final audit section will handle conversion */}

      </div>
    </section>
  );
}
