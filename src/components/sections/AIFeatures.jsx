import React from 'react';

const AIFeatures = () => {
  const features = [
    {
      title: "AI Chat",
      description: "Engage readers with a chatbot that knows your content inside and out, providing instant answers and guiding them to relevant articles."
    },
    {
      title: "AI Search",
      description: "Deliver hyper-relevant, semantic search results that understand user intent dramatically reducing bounce rates."
    },
    {
      title: "AI Audio",
      description: "Instantly convert your entire archive of articles into high-quality, natural-sounding podcasts to reach your audience anywhere."
    },
    {
      title: "AI Monetization",
      description: "Serve relevant, non-intrusive ads seamlessly within your new AI features, creating a powerful new revenue channel."
    },
    {
      title: "AI Agent Ready",
      description: "Prepare for the future of the internet by making your content perfectly structured and accessible for AI agents with our Media Content Protocol (MCP)."
    }
  ];

  return (
    <section className="bg-[#F4EFEB] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#6B4F4E] text-center mb-16 leading-tight max-w-4xl mx-auto">
          The Comprehensive AI Platform for Modern Publishers
        </h2>

        {/* Cards Container - monotone */}
        <div className="bg-[#F4EFEB] rounded-3xl p-6 md:p-8 border border-[#e0d9d2]">
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-3 gap-4 mb-6">
            {/* First Row - 3 cards */}
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 text-left border border-[#e0d9d2] shadow-sm"
              >
                <h3 className="text-2xl font-bold text-[#6B4F4E] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#6B4F4E] leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop Second Row - 2 cards centered */}
          <div className="hidden md:grid grid-cols-2 gap-4 max-w-3xl mx-auto">
            {features.slice(3, 5).map((feature, index) => (
              <div
                key={index + 3}
                className="bg-white rounded-2xl p-5 text-left border border-[#e0d9d2] shadow-sm"
              >
                <h3 className="text-2xl font-bold text-[#6B4F4E] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#6B4F4E] leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Layout - Single Column */}
          <div className="md:hidden space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-left border border-[#e0d9d2] shadow-sm"
              >
                <h3 className="text-2xl font-bold text-[#6B4F4E] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#6B4F4E] leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
