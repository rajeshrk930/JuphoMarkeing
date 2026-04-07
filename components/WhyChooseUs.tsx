import React from "react";

export default function WhyChooseUs() {
  const proofCards = [
    {
      icon: "📊",
      title: "Data-Driven Strategy",
      description: "We research your market, audience, and competitors before launching ads."
    },
    {
      icon: "🎯",
      title: "High-Converting Creatives",
      description: "We create simple, clear ads designed to generate real leads."
    },
    {
      icon: "📈",
      title: "Continuous Optimization",
      description: "We monitor, test, and improve campaigns for better performance."
    }
  ];

  return (
    <section id="why-choose-us" className="w-full bg-bgSection py-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results. Real Growth.
          </h2>
          <p className="text-lg text-textSecondary max-w-3xl mx-auto leading-relaxed">
            We focus on performance-driven Meta Ads that generate real leads for businesses.
          </p>
        </div>

        {/* Proof Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {proofCards.map((card, index) => (
            <div
              key={index}
              className="bg-bgCard rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-[#132A4A]"
            >
              <div className="text-5xl mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-bgCard rounded-xl p-8 text-center flex items-center justify-center min-h-[180px] border border-[#132A4A]">
            <img
              src="/google-partner.png"
              alt="Google Partner Badge"
              className="h-28 md:h-32 w-auto object-contain"
              loading="lazy"
            />
          </div>
          <div className="bg-bgCard rounded-xl p-8 text-center flex items-center justify-center min-h-[180px] border border-[#132A4A]">
            <img
              src="/meta-certified.png"
              alt="Meta Certified Badge"
              className="h-28 md:h-32 w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
