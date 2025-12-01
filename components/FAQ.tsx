"use client";

import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How fast can I see results from Meta Ads?",
      answer: "You usually see traction within the first 7–10 days. Real optimization takes 2–4 weeks as the system learns and your audience stabilizes."
    },
    {
      question: "What industries do you work with?",
      answer: "Real estate, education, coaching, ecommerce, salons, restaurants, and local service businesses. Lead-generation focused niches perform best."
    },
    {
      question: "Do you provide content or do I need to share creatives?",
      answer: "We handle ad creatives, copy, and strategy. If you have brand assets, we use them. If not, we create everything from scratch."
    },
    {
      question: "How does AI automation help my business?",
      answer: "Instant replies, faster follow-up, and structured workflows turn more leads into paying customers. It reduces manual work and increases conversion rates."
    },
    {
      question: "What is included in website development?",
      answer: "A responsive design, fast performance, SEO basics, integrations, and a clean UI. You get a landing page built to convert paid traffic."
    },
    {
      question: "What are the monthly charges after setup?",
      answer: "Ads management has a fixed monthly fee. Automation and website hosting have minimal maintenance charges depending on usage and integrations."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            FAQs
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-5xl mx-auto space-y-0 border-t border-gray-200">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-6 md:py-8 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base md:text-lg font-normal text-ink pr-8">
                  {faq.question}
                </span>
                
                {/* Chevron Icon */}
                <div className="flex-shrink-0">
                  <svg 
                    className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} 
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
                  <p className="text-base text-gray-600 leading-relaxed">
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
