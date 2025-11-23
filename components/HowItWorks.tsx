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
      title: "Strategy & Discovery",
      description:
        "We analyze your business goals, target audience, and competitive landscape to create a data-driven marketing strategy tailored to your needs.",
    },
    {
      number: "02",
      title: "Campaign Setup",
      description:
        "Our team builds optimized campaigns across channels, setting up tracking, audiences, and creative assets for maximum performance.",
    },
    {
      number: "03",
      title: "Launch & Optimize",
      description:
        "We launch your campaigns and continuously monitor performance, making real-time adjustments to improve ROI and scale winning strategies.",
    },
    {
      number: "04",
      title: "Scale & Report",
      description:
        "As campaigns prove successful, we scale spend strategically while providing transparent reporting on all key metrics and business outcomes.",
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-gradient-to-b from-white via-gray-50/60 to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven process delivers results in four simple steps
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
              className="group relative bg-gray-50 rounded-xl p-8 md:p-10 hover:bg-gray-100 transition-all duration-300 border border-gray-100"
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
