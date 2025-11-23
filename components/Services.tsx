import React from "react";

export default function Services() {
  const services = [
    {
      title: "Meta Ads",
      benefits: [
        "Advanced campaign optimization and audience targeting",
        "Data-driven strategies that maximize ROAS",
        "A/B testing and continuous performance improvement"
      ]
    },
    {
      title: "Brand Strategy",
      benefits: [
        "Comprehensive brand positioning and messaging",
        "Market research and competitor analysis",
        "Brand identity development and guidelines"
      ]
    },
    {
      title: "Design",
      benefits: [
        "Creative ad designs that capture attention",
        "Brand-consistent visual assets across platforms",
        "High-converting landing pages and creatives"
      ]
    },
    {
      title: "Automation",
      benefits: [
        "Automated lead qualification and nurturing",
        "WhatsApp and email marketing workflows",
        "CRM integration and performance tracking"
      ]
    }
  ];

  const renderIcon = (title: string) => {
    switch (title) {
      case "Meta Ads":
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="3" y="4" width="18" height="14" rx="2" stroke="#14B8A6" strokeWidth="2" />
            <path d="M3 8h18" stroke="#3B82F6" strokeWidth="2" />
            <circle cx="12" cy="13" r="3" stroke="#3B82F6" strokeWidth="2" />
            <path d="M16 17l3 3" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "Brand Strategy":
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 4h16v16H4z" stroke="#14B8A6" strokeWidth="2" />
            <path d="M7 14l3-3 2 2 5-5" stroke="#3B82F6" strokeWidth="2" fill="none" />
            <path d="M7 18h10" stroke="#14B8A6" strokeWidth="2" />
          </svg>
        );
      case "Design":
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 2l4 4-8 8-4 1 1-4 8-8z" stroke="#3B82F6" strokeWidth="2" />
            <circle cx="17" cy="7" r="3" stroke="#14B8A6" strokeWidth="2" />
          </svg>
        );
      case "Automation":
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="12" cy="12" r="8" stroke="#14B8A6" strokeWidth="2" />
            <path d="M12 8v4l3 3" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="12" r="2" fill="#3B82F6" />
          </svg>
        );
      default:
        return null;
    }
  };

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
                {/* Flat Icon */}
                <div className="mb-4 flex items-center justify-start">
                  {renderIcon(service.title)}
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
