import PageHeader from '../components/common/PageHeader';
import TabSwitcher from '../components/common/TabSwitcher';
import InteractiveFeatureShowcase from '../components/common/InteractiveFeatureShowcase';

export default function InteractiveDemo() {
  // Example tabs for the TabSwitcher
  const pricingTabs = [
    {
      id: 'starter',
      label: 'Starter',
      content: (
        <div className="text-center">
          <div className="text-4xl font-bold text-[#6B4F4E] mb-4">$29<span className="text-lg font-normal">/month</span></div>
          <ul className="space-y-3 text-left max-w-md mx-auto">
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> AI Chat Integration</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic Analytics</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 10K monthly queries</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email Support</li>
          </ul>
          <button className="mt-6 bg-[#6B4F4E] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      )
    },
    {
      id: 'professional',
      label: 'Professional',
      content: (
        <div className="text-center">
          <div className="text-4xl font-bold text-[#6B4F4E] mb-4">$99<span className="text-lg font-normal">/month</span></div>
          <ul className="space-y-3 text-left max-w-md mx-auto">
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Everything in Starter</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> AI Search & Audio</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced Analytics</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 100K monthly queries</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority Support</li>
          </ul>
          <button className="mt-6 bg-[#6B4F4E] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
            Start Free Trial
          </button>
        </div>
      )
    },
    {
      id: 'enterprise',
      label: 'Enterprise',
      content: (
        <div className="text-center">
          <div className="text-4xl font-bold text-[#6B4F4E] mb-4">Custom</div>
          <ul className="space-y-3 text-left max-w-md mx-auto">
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Everything in Professional</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom AI Training</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> White-label Solution</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited queries</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Dedicated Support</li>
          </ul>
          <button className="mt-6 border-2 border-[#6B4F4E] text-[#6B4F4E] px-8 py-3 rounded-full font-medium hover:bg-[#6B4F4E] hover:text-white transition">
            Contact Sales
          </button>
        </div>
      )
    }
  ];

  const featureTabs = [
    {
      id: 'chat',
      label: 'AI Chat',
      content: (
        <div>
          <h3 className="text-2xl font-bold text-[#6B4F4E] mb-4">Intelligent Conversations</h3>
          <p className="mb-4">Our AI Chat system provides 24/7 customer support, trained specifically on your content and brand voice.</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Demo conversation:</p>
            <div className="space-y-2">
              <div className="bg-blue-100 p-2 rounded">User: "How does your platform work?"</div>
              <div className="bg-green-100 p-2 rounded">AI: "Our platform integrates seamlessly with your existing content management system..."</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'search',
      label: 'AI Search',
      content: (
        <div>
          <h3 className="text-2xl font-bold text-[#6B4F4E] mb-4">Semantic Search</h3>
          <p className="mb-4">Advanced search capabilities that understand context and intent, not just keywords.</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <input
              type="text"
              placeholder="Try searching: 'content that helps increase revenue'"
              className="w-full p-3 border rounded-lg"
            />
            <button className="mt-2 bg-[#6B4F4E] text-white px-4 py-2 rounded">Search</button>
          </div>
        </div>
      )
    },
    {
      id: 'audio',
      label: 'AI Audio',
      content: (
        <div>
          <h3 className="text-2xl font-bold text-[#6B4F4E] mb-4">Text-to-Speech</h3>
          <p className="mb-4">Convert any written content into natural-sounding audio for accessibility and convenience.</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center space-x-4">
              <button className="bg-[#6B4F4E] text-white px-4 py-2 rounded">▶ Play Sample</button>
              <div className="flex-1 bg-gray-300 h-2 rounded">
                <div className="bg-[#6B4F4E] h-2 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-[#F4EFEB] min-h-screen">
      <div className="max-w-6xl mx-auto px-8">
        <PageHeader
          title="Interactive Components Demo"
          caption="Explore different interactive components with tab switching and dynamic content"
          variant="hero"
        />

        {/* TabSwitcher Example 1: Pills variant */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#6B4F4E] text-center mb-8">Pricing Plans (Pills Style)</h2>
          <TabSwitcher
            tabs={pricingTabs}
            variant="pills"
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* TabSwitcher Example 2: Default variant */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#6B4F4E] text-center mb-8">Feature Overview (Default Style)</h2>
          <TabSwitcher
            tabs={featureTabs}
            variant="default"
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* TabSwitcher Example 3: Underline variant */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#6B4F4E] text-center mb-8">Simple Tabs (Underline Style)</h2>
          <TabSwitcher
            tabs={[
              {
                id: 'overview',
                label: 'Overview',
                content: <div><h3 className="text-xl font-bold mb-2">Platform Overview</h3><p>Get a comprehensive view of all our AI capabilities in one unified dashboard.</p></div>
              },
              {
                id: 'features',
                label: 'Features',
                content: <div><h3 className="text-xl font-bold mb-2">Key Features</h3><p>Discover the powerful AI tools that will transform your publishing workflow.</p></div>
              },
              {
                id: 'support',
                label: 'Support',
                content: <div><h3 className="text-xl font-bold mb-2">24/7 Support</h3><p>Our dedicated team is here to help you succeed with round-the-clock assistance.</p></div>
              }
            ]}
            variant="underline"
            className="max-w-4xl mx-auto"
          />
        </div>
      </div>

      {/* Full Interactive Feature Showcase */}
      <InteractiveFeatureShowcase />
    </div>
  );
}
