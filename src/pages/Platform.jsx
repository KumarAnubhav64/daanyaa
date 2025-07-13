import PageHeader from '../components/common/PageHeader';
import SectionHeader from '../components/common/SectionHeader';
import InteractiveFeatureShowcase from '../components/common/InteractiveFeatureShowcase';

export default function Platform() {
  return (
    <div className="bg-[#F4EFEB] min-h-screen">
      <div className="max-w-6xl mx-auto px-8">
        <PageHeader
          title="One Platform. A Universe of Al Capabilities."
          caption="Discover the comprehensive AI platform that powers modern publishers. PublisherAI isn't just a single tool; it's a comprehensive suite of AI-powered features designed to work in harmony. Activate what you need, when you need it, all from one intuitive dashboard."
          variant="hero"
        />

        <SectionHeader
          title="Core Features"
          caption="Everything you need to transform your publishing experience"
          className="mb-16"
          variant="large"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <SectionHeader
              title="AI Content Analysis"
              caption="Deep insights into your content performance and reader engagement patterns."
              variant="feature"
              alignment="left"
            />
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <SectionHeader
              title="Smart Recommendations"
              caption="AI-powered content suggestions to boost reader retention and engagement."
              variant="feature"
              alignment="left"
            />
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <SectionHeader
              title="Revenue Optimization"
              caption="Maximize your publishing revenue with intelligent monetization strategies."
              variant="feature"
              alignment="left"
            />
          </div>
        </div>
      </div>

      {/* Interactive Feature Showcase */}
      <InteractiveFeatureShowcase />
    </div>
  );
}
