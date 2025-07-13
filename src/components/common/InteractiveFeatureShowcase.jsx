import { useState } from 'react';
import ChatInterface from './ChatInterface';
import AISearchDemo from '../demos/AISearchDemo';
import AIAudioDemo from '../demos/AIAudioDemo';
import AIEngagementDemo from '../demos/AIEngagementDemo';
import AgentAccessDemo from '../demos/AgentAccessDemo';
import DefaultDemo from '../demos/DefaultDemo';

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

  // Render the appropriate demo component based on feature ID
  const renderDemo = (feature) => {
    switch (feature.id) {
      case 'ai-chat':
        return (
          <div className="max-w-4xl mx-auto">
            <ChatInterface
              title="AI Publishing Assistant"
              placeholder="Ask about our platform, features, pricing..."
              className="shadow-2xl"
            />
          </div>
        );
      case 'ai-search':
        return <AISearchDemo />;
      case 'ai-audio':
        return <AIAudioDemo />;
      case 'ai-engagement':
        return <AIEngagementDemo />;
      case 'agent-access':
        return <AgentAccessDemo />;
      default:
        return <DefaultDemo feature={feature} />;
    }
  };

  return (
    <div className={`bg-[#F4EFEB] py-20 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Feature Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {featureData.map((feature, index) => {
            const isDisabled = index !== 0; // Disable all except the first tab (AI-powered chat)
            return (
              <button
                key={feature.id}
                onClick={() => !isDisabled && setActiveFeature(index)}
                disabled={isDisabled}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-[#715482] text-white shadow-lg'
                    : isDisabled
                    ? 'bg-gray-200 text-gray-400 border border-gray-300 cursor-not-allowed opacity-60'
                    : 'bg-white text-[#715482] border border-[#715482] hover:bg-[#715482] hover:text-white'
                }`}
              >
                {feature.name}
                {isDisabled && <span className="ml-2 text-xs">(Coming Soon)</span>}
              </button>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Column - Content & Features */}
          <div className="lg:col-span-2 space-y-8">
            {/* Content Section */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#715482] mb-6 leading-tight">
                {currentFeature.title}
              </h2>
              <p className="text-lg md:text-xl text-[#715482] leading-relaxed mb-8">
                {currentFeature.description}
              </p>
            </div>

            {/* Enhanced Features List */}
            <div className="bg-gradient-to-br from-white to-[#f8f6f4] rounded-3xl p-8 shadow-xl border border-[#e0d5d1]">
              <h3 className="text-2xl font-bold text-[#715482] mb-6 flex items-center">
                <span className="w-2 h-2 bg-[#715482] rounded-full mr-3"></span>
                Key Features
              </h3>
              <div className="space-y-5">
                {currentFeature.features.map((feature, index) => (
                  <div key={index} className="flex items-start group hover:bg-white hover:shadow-md rounded-xl p-2 transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#715482] to-[#8b6b9c] rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-[#715482] leading-relaxed">
                        <span className="font-bold text-lg block mb-1">{feature.split(':')[0]}</span>
                        <span className="text-[#8b6b9c]">{feature.split(':')[1]}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Demo */}
          <div className="lg:col-span-3 lg:sticky lg:top-8">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#e0d5d1]">
              <div className="flex items-center justify-center mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              {renderDemo(currentFeature)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
