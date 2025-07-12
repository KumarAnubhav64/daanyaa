import React from "react";
import { FeatureCard } from "./ui/Card";

const features = [
  {
    tag: "Step 1",
    title: "Securely Connect Your Content",
    desc: "Our streamlined integration process connects to your existing CMS or content database in minutes, not months. It's secure, read-only, and built to handle content at any scale.",
    button: "Learn more"
  },
  {
    tag: "Step 2",
    title: "Activate Your AI Features",
    desc: "From the central dashboard, simply toggle on the AI tools you need. Deploy an expert chatbot, launch intelligent site search, or start converting articles to audio with a single click",
    button: "Learn more"
  },
  {
    tag: "Step 3",
    title: "Grow Your Engagement & Revenue",
    desc: "Watch your on-site engagement metrics climb as users interact with your content in new ways. Activate our monetization layer to open up new, high-margin revenue streams powered by your AI tools.",
    button: "Learn more"
  }
];

const Feature = () => {
  return (
    <section className="w-full bg-[#F4EFEB] py-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#715482] text-center mb-4 leading-tight">
          Go Live in Three Simple Steps
        </h2>
        <p className="text-lg text-[#715482] text-center mb-10 max-w-2xl">
          Transform your publishing platform with AI-powered tools in just minutes. Our streamlined process gets you up and running fast.
        </p>
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center mb-16">
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              tag={f.tag}
              title={f.title}
              desc={f.desc}
              button={f.button}
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-medium text-[#715482] mb-1">PublisherAI</span>
          <span className="text-[#715482] text-center">Ready to transform your publishing platform?<br />
            <span className="text-[#715482] font-semibold">Start your journey</span> <span className="font-semibold text-[#715482]">today</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Feature;
