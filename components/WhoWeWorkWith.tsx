import React from "react";

const industries = [
  {
    label: "Local Stores",
    description: "Retail shops, electronics, fashion"
  },
  {
    label: "Coaching & Courses", 
    description: "Education, training, consultants"
  },
  {
    label: "Clinics & Hospitals",
    description: "Healthcare, dental, wellness"
  },
  {
    label: "Real Estate",
    description: "Brokers, developers, agents"
  },
  {
    label: "Salons & Spas",
    description: "Beauty, grooming, wellness"
  },
  {
    label: "E-commerce Brands",
    description: "Online stores, D2C brands"
  }
];

export default function WhoWeWorkWith() {
  return (
    <section className="w-full bg-lightGrey py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Who We Work With
          </h2>
          <p className="text-lg text-textGrey max-w-2xl mx-auto">
            We help Indian businesses of all sizes get more customers through targeted marketing
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-ink mb-3">
                {industry.label}
              </h3>
              <p className="text-base text-textGrey leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Strip */}
        <div className="mt-12 text-center">
          <p className="text-base text-textGrey">
            Trusted by businesses in <span className="font-bold text-ink">Mumbai, Delhi, Bangalore, Hyderabad, Pune & 15+ cities</span>
          </p>
        </div>
      </div>
    </section>
  );
}