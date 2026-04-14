import ResultsGallery from '../../components/ResultsGallery';

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1F3A] via-[#132A4A] to-[#0B1F3A]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b67a] rounded-full filter blur-[120px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-2xl">📊</span>
              <span className="text-white/90 text-sm font-medium">Real Campaign Data</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-[#00b67a] bg-clip-text text-transparent">
                Proven Results
              </span>
              <br />
              <span className="text-white">From Real Campaigns</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-4">
              Actual performance screenshots from our Meta Ads campaigns.
              <span className="block text-orange-400 font-semibold mt-2">See the real numbers behind our client success stories 📈</span>
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400">20+</div>
                <div className="text-gray-400 text-sm mt-1">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#00b67a]">500+</div>
                <div className="text-gray-400 text-sm mt-1">Leads Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">$50K+</div>
                <div className="text-gray-400 text-sm mt-1">Ad Spend Managed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Gallery */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <ResultsGallery />
      </div>
    </div>
  );
}
