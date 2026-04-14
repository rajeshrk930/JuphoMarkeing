import ResultsGallery from '../../components/ResultsGallery';

export default function ResultsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00b67a] to-[#0066cc] bg-clip-text text-transparent">
          Real Campaign Results
        </h1>
        <p className="text-gray-600 text-lg mb-2">
          <span className="text-2xl">📈</span> Actual performance screenshots from our Meta Ads campaigns
        </p>
        <p className="text-sm text-gray-500">
          See the real numbers behind our client success stories
        </p>
      </div>
      <ResultsGallery />
    </div>
  );
}
