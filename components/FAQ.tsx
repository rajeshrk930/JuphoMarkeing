"use client";

import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How fast can I see results from Meta Ads Management?",
      answer: "Most clients see initial leads within 7–10 days; meaningful performance improvements usually take 2–4 weeks as campaigns optimize."
    },
    {
      question: "What industries do you work with?",
      answer: "We work with local and national businesses across real estate, education, coaching, ecommerce, salons, restaurants, and other lead-focused industries. Campaigns for lead-generation niches typically perform best."
    },
    {
      question: "Do you provide creatives or do I need to supply them?",
      answer: "Our Ad Creative Design team produces image and video ads, headlines, and ad copy. Share brand assets if available; if not, we’ll design on-brand creatives for you."
    },
    {
      question: "How does AI automation help my business?",
      answer: "AI automation enables instant replies, pre-filled WhatsApp messages, and structured follow-up workflows—converting more leads while reducing manual work."
    },
    {
      question: "What is included in website development?",
      answer: "A responsive, conversion-focused landing page with fast performance, tracking and integrations (analytics, WhatsApp), and a clear UI built for paid traffic."
    },
    {
      question: "What are the monthly charges after setup?",
      answer: "Meta Ads Management is billed monthly. Creative production and WhatsApp automation may be included depending on your package; final pricing depends on ad spend and selected services — we’ll provide a tailored quote."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-bg py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            FAQs
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-5xl mx-auto space-y-0 border-t border-[#FF6A00]/30">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#FF6A00]/30"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-6 md:py-8 text-left hover:bg-bgSection transition-colors"
              >
                <span className="text-base md:text-lg font-normal text-white pr-8">
                  {faq.question}
                </span>
                
                {/* Chevron Icon */}
                <div className="flex-shrink-0">
                  <svg 
                    className={`w-5 h-5 text-[#FF6A00] transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer (Collapsible) */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-6 md:pb-8">
                  <p className="text-base text-textSecondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
