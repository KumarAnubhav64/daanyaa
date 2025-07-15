import React from "react";
import { FeatureCard } from "../ui/Card";
import { Zap, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    tag: "Step 1",
    title: "Securely Connect Your Content",
    desc: "Our streamlined integration process connects to your existing CMS or content database in minutes, not months. It's secure, read-only, and built to handle content at any scale.",
    button: "Learn more",
    icon: Shield,
    gradient: "from-[#6B4F4E] to-[#6B4F4E]"
  },
  {
    tag: "Step 2",
    title: "Activate Your AI Features",
    desc: "From the central dashboard, simply toggle on the AI tools you need. Deploy an expert chatbot, launch intelligent site search, or start converting articles to audio with a single click",
    button: "Learn more",
    icon: Zap,
    gradient: "from-[#6B4F4E] to-[#6B4F4E]"
  },
  {
    tag: "Step 3",
    title: "Grow Your Engagement & Revenue",
    desc: "Watch your on-site engagement metrics climb as users interact with your content in new ways. Activate our monetization layer to open up new, high-margin revenue streams powered by your AI tools.",
    button: "Learn more",
    icon: TrendingUp,
    gradient: "from-[#6B4F4E] to-[#6B4F4E]"
  }
];

const Feature = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#F4EFEB] via-[#F8F4F0] to-[#F4EFEB] py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#6B4F4E]/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B4F4E] text-center mb-4 leading-tight">
            Go Live in Three Simple Steps
          </h2>
          <p className="text-lg text-[#6B4F4E] text-center mb-6 max-w-2xl mx-auto">
            Transform your publishing platform with AI-powered tools in just minutes. Our streamlined process gets you up and running fast.
          </p>

          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3].map((step, index) => (
              <React.Fragment key={step}>
                <div className="w-8 h-8 rounded-full bg-[#6B4F4E] text-white flex items-center justify-center text-sm font-semibold">
                  {step}
                </div>
                {index < 2 && <div className="w-12 h-0.5 bg-[#6B4F4E]/30"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full justify-center mb-16">
          {features.map((f, index) => (
            <FeatureCard
              key={f.title}
              tag={f.tag}
              title={f.title}
              desc={f.desc}
              button={f.button}
              icon={f.icon}
              gradient={f.gradient}
              delay={index * 200}
            />
          ))}
        </div>

        <div className="flex flex-col items-center animate-fade-in-up animation-delay-800">
          <div className="text-center p-8  backdrop-blur-sm rounded-2xl ">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#6B4F4E] to-[#9d7271] bg-clip-text text-transparent mb-2 block">
              DAaranya.AI
            </span>
            <span className="text-[#6B4F4E] text-center block">
              Ready to transform your publishing platform?<br />
              <span className="text-[#6B4F4E] font-semibold">Start your journey</span> <span className="font-semibold text-[#6B4F4E]">today</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
