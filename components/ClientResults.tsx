import React from "react";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We analyze your business, target audience, and competitors to create a customized growth strategy tailored to your goals."
  },
  {
    number: "02",
    title: "Campaign Setup & Launch",
    description:
      "We build high-converting landing pages, set up Meta Ads campaigns, and integrate WhatsApp automation—all optimized for maximum ROI."
  },
  {
    number: "03",
    title: "Monitor & Optimize",
    description:
      "We continuously track performance, A/B test creatives, and refine targeting to lower your cost per lead and scale results."
  },
  {
    number: "04",
    title: "Scale & Grow",
    description:
      "As results improve, we scale your budget strategically while maintaining profitability and delivering consistent quality leads."
  }
];

export default function ClientResults() {
  return (
    <section className="w-full bg-lightGrey py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">Our Process</h2>
          <p className="text-lg text-textGrey max-w-2xl mx-auto">
            A proven 4-step framework to generate qualified leads and grow your business predictably
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Number Badge */}
                <div className="flex-shrink-0 w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-ink mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-textGrey leading-relaxed">
                    {step.description}
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
