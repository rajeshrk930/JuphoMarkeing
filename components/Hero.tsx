"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative w-full min-h-[500px] md:h-[320px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/herobg.png"
          alt="Hero Background"
          width={534}
          height={766}
          priority
          className="w-full h-full object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/75 z-[1]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-5 w-full">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-5 md:space-y-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold text-white leading-tight"
            >
              Transform Your Business with Performance Marketing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-sm sm:text-base md:text-sm text-gray-100 leading-relaxed max-w-xl"
            >
              We help Indian businesses generate quality leads, increase sales, and grow with Meta Ads, websites, and smart WhatsApp automation.
            </motion.p>

            {/* BADGES - 2x2 Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2"
            >
              <div className="flex items-start gap-2.5 text-white">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base md:text-sm font-medium leading-snug">Meta Ads + WhatsApp Automation Specialist</span>
              </div>
              <div className="flex items-start gap-2.5 text-white">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base md:text-sm font-medium leading-snug">Proven Results for Local & Online Businesses</span>
              </div>
              <div className="flex items-start gap-2.5 text-white">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base md:text-sm font-medium leading-snug">Fast Support & Clear Communication</span>
              </div>
              <div className="flex items-start gap-2.5 text-white">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base md:text-sm font-medium leading-snug">Transparent Reporting & Strategy</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CTA BOX - Aligned like reference */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white rounded-xl p-6 md:p-7 shadow-2xl w-full max-w-md md:max-w-sm mx-auto md:mx-0"
          >
            <h3 className="text-xl md:text-xl font-bold text-ink mb-5">
              Request a Call Back
            </h3>
            
            {/* CTA Button */}
            <motion.button
              onClick={onOpenContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#00b67a] hover:bg-[#009966] text-white px-6 py-4 rounded-md text-base md:text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Free Audit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>

            {/* Privacy Text */}
            <div className="mt-4 flex items-center gap-2 text-xs md:text-xs text-gray-500">
              <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>We respect your privacy</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
