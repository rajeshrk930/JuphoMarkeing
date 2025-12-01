"use client";
import React from "react";

export default function BrandMarquee() {
  // Realistic client categories & known Indian brand types
  const brands = [
    "Real Estate Builders",
    "Salons & Beauty Studios",
    "Gyms & Fitness Centers",
    "Doctors & Clinics",
    "Astrology Services",
    "Coaching Institutes",
    "Restaurants & Cloud Kitchens",
    "E-commerce Stores",
    "Interior Designers",
    "Boutiques & Fashion Stores",
    "Local Service Businesses",
    "Education & Training Brands"
  ];

  const allBrands = [...brands, ...brands];

  return (
    <section className="w-full bg-bgSection py-12 overflow-hidden">
      <div className="relative">

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bgSection to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bgSection to-transparent z-10" />

        {/* Marquee */}
        <div className="flex animate-marquee-rtl">
          {allBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-10 flex items-center justify-center"
            >
              <span className="text-xl md:text-2xl font-semibold text-textGrey/50 whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
