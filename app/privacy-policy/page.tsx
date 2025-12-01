"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactModal from "../../components/ContactModal";

export default function PrivacyPolicy() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <Header onOpenContact={() => setIsContactModalOpen(true)} />
      
      <main className="w-full bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-textGrey">
              Last Updated: December 1, 2025
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-textGrey leading-relaxed">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">1. Introduction</h2>
              <p>
                This website is owned and managed by Jupho Marketing Agency.
              </p>
              <p className="mt-3">
                We respect your privacy and collect only the information you submit through our contact form.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">2. Information We Collect</h2>
              <p>When you fill out our contact form, we collect the following details:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your phone number</li>
                <li>Your budget</li>
                <li>Your website URL (if provided)</li>
                <li>Details about your project</li>
              </ul>
              <p className="mt-4 font-semibold">
                We do not collect cookies, pixels, analytics data, or any tracking information.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">3. How We Use Your Information</h2>
              <p>We use the information you provide only to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to your inquiry</li>
                <li>Understand your project requirements</li>
                <li>Contact you regarding your request or consultation</li>
              </ul>
              <p className="mt-4 font-semibold">
                We do not send promotional messages unless you ask for them.
              </p>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">4. Data Sharing</h2>
              <p>
                We do not share, sell, or rent your information to any third party.
              </p>
              <p className="mt-3">
                Your details are accessed only by our internal team.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">5. Data Security</h2>
              <p>
                We store your information securely and take reasonable steps to prevent unauthorized access.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">6. Data Retention</h2>
              <p>
                Your contact form details may be stored for up to 12 months for reference and follow-up.
              </p>
              <p className="mt-3">
                After this period, the data may be deleted.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">7. Your Rights</h2>
              <p>
                You may request access, correction, or deletion of your information at any time by contacting us.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-lightGrey p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-ink mb-4">8. Contact Us</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy, contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Jupho Marketing Agency</strong></p>
                <p><strong>Email:</strong> hi@jupho.com</p>
                <p><strong>Address:</strong> India, Telangana</p>
              </div>
            </section>

          </div>

        </div>
      </main>

      <Footer onOpenContact={() => setIsContactModalOpen(true)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
