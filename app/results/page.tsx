"use client";

import React, { useState } from "react";
import ResultsGallery from '../../components/ResultsGallery';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import MobileBottomNav from '../../components/MobileBottomNav';
import ContactModal from '../../components/ContactModal';

export default function ResultsPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <Header onOpenContact={() => setIsContactModalOpen(true)} />
      
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6A00] rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6A00] rounded-full filter blur-[120px]"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="text-center mb-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-2xl">📊</span>
                <span className="text-white/90 text-sm font-medium">Real Campaign Data</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-[#FF6A00]">
                  Real Campaign Results
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
                Actual performance screenshots from our Meta Ads campaigns
              </p>
            </div>
          </div>
        </div>

        {/* Results Gallery */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <ResultsGallery />
        </div>
      </div>

      <Footer onOpenContact={() => setIsContactModalOpen(true)} />
      <ScrollToTop />
      <MobileBottomNav onOpenContact={() => setIsContactModalOpen(true)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
