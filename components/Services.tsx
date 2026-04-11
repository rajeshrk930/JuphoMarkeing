import React from "react";

const services = [
  {
    title: "Meta Ads Management",
    description: "",
    benefits: [
      "Facebook & Instagram Ads",
      "Campaign Setup",
      "Daily Optimization",
      "Audience Targeting",
      "Monthly Report",
    ],
    price: "₹10,000",
    priceLabel: "Starting from",
    pricePeriod: "/month",
    image: "/lead-generation.png",
  },
  {
    title: "Ad Creative Design",
    description: "",
    benefits: [
      "Image Ad Design",
      "Ad Copywriting",
      "A/B Testing",
      "Brand Consistent Creatives",
    ],
    price: "Included in package",
    priceLabel: "Included",
    pricePeriod: "",
    image: "/design-2.png",
  },
  {
    title: "WhatsApp Lead Generation",
    description: "",
    benefits: [
      "Click to WhatsApp Ads",
      "Pre-filled Message Setup",
      "Lead Tracking",
      "Fast Response Strategy",
    ],
    price: "Included in package",
    priceLabel: "Included",
    pricePeriod: "",
    image: "/automation-2.png",
  },
];

export default function Services() {
  const servicesLocal = [
    {
      title: "Meta Ads Management",
      description: "",
      benefits: [
        "Facebook & Instagram Ads",
        "Campaign Setup",
        "Daily Optimization",
        "Audience Targeting",
        "Monthly Report",
      ],
      price: "₹10,000",
      priceLabel: "Starting from",
      pricePeriod: "/month",
      image: "/lead-generation.png",
    },
    {
      title: "Ad Creative Design",
      description: "",
      benefits: [
        "Image Ad Design",
        "Ad Copywriting",
        "A/B Testing",
        "Brand Consistent Creatives",
      ],
      price: "Included in package",
      priceLabel: "Included",
      pricePeriod: "",
      image: "/design-2.png",
    },
    {
      title: "WhatsApp Lead Generation",
      description: "",
      benefits: [
        "Click to WhatsApp Ads",
        "Pre-filled Message Setup",
        "Lead Tracking",
        "Fast Response Strategy",
      ],
      price: "Included in package",
      priceLabel: "Included",
      pricePeriod: "",
      image: "/automation-2.png",
    },
  ];

  return (
    <section id="services" className="w-full bg-bgSection py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What We Deliver</h2>
          <p className="text-base text-textSecondary font-medium max-w-xl mx-auto">
            Complete Meta Ads management with creative production and automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesLocal.map((service, index) => (
            <div
              key={index}
              className="group bg-bgCard rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#132A4A]"
            >
              <div className="relative h-48 overflow-hidden bg-[#132A4A]">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors duration-300">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-sm text-textSecondary mb-4 leading-relaxed">{service.description}</p>
                )}

                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-textSecondary">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="#00AEEF" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#132A4A]">
                  <div className="inline-block px-3 py-1 rounded-md mb-2" style={{ backgroundColor: "#FF7A00" }}>
                    <span className="text-xs font-semibold text-white uppercase tracking-wide">{service.priceLabel}</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-sm text-textSecondary font-medium">{service.pricePeriod}</span>
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
import React from "react";

const services = [
  {
    title: "Meta Ads Management",
    description: "",
    benefits: [
      "Facebook & Instagram Ads",
      "Campaign Setup",
      "Daily Optimization",
      "Audience Targeting",
      "Monthly Report",
    ],
    price: "₹10,000",
    priceLabel: "Starting from",
    pricePeriod: "/month",
    image: "/lead-generation.png",
  },
  {
    title: "Ad Creative Design",
    description: "",
    benefits: [
      "Image Ad Design",
      "Ad Copywriting",
      "A/B Testing",
      "Brand Consistent Creatives",
    ],
    price: "Included in package",
    priceLabel: "Included",
    pricePeriod: "",
    image: "/design-2.png",
  },
  {
    title: "WhatsApp Lead Generation",
    description: "",
    benefits: [
      "Click to WhatsApp Ads",
      "Pre-filled Message Setup",
      "Lead Tracking",
      "Fast Response Strategy",
    ],
    price: "Included in package",
    priceLabel: "Included",
    pricePeriod: "",
    image: "/automation-2.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-bgSection py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What We Deliver</h2>
          <p className="text-base text-textSecondary font-medium max-w-xl mx-auto">
            Complete Meta Ads management with creative production and automation
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-bgCard rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#132A4A]"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden bg-[#132A4A]">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors duration-300">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-sm text-textSecondary mb-4 leading-relaxed">{service.description}</p>
                )}
                {/* Benefits List */}
                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-textSecondary">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="#00AEEF" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
                {/* Pricing */}
                <div className="pt-4 border-t border-[#132A4A]">
                  <div className="inline-block px-3 py-1 rounded-md mb-2" style={{ backgroundColor: "#FF7A00" }}>
                    <span className="text-xs font-semibold text-white uppercase tracking-wide">{service.priceLabel}</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-sm text-textSecondary font-medium">{service.pricePeriod}</span>
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
      "Campaign Setup",
      "Daily Optimization",
      "Audience Targeting",
      "Monthly Report",
    ],
    price: "₹10,000",
    priceLabel: "Starting from",
    pricePeriod: "/month",
    image: "/lead-generation.png",
  },
  {
    title: "Ad Creative Design",
    description: "",
    benefits: [
      "Image Ad Design",
      "Ad Copywriting",
      "A/B Testing",
      "Brand Consistent Creatives",
    ],
    price: "Included in package",
    priceLabel: "Included",
    pricePeriod: "",
    image: "/design-2.png",
  },
  {
    title: "WhatsApp Lead Generation",
    description: "",
    benefits: [
      "Click to WhatsApp Ads",
      "Pre-filled Message Setup",
      "Lead Tracking",
      "Fast Response Strategy",
    ],
    price: "Included in package",
    priceLabel: "Included",
    pricePeriod: "",
    image: "/automation-2.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-bgSection py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What We Deliver</h2>
          <p className="text-base text-textSecondary font-medium max-w-xl mx-auto">
            Complete Meta Ads management with creative production and automation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-bgCard rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#132A4A]"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden bg-[#132A4A]">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors duration-300">
                  {service.title}
                </h3>

                {service.description && (
                  <p className="text-sm text-textSecondary mb-4 leading-relaxed">{service.description}</p>
                )}

                {/* Benefits List */}
                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-textSecondary">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="#00AEEF" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="pt-4 border-t border-[#132A4A]">
                  <div className="inline-block px-3 py-1 rounded-md mb-2" style={{ backgroundColor: "#FF7A00" }}>
                    <span className="text-xs font-semibold text-white uppercase tracking-wide">{service.priceLabel}</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-sm text-textSecondary font-medium">{service.pricePeriod}</span>
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
import React from "react";

const services = [
  {
    title: "Meta Ads Lead Generation",
    description: "We create and manage high-performing Meta Ads campaigns designed to generate consistent, high-quality leads for your business.",
    benefits: [
      "Facebook & Instagram Ads Management",
      "Advanced Targeting & Retargeting",
      "Daily Campaign Optimization",
      "A/B Testing for Better Performance",
      "Transparent Reporting & Insights"
    ],
    price: "₹10,000",
    priceLabel: "Starting from",
    pricePeriod: "/month",
    image: "/lead-generation.png" 
  },
  {
    title: "AI Automation & Integration",
    description: "Automate your lead management and customer interactions with intelligent AI chatbots and seamless CRM integration.",
    benefits: [
      "Custom AI chatbot development",
      "Automated lead qualification",
      "WhatsApp & CRM integration",
      "Workflow automation setup"
    ],
    price: "₹15,000",
    priceLabel: "Starting from",
    pricePeriod: "/setup",
    image: "/ai-automation.png"
  },
  {
    title: "Website Design & Development",
    description: "Professional, conversion-optimized websites built to turn your traffic into paying customers with modern design and SEO.",
    benefits: [
      "Custom responsive website design",
      "Landing page optimization",
      "SEO-friendly development",
      "Ongoing maintenance & support"
    ],
    price: "₹15,000",
    priceLabel: "Starting from",
    pricePeriod: "/month",
    image: "/website-design.png"
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-bgSection py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            What We Deliver
          </h2>
          <p className="text-base text-textSecondary font-medium max-w-xl mx-auto">
            Complete Meta Ads management with creative production and automation
          </p>
        </div>

        const services = [
          {
            title: "Meta Ads Management",
            description: "",
            benefits: [
              "Facebook & Instagram Ads",
              "Campaign Setup",
              "Daily Optimization",
              "Audience Targeting",
              "Monthly Report"
            ],
            price: "₹10,000",
            priceLabel: "Starting from",
            pricePeriod: "/month",
            image: "/lead-generation.png" 
          },
          {
            title: "Ad Creative Design",
            description: "",
            benefits: [
              "Image Ad Design",
              "Ad Copywriting",
              "A/B Testing",
              "Brand Consistent Creatives"
            ],
            price: "Included in package",
            priceLabel: "Included",
            pricePeriod: "",
            image: "/design-2.png"
          },
          {
            title: "WhatsApp Lead Generation",
            description: "",
            benefits: [
              "Click to WhatsApp Ads",
              "Pre-filled Message Setup",
              "Lead Tracking",
              "Fast Response Strategy"
            ],
            price: "Included in package",
            priceLabel: "Included",
            pricePeriod: "",
            image: "/automation-2.png"
          }
        ];
                <div className="pt-4 border-t border-[#132A4A]">
                  <div className="inline-block px-3 py-1 rounded-md mb-2" style={{ backgroundColor: '#FF7A00' }}>
                    <span className="text-xs font-semibold text-white uppercase tracking-wide">
                      {service.priceLabel}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-sm text-textSecondary font-medium">{service.pricePeriod}</span>
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