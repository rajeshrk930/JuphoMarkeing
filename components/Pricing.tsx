"use client";
import React from "react";

interface PricingProps {
  onOpenContact: () => void;
}

export default function Pricing({ onOpenContact }: PricingProps) {
  const packages = [
    {
      name: "Starter",
      price: "10,000",
      period: "/month",
      description: "Perfect for testing Meta Ads",
      features: [
        "1 campaign",
        "2 ad creatives",
        "Basic retargeting",
        "Daily optimization",
        "Weekly report"
      ],
      outcome: "A controlled, consistent start",
      popular: false
    },
    {
      name: "Growth",
      price: "15,000",
      period: "/month",
      description: "Scale your lead generation",
      features: [
        "2-3 campaigns",
        "3-5 creatives",
        "Competitor analysis",
        "Retargeting + testing",
        "Weekly strategy call",
        "Landing page text improvements"
      ],
      outcome: "Better targeting and CPL",
      popular: true
    },
    {
      name: "Pro Scale",
      price: "25,000",
      period: "/month",
      description: "Aggressive growth & scaling",
      features: [
        "Full-funnel setup",
        "5-8 creatives",
        "Lookalike audiences",
        "Advanced optimization",
        "Custom dashboard",
        "Scaling plan"
      ],
      outcome: "High-growth scaling support",
      popular: false
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-base text-gray-600">
            Transparent pricing. No contracts. Cancel anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg ${
                pkg.popular ? 'border-2 border-[#00b67a]' : 'border border-gray-200'
              } p-6 hover:border-gray-300 transition-all duration-200`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#00b67a] text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package Name */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-ink mb-1">{pkg.name}</h3>
                <p className="text-sm text-gray-500">{pkg.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-ink">₹{pkg.price}</span>
                  <span className="text-base text-gray-500">/month</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-textGrey">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="#00b67a" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Outcome */}
              <div className="mb-6 py-3 px-4 bg-gray-50 rounded border-l-4 border-[#00b67a]">
                <p className="text-xs text-gray-500 uppercase mb-1">Outcome</p>
                <p className="text-sm font-medium text-ink">{pkg.outcome}</p>
              </div>

              {/* CTA Button */}
              <button
                onClick={onOpenContact}
                className="w-full py-3 rounded-lg font-semibold transition-all duration-200 text-black hover:opacity-90"
                style={{ backgroundColor: '#f4b400' }}
              >
                Get a Custom Proposal →
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <p className="font-semibold text-ink mb-4">All Packages Include:</p>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-textGrey">
              <div className="flex items-center gap-2 justify-center">
                <svg className="w-5 h-5" fill="none" stroke="#00b67a" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Weekly reports</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <svg className="w-5 h-5" fill="none" stroke="#00b67a" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>WhatsApp support</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <svg className="w-5 h-5" fill="none" stroke="#00b67a" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Strategy call every 2 weeks</span>
              </div>
            </div>
            <p className="text-xs text-textGrey mt-4">
              * Ad spend is separate and paid directly to Meta. Minimum recommended: ₹15,000-30,000/month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
