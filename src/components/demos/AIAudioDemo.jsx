export default function AIAudioDemo() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#715482] to-[#8B6794] text-white p-6">
          <h3 className="text-2xl font-bold">AI Audio Generator</h3>
          <p className="text-white/80">Transform any text into natural-sounding audio</p>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[#715482] mb-3">Text to Convert</h4>
              <textarea
                placeholder="Paste your article text here or try our sample..."
                className="w-full h-32 p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#715482] focus:border-transparent resize-none"
                defaultValue="Welcome to DAaranya.AI, where artificial intelligence meets content creation. Our platform transforms how publishers engage with their audience through intelligent automation and personalized experiences."
              />
              <div className="mt-4 space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Voice Selection</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#715482]">
                    <option>Sarah - Professional Female</option>
                    <option>James - Warm Male</option>
                    <option>Emma - Friendly Female</option>
                    <option>David - Authoritative Male</option>
                  </select>
                </div>
                <button className="w-full bg-[#715482] text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
                  Generate Audio
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-[#715482] mb-3">Audio Player</h4>
              <div className="bg-gray-100 rounded-xl p-6">
                <div className="text-center mb-4">
                  <h5 className="font-medium text-gray-800">Now Playing</h5>
                  <p className="text-sm text-gray-600">"Welcome to DAaranya.AI..."</p>
                </div>

                <div className="flex items-center justify-center mb-4">
                  <button className="bg-[#715482] text-white p-4 rounded-full hover:opacity-90 transition shadow-lg">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>0:15</span>
                    <span>1:23</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-[#715482] h-2 rounded-full transition-all duration-300" style={{width: '20%'}}></div>
                  </div>
                </div>

                <div className="flex justify-center space-x-4 mt-4">
                  <button className="text-[#715482] hover:opacity-70 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 9h12v2H4V9zM4 13h8v2H4v-2z" />
                    </svg>
                  </button>
                  <button className="text-[#715482] hover:opacity-70 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-800 mb-2">📈 Audio Analytics</h5>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Estimated listening time:</span>
                    <span className="font-medium">1:23</span>
                  </div>
                  <div className="flex justify-between">
                    <span>File size:</span>
                    <span className="font-medium">2.1 MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quality:</span>
                    <span className="font-medium">High (320kbps)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
