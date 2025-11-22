"use client";
import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="w-full bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center space-y-8">

          {/* CENTERED CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black leading-tight tracking-tight"
            >
              Turn Ad Spend Into Profitable Revenue
            </motion.h1>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm md:text-base"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand rounded-full"></div>
                <span className="font-semibold text-gray-700">2+ Years</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand rounded-full"></div>
                <span className="font-semibold text-gray-700">150+ Brands</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand rounded-full"></div>
                <span className="font-semibold text-gray-700">100+ Happy Clients</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              Data-driven campaigns that deliver measurable ROI. Expert strategies to grow your business faster.
            </motion.p>

            {/* PRIMARY CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="pt-4"
            >
              <motion.button
                onClick={onOpenContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-brand text-white px-10 py-5 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book A Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
