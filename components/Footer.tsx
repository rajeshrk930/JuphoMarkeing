import React from "react";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full text-white py-8 pb-24 md:pb-8" style={{ backgroundColor: '#212529' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* CTA Heading */}
        <div className="mb-6 hidden md:block">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Start Growing with Performance Marketing Today!
          </h2>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex flex-col items-center justify-center gap-3 mb-6">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 bg-[#00b67a] hover:bg-[#009966] text-white px-8 py-4 rounded-md text-lg font-bold transition-all duration-300 shadow-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get a Custom Proposal
          </button>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">
            Jupho Marketing Agency © {year} All rights reserved | 
            <a href="/privacy-policy" className="text-gray-400 hover:text-white ml-2">Privacy Policy</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
