import { FeatureCard } from '../components/ui/Card';
import SectionHeader from '../components/common/SectionHeader';

// Simple SVG icons as functional components
const RevenueIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
  </svg>
);

const PremiumIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
  </svg>
);

const ControlIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>
  </svg>
);

const TurnkeyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export default function Monetization() {
  return (
    <div className="bg-[#F4EFEB] min-h-screen">
      {/* Hero Section */}
      <section className="py-32 text-center max-w-6xl mx-auto px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#6B4F4E] leading-tight animate-fade-in-up animation-delay-200">
          Monetize Every<br />
          AI-Powered Interaction
        </h1>
        <p className="text-xl text-[#6B4F4E] mb-12 max-w-4xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
          Your new AI features—Chat, Search, and Audio—are more than just engagement tools.
          They are high-value, high-intent real estate on your website. The PublisherAI
          Monetization Platform allows you to capitalize on these new touchpoints. We've built
          a premium advertising network that serves relevant, non-intrusive ads directly within
          the AI experiences, creating a powerful and scalable new revenue stream for your business.
        </p>
      </section>

      {/* Visual Diagram Section */}
      <section className="py-16 max-w-6xl mx-auto px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-12 mb-16 border border-[#e0d9d2] animate-fade-in-up">
          <h3 className="text-3xl font-bold text-center mb-12 text-[#6B4F4E]">
            Visual: Ad Placements in AI Features
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            {/* Chatbot Response Ad */}
            <div className="flex flex-col items-center text-center flex-1 animate-fade-in-up">
              <div className="w-24 h-24 bg-[#e0d9d2] rounded-full flex items-center justify-center mb-4 shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="#6B4F4E" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg text-[#6B4F4E] mb-2">Chatbot Response Ad</h4>
            </div>
            {/* Arrow */}
            <div className="hidden md:flex items-center animate-fade-in-up">
              <svg viewBox="0 0 24 24" fill="none" stroke="#b3a9a0" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            {/* Search Result Ad */}
            <div className="flex flex-col items-center text-center flex-1 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="w-24 h-24 bg-[#e0d9d2] rounded-full flex items-center justify-center mb-4 shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="#6B4F4E" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg text-[#6B4F4E] mb-2">Search Result Ad</h4>
            </div>
            {/* Arrow */}
            <div className="hidden md:flex items-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#b3a9a0" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            {/* Audio Pre-roll Ad */}
            <div className="flex flex-col items-center text-center flex-1 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="w-24 h-24 bg-[#e0d9d2] rounded-full flex items-center justify-center mb-4 shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="#6B4F4E" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 12a3 3 0 106 0 3 3 0 00-6 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg text-[#6B4F4E] mb-2">Audio Pre-roll Ad</h4>
            </div>
          </div>
          {/* Description */}
          <p className="text-center text-[#6B4F4E] text-sm max-w-2xl mx-auto">
            (Diagram showing ad placements inside a chatbot response, within a search result list, and as a pre-roll for an audio article)
          </p>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 max-w-7xl mx-auto px-8">
        <SectionHeader
          title="Transform AI Interactions Into Revenue"
          caption="Discover the key benefits of our monetization platform"
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            tag="New Revenue"
            title="A Brand New Revenue Stream"
            desc="Earn incremental revenue from user interactions that were previously un-monetized. Our platform is designed to complement, not replace, your existing ad stack."
            button="Learn More"
            icon={RevenueIcon}
            gradient="from-[#e0d9d2] to-[#F4EFEB]"
            delay={0}
          />
          <FeatureCard
            tag="Premium Rates"
            title="Command Premium Rates (High CPMs)"
            desc="An ad placed in response to a direct user query is more valuable than a standard banner ad. Our network connects you with premium advertisers willing to pay for this high-intent placement."
            button="See Rates"
            icon={PremiumIcon}
            gradient="from-[#e0d9d2] to-[#F4EFEB]"
            delay={200}
          />
          <FeatureCard
            tag="Full Control"
            title="You Retain Full Control"
            desc="Your brand and user experience are paramount. From the PublisherAI dashboard, you have complete control over ad density, advertiser categories, and the visual presentation of the ads."
            button="View Dashboard"
            icon={ControlIcon}
            gradient="from-[#e0d9d2] to-[#F4EFEB]"
            delay={400}
          />
          <FeatureCard
            tag="Turnkey Solution"
            title="A Turnkey, Effortless Solution"
            desc="There are no complex integrations. Once you activate monetization, we handle the entire process: ad serving, demand partnerships, billing, and payouts. You simply watch the revenue grow."
            button="Get Started"
            icon={TurnkeyIcon}
            gradient="from-[#e0d9d2] to-[#F4EFEB]"
            delay={600}
          />
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-24 text-center max-w-4xl mx-auto px-8">
        <div className="bg-gradient-to-br from-[#6B4F4E] to-[#5a3f6b] rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
            Ready to Start Monetizing?
          </h2>
          <p className="text-xl mb-8 text-white/90 relative z-10">
            Join hundreds of publishers already earning revenue from their AI features.
          </p>
          <div className="flex gap-6 justify-center relative z-10">
            <button className="bg-white text-[#6B4F4E] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 active:scale-95">
              Start Monetizing Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#6B4F4E] transition transform hover:scale-105 active:scale-95">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
