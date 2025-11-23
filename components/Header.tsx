"use client";

import React, { useState, useEffect } from "react";

type NavLink = { label: string; target: string };

const navLinks: NavLink[] = [
  { label: "How It Works", target: "how-it-works" },
  { label: "Services", target: "services" },
  { label: "Reviews", target: "reviews" },
  { label: "FAQs", target: "faqs" }
];

interface HeaderProps {
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.target);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-1 flex items-center justify-between gap-4">
        <a href="/" className="flex-shrink-0">
          <img
            src="/jupho-logo2.png"
            alt="Jupho Logo"
            className="h-20 md:h-24 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href="/" /* prevent hash in URL */
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(link.target);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className={`cursor-pointer transition-colors ${
                activeSection === link.target
                  ? "text-brand font-semibold"
                  : "hover:text-brand"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20your%20marketing%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-5 py-2 rounded-md text-sm font-semibold transition-colors shadow-sm hover:shadow-md"
          >
            Chat Now
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 text-gray-700"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden px-4 sm:px-8 pb-3 transition-all ${isOpen ? "max-h-96" : "max-h-0 overflow-hidden"}`}>
        <div className="bg-white border border-gray-100 rounded-2xl shadow-lg divide-y divide-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href="/"
              className="block px-4 py-4 text-sm font-medium text-gray-700 hover:text-brand"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(link.target);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                setIsOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="p-4">
            <button
              onClick={() => {
                onOpenContact();
                setIsOpen(false);
              }}
              className="block w-full text-center bg-[#3B82F6] hover:bg-[#2563EB] text-white px-4 py-3 rounded-md text-sm font-semibold transition-colors shadow-sm hover:shadow-md"
            >
              Book A Call
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
