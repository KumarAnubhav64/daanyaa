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


      </div>

      {/* Interactive Feature Showcase */}
      <InteractiveFeatureShowcase />
    </div>
  );
}
