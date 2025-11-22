import React from "react";
import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white py-8 md:py-12 flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Large Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Send a message.
            </h1>
            <p className="text-base text-gray-600 leading-relaxed max-w-md">
              We're here to answer any question you may have.
            </p>

            {/* Contact Options */}
            <div className="space-y-6 pt-4">
              <div>
                <h3 className="font-bold text-black text-sm mb-2">careers</h3>
                <p className="text-sm text-gray-600 mb-2">Would you like to join our growing team?</p>
                <a href="mailto:Hr@jupho.com" className="text-sm text-black font-semibold hover:text-brand transition">Hr@jupho.com</a>
              </div>
              <div>
                <h3 className="font-bold text-black text-sm mb-2">Feedbacks</h3>
                <p className="text-sm text-gray-600 mb-2">Have a project in mind?</p>
                <a href="mailto:Hi@jupho.com" className="text-sm text-black font-semibold hover:text-brand transition">Hi@jupho.com</a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
