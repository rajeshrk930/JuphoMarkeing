"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import WhatsAppFloat from "../components/WhatsAppFloat";
import ContactModal from "../components/ContactModal";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <Header onOpenContact={() => setIsContactModalOpen(true)} />
      <Hero onOpenContact={() => setIsContactModalOpen(true)} />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      {/* <FinalCTA /> */}
      <Footer />
      <ScrollToTop />
      <WhatsAppFloat />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
