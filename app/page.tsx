"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BrandMarquee from "../components/BrandMarquee";
import Services from "../components/Services";
import OurWork from "../components/OurWork";
import ClientResults from "../components/ClientResults";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import MobileBottomNav from "../components/MobileBottomNav";
import ContactModal from "../components/ContactModal";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <Header onOpenContact={() => setIsContactModalOpen(true)} />
      <Hero onOpenContact={() => setIsContactModalOpen(true)} />
      <BrandMarquee />
      <Services />
      
      <ClientResults />
      <Testimonials />
      <FAQ />
      
      <Footer onOpenContact={() => setIsContactModalOpen(true)} />
      <ScrollToTop />
      <MobileBottomNav onOpenContact={() => setIsContactModalOpen(true)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
