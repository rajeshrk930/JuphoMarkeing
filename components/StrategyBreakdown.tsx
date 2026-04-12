import React from "react";

const whatsappLink =
  process.env.NEXT_PUBLIC_WHATSAPP_LINK ||
  `https://wa.me/919652118590?text=${encodeURIComponent("Hi! I'm interested in your marketing services.")}`;

export default function StrategyBreakdown() {
  return (
    <section id="strategy" className="w-full bg-[#0B1F3A] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            The ClickBoost WhatsApp System
          </h2>
          <p className="mt-3 text-[#C7D0E0] max-w-2xl mx-auto">
            A simple three-step system that turns paid traffic into qualified leads
            using targeted campaigns and WhatsApp automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-[#132A4A] rounded-lg p-6 flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F3350] mr-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#FF7A00" strokeWidth="1.5" />
                  <path d="M12 8v4l2 2" stroke="#FF7A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Data-Driven Targeting</h3>
            </div>
            <p className="text-[#C7D0E0] flex-1 mb-6">
              Reach the right audience with precision using demographic, interest and
              conversion signals to maximize ROI.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-[#FF7A00] hover:bg-[#FF9A2A] text-white font-semibold px-4 py-2 rounded"
            >
              Get Started
            </a>
          </div>

          {/* Step 2 */}
          <div className="bg-[#132A4A] rounded-lg p-6 flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F3350] mr-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7h18" stroke="#00AEEF" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6 12h12" stroke="#00AEEF" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M10 17h4" stroke="#00AEEF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">WhatsApp Lead Filtering</h3>
            </div>
            <p className="text-[#C7D0E0] flex-1 mb-6">
              Filter and qualify leads instantly on WhatsApp with pre-filled messages
              and rule-based routing so your sales team gets high-quality prospects.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-[#FF7A00] hover:bg-[#FF9A2A] text-white font-semibold px-4 py-2 rounded"
            >
              Get Started
            </a>
          </div>

          {/* Step 3 */}
          <div className="bg-[#132A4A] rounded-lg p-6 flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F3350] mr-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v20" stroke="#4EE391" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M5 12h14" stroke="#4EE391" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Real-Time Conversion</h3>
            </div>
            <p className="text-[#C7D0E0] flex-1 mb-6">
              Use real-time signals and automation to convert conversations into
              customers faster with measurable, repeatable workflows.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-[#FF7A00] hover:bg-[#FF9A2A] text-white font-semibold px-4 py-2 rounded"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
