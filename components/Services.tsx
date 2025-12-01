import React from "react";

const services = [
  {
    title: "Lead Generation (Meta Ads)",
    benefits: [
      "Facebook & Instagram campaign management",
      "Advanced audience targeting & retargeting",
      "Daily optimization for better CPL",
      "A/B testing and performance tracking"
    ],
    price: "₹10,000",
    priceLabel: "Starting at",
    pricePeriod: "/month",
    image: "/lead-generation.png" 
  },
  {
    title: "AI Automation & Integration",
    benefits: [
      "Custom AI chatbot development",
      "Automated lead qualification",
      "WhatsApp & CRM integration",
      "Workflow automation setup"
    ],
    price: "₹15,000",
    priceLabel: "Starting at",
    pricePeriod: "/setup",
    image: "/ai-automation.png"
  },
  {
    title: "Website Design & Development",
    benefits: [
      "Custom responsive website design",
      "Landing page optimization",
      "SEO-friendly development",
      "Ongoing maintenance & support"
    ],
    price: "₹15,000",
    priceLabel: "Starting at",
    pricePeriod: "/month",
    image: "/website-design.png"
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-lightGrey py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">
            What We Deliver
          </h2>
          <p className="text-base text-textGrey font-medium max-w-xl mx-auto">
            Complete Meta Ads management with creative production and automation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden bg-lightGrey">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink mb-4 group-hover:text-brand transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Benefits List */}
                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-textGrey">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="#00b67a" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="inline-block px-3 py-1 rounded-md mb-2" style={{ backgroundColor: '#f4b400' }}>
                    <span className="text-xs font-semibold text-black uppercase tracking-wide">
                      {service.priceLabel}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-ink">{service.price}</span>
                    <span className="text-sm text-textGrey font-medium">{service.pricePeriod}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}