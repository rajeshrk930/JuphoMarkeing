// THEME LOCK - DO NOT AUTO MODIFY
import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Meta Ads",
    benefits: [
      "Advanced campaign optimization and audience targeting",
      "Data-driven strategies that maximize ROAS",
      "A/B testing and continuous performance improvement"
    ],
    tint: "bg-[#E6FFFA]/20",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="#14B8A6" strokeWidth="2" />
        <path d="M3 8h18" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="12" cy="13" r="3" stroke="#3B82F6" strokeWidth="2" />
        <path d="M16 17l3 3" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Brand Strategy",
    benefits: [
      "Comprehensive brand positioning and messaging",
      "Market research and competitor analysis",
      "Brand identity development and guidelines"
    ],
    tint: "bg-[#E6FFFA]/20",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 4h16v16H4z" stroke="#14B8A6" strokeWidth="2" />
        <path d="M7 14l3-3 2 2 5-5" stroke="#3B82F6" strokeWidth="2" fill="none" />
        <path d="M7 18h10" stroke="#14B8A6" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: "Design",
    benefits: [
      "Creative ad designs that capture attention",
      "Brand-consistent visual assets across platforms",
      "High-converting landing pages and creatives"
    ],
    tint: "bg-[#EFF6FF]/20",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2l4 4-8 8-4 1 1-4 8-8z" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="17" cy="7" r="3" stroke="#14B8A6" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: "Automation",
    benefits: [
      "Automated lead qualification and nurturing",
      "WhatsApp and email marketing workflows",
      "CRM integration and performance tracking"
    ],
    tint: "bg-[#E6FFFA]/20",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="#14B8A6" strokeWidth="2" />
        <path d="M12 8v4l3 3" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="#3B82F6" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-gradient-to-b from-white via-[#EFF6FF]/40 to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">Our Services</h2>
          <p className="text-lg text-[#444444] max-w-2xl mx-auto">
            Comprehensive performance marketing solutions tailored to your business goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              benefits={service.benefits}
              icon={service.icon}
              tint={service.tint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}