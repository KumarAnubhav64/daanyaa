import React from "react";

const usageFeatures = [
  {
    title: <><span className="font-semibold">Instant <span className="text-zinc-800">yoursite.com/ask</span> endpoint</span></>,
    desc: "Check a box in TollBit dashboard — /ask endpoint goes live instantly at your subdomain. No servers, no setup required."
  },
  {
    title: <span className="font-semibold">Enterprise ready</span>,
    desc: "Complete with agent authentication, rate limiting, monitoring, and enterprise-grade uptime."
  },
  {
    title: <span className="font-semibold">Agent–aware billing & analytics</span>,
    desc: "Automatically charge AI agents per query while keeping it free for human readers. Real-time analytics included."
  }
];

const Useage = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text and CTA */}
        <div className="flex flex-col items-start justify-center max-w-xl mx-auto md:mx-0">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-700 mb-4 leading-tight">
            Deploy AI-powered<br /> content access<br /> with <span className="text-zinc-900">NLWeb</span>
          </h2>
          <p className="text-lg text-zinc-600 mb-8">
            One-click <span className="font-semibold text-zinc-800">yoursite.com/ask</span> endpoint deployment with enterprise-grade authentication, billing, and analytics
          </p>
          <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-semibold rounded-full px-8 py-3 text-lg transition mb-12 md:mb-20">
            Explore TollBit for NLWeb
          </button>
          <div className="mt-auto">
            <span className="text-2xl font-medium text-zinc-500 mb-1 block">TIME</span>
            <span className="text-zinc-500">See how TIME handles this at<br />
              <span className="text-[#ff5722] font-semibold">tollbit</span>.<span className="font-semibold text-zinc-700">time.com/ask</span>
            </span>
          </div>
        </div>
        {/* Right: Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="bg-[#f7f3f2] rounded-2xl p-8 min-h-[160px] flex flex-col justify-between">
            <div>
              <div className="text-xl mb-2 text-zinc-900">{usageFeatures[0].title}</div>
              <div className="text-zinc-600 text-base">{usageFeatures[0].desc}</div>
            </div>
          </div>
          <div className="bg-[#f7f3f2] rounded-2xl p-8 min-h-[160px] flex flex-col justify-between">
            <div>
              <div className="text-xl mb-2 text-zinc-900">{usageFeatures[1].title}</div>
              <div className="text-zinc-600 text-base">{usageFeatures[1].desc}</div>
            </div>
          </div>
          <div className="bg-[#f7f3f2] rounded-2xl p-8 min-h-[160px] flex flex-col justify-between sm:col-span-2">
            <div>
              <div className="text-xl mb-2 text-zinc-900">{usageFeatures[2].title}</div>
              <div className="text-zinc-600 text-base">{usageFeatures[2].desc}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Useage;
