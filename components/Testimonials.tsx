import React from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Anonymous Client",
      business: "E-commerce Fashion Brand",
      quote: "Jupho transformed our ad performance completely. The strategic approach and continuous optimization delivered results beyond our expectations.",
      metrics: {
        roas: "4.8x",
        cpa: "$32",
        mer: "3.2x"
      }
    },
    {
      name: "Anonymous Client",
      business: "SaaS Startup",
      quote: "Working with this team has been game-changing. Our lead quality improved dramatically while costs decreased. Highly recommend their expertise.",
      metrics: {
        roas: "6.2x",
        cpa: "$18",
        mer: "4.1x"
      }
    },
    {
      name: "Anonymous Client",
      business: "Coaching Business",
      quote: "The WhatsApp funnel integration was brilliant. We're closing more deals with less ad spend, and the reporting transparency is refreshing.",
      metrics: {
        roas: "5.5x",
        cpa: "$24",
        mer: "3.8x"
      }
    }
  ];

  return (
    <section id="reviews" className="w-full bg-gradient-to-br from-gray-50 to-blue-50/30 py-20 md:py-32 relative overflow-hidden">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #3B82F6 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from businesses we've helped scale
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand/30 flex flex-col hover:-translate-y-2"
            >
              {/* Top accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-blue-600 to-indigo-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Quote Icon with glow */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-brand/5 rounded-2xl blur-xl group-hover:bg-brand/10 transition-all duration-500" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                  <Image 
                    src="/quote.png" 
                    alt="Quote icon"
                    width={64}
                    height={64}
                    className="w-12 h-12 object-contain opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-gray-700 group-hover:text-gray-800 leading-relaxed mb-8 text-base transition-colors duration-300">
                "{testimonial.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <div className="font-bold text-lg text-gray-900 group-hover:text-brand transition-colors duration-300">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {testimonial.business}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                    ROAS
                  </div>
                  <div className="text-xl font-bold text-brand group-hover:scale-110 transition-transform duration-300">
                    {testimonial.metrics.roas}
                  </div>
                </div>
                <div className="text-center border-x border-gray-200">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                    CPA
                  </div>
                  <div className="text-xl font-bold text-brand group-hover:scale-110 transition-transform duration-300">
                    {testimonial.metrics.cpa}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                    MER
                  </div>
                  <div className="text-xl font-bold text-brand group-hover:scale-110 transition-transform duration-300">
                    {testimonial.metrics.mer}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Removed section-level CTA to keep focus on top + final conversion */}

      </div>
    </section>
  );
}
