import React from "react";

export default function WhyChooseUs() {
  const stats = [
    {
      number: "15+",
      label: "Years of Marketing Experience"
    },
    {
      number: "100+",
      label: "Businesses Grown Across India"
    },
    {
      number: "24/7",
      label: "WhatsApp Support Available"
    },
    {
      number: "100%",
      label: "Transparent Reporting"
    }
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Your Trusted Performance Marketing Partner
          </h2>
          <p className="text-lg text-textGrey max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience helping brands grow online, Jupho specializes in creating marketing systems that drive ROI, not just traffic. Our team of certified experts ensures every campaign is built for scale, accountability, and measurable success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-lightGrey rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl font-bold text-brand mb-2">
                {stat.number}
              </div>
              <p className="text-sm text-textGrey font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-lightGrey rounded-xl p-8 text-center flex items-center justify-center min-h-[180px]">
            <img
              src="/google-partner.png"
              alt="Google Partner Badge"
              className="h-28 md:h-32 w-auto object-contain"
              loading="lazy"
            />
          </div>
          <div className="bg-lightGrey rounded-xl p-8 text-center flex items-center justify-center min-h-[180px]">
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
