import React from "react";

const benefits = [
  {
    title: "Pay Only for Results",
    description:
      "We focus on generating qualified leads that actually convert, not just vanity metrics like impressions or clicks."
  },
  {
    title: "Fast Setup & Launch",
    description:
      "Get your campaigns live within 7 days. We handle everything—ads, landing pages, automation, and tracking."
  },
  {
    title: "Hyper-Targeted Campaigns",
    description:
      "We target the right audience based on demographics, interests, behaviors, and lookalike modeling for maximum ROI."
  },
  {
    title: "Full Automation Included",
    description:
      "Instant WhatsApp follow-ups, lead notifications, and CRM integration—so you never miss a hot prospect."
  },
  {
    title: "Transparent Reporting",
    description:
      "Real-time dashboard access showing exactly where your ad spend goes and what results you're getting."
  },
  {
    title: "Continuous Optimization",
    description:
      "We A/B test creatives, refine targeting, and optimize daily to lower costs and scale winning campaigns."
  },
  {
    title: "No Long-Term Contracts",
    description:
      "Month-to-month service. Stay because of results, not because you're locked into a contract."
  },
  {
    title: "Scalable Growth System",
    description:
      "Built to scale. As you grow, we increase budgets strategically while maintaining profitability and lead quality."
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-textGrey max-w-2xl mx-auto">
            We're not just another marketing agency. We're your growth partner focused on delivering real, measurable results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-lightGrey rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Title */}
              <h3 className="text-lg font-bold text-ink mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-textGrey leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
