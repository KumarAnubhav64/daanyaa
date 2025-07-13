import { useState } from 'react';

export default function InteractiveFeatureShowcase({ features, className = "" }) {
  const [activeFeature, setActiveFeature] = useState(0);

  // Default features if none provided
  const defaultFeatures = [
    {
      id: 'ai-chat',
      name: 'AI-Powered Chat',
      title: 'Conversations that Convert and Captivate',
      description: 'Imagine a member of your team available 24/7 on every page of your site, ready to answer any question any reader has about your content. That\'s our AI Chat. Trained exclusively on your articles, it becomes an instant expert on your work. It guides users to the content they need, answers complex questions using cited sources from your site, and can even be configured to capture leads for your newsletters or subscription products.',
      features: [
        'Custom Personality: Match the chatbot\'s tone and style to your brand\'s voice.',
        'Source-Cited Answers: Builds trust by showing users exactly where it found the information.',
        'Lead Capture Integration: Connects directly to your marketing and CRM platforms.',
        'Topic Suggestions: Proactively suggests related articles to keep users engaged.'
      ],
      demoTitle: 'Try Our AI Chat',
      demoPlaceholder: 'Write your query here....',
      demoButtonText: 'Ask PublisherAI'
    },
    {
      id: 'ai-search',
      name: 'AI-Powered Search',
      title: 'Intelligent Search that Understands Intent',
      description: 'Transform how readers discover your content with semantic search that goes beyond keywords. Our AI understands context, intent, and meaning to surface the most relevant articles, even when users don\'t know exactly what they\'re looking for.',
      features: [
        'Semantic Understanding: Goes beyond keywords to understand user intent.',
        'Content Recommendations: Suggests related articles based on reading patterns.',
        'Smart Filtering: Automatically categorizes and filters results.',
        'Analytics Integration: Tracks search patterns to improve content strategy.'
      ],
      demoTitle: 'Try Our AI Search',
      demoPlaceholder: 'Search for any topic....',
      demoButtonText: 'Search Content'
    },
    {
      id: 'ai-audio',
      name: 'AI-Powered Audio',
      title: 'Transform Text into Engaging Audio',
      description: 'Convert your entire article library into high-quality, natural-sounding audio content. Reach your audience anywhere - during commutes, workouts, or when they prefer listening over reading.',
      features: [
        'Natural Voice Synthesis: High-quality, human-like audio generation.',
        'Multiple Voice Options: Choose from various voices and accents.',
        'Automated Processing: Bulk convert your entire content library.',
        'Podcast Integration: Create podcast feeds from your articles.'
      ],
      demoTitle: 'Try Our AI Audio',
      demoPlaceholder: 'Enter text to convert to audio....',
      demoButtonText: 'Generate Audio'
    },
    {
      id: 'ai-engagement',
      name: 'AI-Powered Engagement',
      title: 'Boost Reader Engagement with Smart Features',
      description: 'Increase time on site and reader satisfaction with AI-powered engagement tools that adapt to user behavior and preferences.',
      features: [
        'Personalized Content: Tailors recommendations to individual readers.',
        'Reading Progress: Smart bookmarking and progress tracking.',
        'Interactive Elements: Adds quizzes, polls, and interactive content.',
        'Engagement Analytics: Detailed insights into reader behavior.'
      ],
      demoTitle: 'Try Our AI Engagement',
      demoPlaceholder: 'Describe your content preferences....',
      demoButtonText: 'Get Recommendations'
    },
    {
      id: 'agent-access',
      name: 'Agent Access Layer (MCP)',
      title: 'Future-Proof Your Content for AI Agents',
      description: 'Prepare for the next evolution of the internet with our Media Content Protocol (MCP). Make your content perfectly structured and accessible for AI agents and autonomous systems.',
      features: [
        'Structured Data: Formats content for AI agent consumption.',
        'API Access: Provides programmatic access to your content.',
        'Agent Integration: Seamlessly works with popular AI agents.',
        'Future-Ready: Prepares your content for emerging AI technologies.'
      ],
      demoTitle: 'Try Our Agent Access',
      demoPlaceholder: 'Query our content API....',
      demoButtonText: 'Access API'
    }
  ];

  const featureData = features || defaultFeatures;
  const currentFeature = featureData[activeFeature];

  return (
    <div className={`bg-[#F4EFEB] py-20 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Feature Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {featureData.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFeature === index
                  ? 'bg-[#715482] text-white shadow-lg'
                  : 'bg-white text-[#715482] border border-[#715482] hover:bg-[#715482] hover:text-white'
              }`}
            >
              {feature.name}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#715482] mb-6 leading-tight">
            {currentFeature.title}
          </h2>
          <p className="text-lg md:text-xl text-[#715482] max-w-4xl mx-auto leading-relaxed mb-8">
            {currentFeature.description}
          </p>
        </div>

        {/* Features List */}
        <div className="bg-white rounded-2xl p-8 mb-12 border-2 border-[#715482]">
          <div className="space-y-4">
            {currentFeature.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="text-[#715482] font-bold mr-3">•</span>
                <p className="text-[#715482] leading-relaxed">
                  <span className="font-semibold">{feature.split(':')[0]}:</span>
                  {feature.split(':')[1]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-[#715482] rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {currentFeature.demoTitle}
          </h3>

          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder={currentFeature.demoPlaceholder}
                className="w-full px-6 py-4 rounded-full text-[#715482] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
              />
            </div>

            <button className="bg-white text-[#715482] px-8 py-3 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity duration-300 shadow-lg">
              {currentFeature.demoButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
