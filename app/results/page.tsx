import ResultsGallery from '../../components/ResultsGallery';

export default function ResultsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Client Results</h1>
      <p className="text-gray-600 mb-6">Real Meta/Facebook ads screenshots and key metrics.</p>
      <ResultsGallery />
    </div>
  );
}
