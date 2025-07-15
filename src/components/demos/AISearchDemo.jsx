export default function AISearchDemo() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#6B4F4E] to-[#8B6794] text-white p-6">
          <h3 className="text-2xl font-bold">AI-Powered Search Demo</h3>
          <p className="text-white/80">Experience semantic search that understands context and intent</p>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <div className="relative">
              <input
                placeholder="Try: 'articles about increasing revenue' or 'content marketing strategies'"
                className="w-full p-4 pl-12 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6B4F4E] focus:border-transparent text-lg"
              />
              <svg className="absolute left-4 top-4 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button className="w-full mt-4 bg-[#6B4F4E] text-white py-3 rounded-xl font-medium hover:opacity-90 transition text-lg">
              Search with AI
            </button>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-[#6B4F4E] text-lg">Search Results</h4>
            {[
              { title: "10 Proven Ways to Monetize Your Blog", excerpt: "Discover strategies to turn your content into revenue streams...", relevance: "98%" },
              { title: "Subscription Models That Actually Work", excerpt: "Learn how successful publishers build recurring revenue...", relevance: "95%" },
              { title: "AI Tools for Content Creators", excerpt: "Automate your workflow and boost productivity with AI...", relevance: "92%" },
              { title: "Building Engaged Communities", excerpt: "Turn readers into loyal subscribers and advocates...", relevance: "89%" }
            ].map((result, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#6B4F4E] hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-medium text-[#6B4F4E] text-lg">{result.title}</h5>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">{result.relevance}</span>
                </div>
                <p className="text-gray-600 text-sm">{result.excerpt}</p>
                <button className="mt-2 text-[#6B4F4E] text-sm hover:underline">Read Article →</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
