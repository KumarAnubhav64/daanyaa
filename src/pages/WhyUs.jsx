import SectionHeader from '../components/common/SectionHeader';

// Simple monotone SVG icons
const UnifiedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
    <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
  </svg>
);

const PublisherFirstIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const FutureProofIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export default function WhyUs() {
  return (
    <div className="bg-[#F4EFEB] min-h-screen">
      {/* Hero Section */}
      <section className="py-32 text-center max-w-6xl mx-auto px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#6B4F4E] leading-tight">
          Built For Publishers,<br />
          By Technology Innovators
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-[#6B4F4E] mb-8 leading-relaxed">
            We started PublisherAI with a simple belief: the incredible power of artificial intelligence should be an asset for great content creators, not a threat. The world doesn't need more content farms; it needs the work of real journalists, storytellers, and experts to be more accessible, engaging, and valuable than ever before.
          </p>
          <p className="text-xl text-[#6B4F4E] leading-relaxed">
            Our mission is to provide the tools to make that happen. We are not just another vendor; we are your technology partner in the new age of publishing.
          </p>
        </div>
      </section>

      {/* Key Differentiators Section */}
      <section className="py-16 max-w-7xl mx-auto px-8">
        <SectionHeader
          title="Key Differentiators"
          caption="What sets us apart in the publishing technology landscape"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Column 1: Unified Platform */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/30 text-center">
            <div className="w-16 h-16 mx-auto mb-6 text-[#6B4F4E]">
              <UnifiedIcon />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-[#6B4F4E]">
              A Truly Unified Platform
            </h3>
            <p className="text-[#6B4F4E] leading-relaxed">
              Stop the madness of juggling a dozen different AI tools, plugins, and subscriptions. With PublisherAI, you get one seamless integration, one intuitive dashboard, and one predictable monthly bill. It simplifies your tech stack so you can focus on what you do best: creating incredible content.
            </p>
          </div>

          {/* Column 2: Publisher-First */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/30 text-center">
            <div className="w-16 h-16 mx-auto mb-6 text-[#6B4F4E]">
              <PublisherFirstIcon />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-[#6B4F4E]">
              A Publisher-First Business Model
            </h3>
            <p className="text-[#6B4F4E] leading-relaxed">
              Our success is inextricably linked to yours. We build features that directly address the core challenges of modern publishers—engagement, monetization, and future-proofing. We listen to our partners and build the features they need to thrive, not the features that are easiest to sell.
            </p>
          </div>

          {/* Column 3: Future-Proof */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/30 text-center">
            <div className="w-16 h-16 mx-auto mb-6 text-[#6B4F4E]">
              <FutureProofIcon />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-[#6B4F4E]">
              Future-Proof Technology
            </h3>
            <p className="text-[#6B4F4E] leading-relaxed">
              Implementing AI shouldn't be about playing catch-up; it should be about getting ahead. With our unique Media Content Protocol (MCP), we're not just helping you optimize for today's internet. We are preparing your content library for the agent-driven web of tomorrow, ensuring your long-term relevance and opening up discovery channels that will define the next decade.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 max-w-7xl mx-auto px-8">
        <SectionHeader
          title="Meet the Team"
          caption="The founders and key team members behind DAaranya.AI"
          className="mb-16"
        />

        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-12 border border-white/30">
            <p className="text-lg text-[#6B4F4E] leading-relaxed italic">
              "Here you can add photos and short bios for the founders and key team members to build trust and humanize the brand."
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Placeholder team member cards */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#6B4F4E]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#6B4F4E]/30 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-[#6B4F4E] mb-2">Founder Name</h4>
                <p className="text-sm text-[#6B4F4E]/70">Short bio placeholder</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#6B4F4E]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#6B4F4E]/30 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-[#6B4F4E] mb-2">Co-Founder Name</h4>
                <p className="text-sm text-[#6B4F4E]/70">Short bio placeholder</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#6B4F4E]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#6B4F4E]/30 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-[#6B4F4E] mb-2">Lead Engineer</h4>
                <p className="text-sm text-[#6B4F4E]/70">Short bio placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
