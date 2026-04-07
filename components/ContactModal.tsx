"use client";

import React from "react";
import ContactForm from "./ContactForm";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#132A4A] overflow-y-auto"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#1F3A5A] hover:bg-[#0B1F3A] transition-colors"
        aria-label="Close modal"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Content */}
      <div className="w-full max-w-7xl px-6 md:px-12 py-20 md:py-12 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20">
              
              {/* Left Column - Large Heading */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Send a message.
                </h2>
                <p className="text-base text-[#C7D0E0] leading-relaxed">
                  We're here to answer any question you may have.
                </p>

                {/* Contact Options */}
                <div className="space-y-6 pt-4">
                  <div>
                    <h3 className="font-bold text-white text-sm mb-2">careers</h3>
                    <p className="text-sm text-[#C7D0E0] mb-2">Would you like to join our growing team?</p>
                    <a href="mailto:hr@clickboostads.in" className="text-sm text-white font-semibold hover:text-brand transition">hr@clickboostads.in</a>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-2">Feedbacks</h3>
                    <p className="text-sm text-[#C7D0E0] mb-2">Have a project in mind?</p>
                    <a href="mailto:hi@clickboostads.in" className="text-sm text-white font-semibold hover:text-brand transition">hi@clickboostads.in</a>
                  </div>
                </div>
              </div>

          {/* Right Column - Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
