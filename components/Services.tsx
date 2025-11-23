import React from "react";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Meta Ads",
      icon: "/metaads-2.png",
      benefits: [
        "Advanced campaign optimization and audience targeting",
        "Data-driven strategies that maximize ROAS",
        "A/B testing and continuous performance improvement"
      ]
    },
    {
      title: "Brand Strategy",
      icon: "/brand-2.png",
      benefits: [
        "Comprehensive brand positioning and messaging",
        "Market research and competitor analysis",
        "Brand identity development and guidelines"
      ]
    },
    {
      title: "Design",
      icon: "/design-2.png",
      benefits: [
        "Creative ad designs that capture attention",
        "Brand-consistent visual assets across platforms",
        "High-converting landing pages and creatives"
      ]
    },
    {
      title: "Automation",
      icon: "/automation-2.png",
      benefits: [
        "Automated lead qualification and nurturing",
        "WhatsApp and email marketing workflows",
        "CRM integration and performance tracking"
      ]
    }
  ];

  return (
    <section id="services" className="w-full bg-gradient-to-b from-white via-blue-50/40 to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive performance marketing solutions tailored to your business goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand/30 flex flex-col hover:-translate-y-2"
            >
              {/* Top accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-teal-500 to-brand-secondary rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="flex-1 space-y-5 mt-2">
                {/* Icon with background glow */}
                <div className="relative w-20 h-20 mb-4">
                  <div className="absolute inset-0 bg-brand/10 rounded-2xl blur-xl group-hover:bg-brand/20 transition-all duration-500" />
                  <div className="relative w-full h-full bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-500">
                    <Image 
                      src={service.icon} 
                      alt={`${service.title} icon`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Benefits */}
                <ul className="space-y-3.5">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg 
                        className="w-5 h-5 text-brand flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover arrow indicator */}
              <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand/20">
                  <svg 
                    className="w-5 h-5 text-brand group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Removed section-level CTA to reduce repetition */}

      </div>
    </section>
  );
}
