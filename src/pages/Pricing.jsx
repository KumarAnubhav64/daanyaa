import PageHeader from '../components/common/PageHeader';

export default function Pricing() {
  return (
    <div className="bg-[#F4EFEB] min-h-screen">
      <div className="max-w-6xl mx-auto px-8">
        <PageHeader
          title="Simple, Transparent Pricing"
          caption="Choose the plan that fits your publishing needs. All plans include our core AI features."
          variant="hero"
        />

        <div className="grid md:grid-cols-3 gap-8 pb-20">
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-[#6B4F4E] mb-2">Starter</h3>
            <div className="text-4xl font-bold text-[#6B4F4E] mb-4">$29<span className="text-lg font-normal">/month</span></div>
            <ul className="text-left space-y-3 text-[#6B4F4E] mb-8">
              <li>✓ AI Chat Integration</li>
              <li>✓ Basic Analytics</li>
              <li>✓ Up to 10K monthly queries</li>
              <li>✓ Email Support</li>
            </ul>
            <button className="w-full bg-[#6B4F4E] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              Get Started
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-[#6B4F4E] rounded-2xl p-8 shadow-lg text-white relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-[#6B4F4E] px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Professional</h3>
            <div className="text-4xl font-bold mb-4">$99<span className="text-lg font-normal">/month</span></div>
            <ul className="text-left space-y-3 mb-8">
              <li>✓ Everything in Starter</li>
              <li>✓ AI Search & Audio</li>
              <li>✓ Advanced Analytics</li>
              <li>✓ Up to 100K monthly queries</li>
              <li>✓ Priority Support</li>
            </ul>
            <button className="w-full bg-white text-[#6B4F4E] px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-[#6B4F4E] mb-2">Enterprise</h3>
            <div className="text-4xl font-bold text-[#6B4F4E] mb-4">Custom</div>
            <ul className="text-left space-y-3 text-[#6B4F4E] mb-8">
              <li>✓ Everything in Professional</li>
              <li>✓ Custom AI Training</li>
              <li>✓ White-label Solution</li>
              <li>✓ Unlimited queries</li>
              <li>✓ Dedicated Support</li>
            </ul>
            <button className="w-full border-2 border-[#6B4F4E] text-[#6B4F4E] px-6 py-3 rounded-full font-medium hover:bg-[#6B4F4E] hover:text-white transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
