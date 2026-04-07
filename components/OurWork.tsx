import React from "react";

export default function OurWork() {
  return (
    <section className="w-full bg-bg py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Our Work
        </h2>
        <p className="text-center text-textSecondary max-w-2xl mx-auto mb-12">
          Real results from our performance marketing, AI automation, and web development projects.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Lead Gen Result */}
          <div className="bg-bgSection rounded-xl overflow-hidden shadow-sm border border-[#132A4A]">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600"
              alt="Lead Generation Work"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#FF7A00]">
                Lead Generation Campaigns
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-textSecondary">
                <li>Low-CPL campaigns across multiple industries</li>
                <li>High-intent audiences & retargeting</li>
                <li>Scaling without increasing CPL</li>
              </ul>
            </div>
          </div>

          {/* AI Automation */}
          <div className="bg-bgSection rounded-xl overflow-hidden shadow-sm border border-[#132A4A]">
            <img
              src="https://images.unsplash.com/photo-1664575602276-95cd4e2b4ac1?w=600"
              alt="AI Automation Workflow"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#FF7A00]">
                AI Automation & Workflows
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-textSecondary">
                <li>WhatsApp & CRM automations</li>
                <li>AI chatbots for instant replies</li>
                <li>Lead qualification workflows</li>
              </ul>
            </div>
          </div>

          {/* Website Development */}
          <div className="bg-bgSection rounded-xl overflow-hidden shadow-sm border border-[#132A4A]">
            <img
              src="https://images.unsplash.com/photo-1559027615-8d8591a6a4e2?w=600"
              alt="Website Project"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#FF7A00]">
                Websites & Landing Pages
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-textSecondary">
                <li>Fast, conversion-ready websites</li>
                <li>Clean UI for services & SaaS</li>
                <li>SEO and mobile-first builds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
