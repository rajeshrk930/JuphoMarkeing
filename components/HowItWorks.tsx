"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * HowItWorks (Animated)
 * - Uses framer-motion for smooth reveal animations
 * - Each step fades + slides up when it enters the viewport
 * - Light hover lift is applied to each card
 *
 * NOTE: This file references your uploaded logo image as a decorative asset.
 * Local path used: /mnt/data/583841cb-e186-4e3d-950c-8ada7094e51a.jfif
 * Replace it with /public/assets/logo.png after you add your logo to the repo.
 */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Understand Your Business",
      description:
        "We learn about your products, customers, and goals. No complex jargon - just understanding what makes your business successful.",
    },
    {
      number: "02", 
      title: "Launch High-Converting Ad Campaigns",
      description:
        "We create simple, effective ads that reach your ideal customers on Facebook and Instagram. Track every rupee spent.",
    },
    {
      number: "03",
      title: "Optimize and Scale Results",
      description:
        "We monitor daily performance, reduce cost per lead, and increase your customer flow. More leads, better quality, lower cost.",
    },
    {
      number: "04",
      title: "Scale & Report",
      description:
        "As campaigns prove successful, we scale spend strategically while providing transparent reporting on all key metrics and business outcomes.",
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">
            How We Grow Your Business
          </h2>
          <p className="text-base text-[#333333] font-medium max-w-xl mx-auto">
            Simple 3-step process to get more customers for your Indian business. No complicated tech - just results.
          </p>
        </motion.div>

        {/* Steps container with stagger */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="space-y-6"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group relative bg-white rounded-md p-6 md:p-8 hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-md"
              whileHover={{ y: -6 }}
            >
              {/* Vertical Accent Bar */}
              <div
                aria-hidden
                className="absolute left-0 top-0 bottom-0 w-1 bg-brand rounded-l-xl"
              />

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-brand flex items-center justify-center shadow-sm">
                    <span className="text-2xl md:text-3xl font-bold text-brand">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-black">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
