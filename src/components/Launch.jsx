import React from "react";

const launchFeatures = [
  {
    title: <span className="font-semibold">Instant MCP endpoint</span>,
    desc: <>Flip a switch and your fully-compliant /mcp server goes live at <span className="font-semibold text-zinc-800">tollbit.yoursite.com/mcp</span>. No infrastructure, no spec implementation required.</>
  },
  {
    title: <span className="font-semibold">Auth & payments built-in</span>,
    desc: "We validate callers, meter usage, and settle payments automatically — monetize every query without issuing API keys."
  },
  {
    title: <span className="font-semibold">Auto–distribution & analytics</span>,
    desc: "Your MCP tools become discoverable in the TollBit agent network. Real-time dashboards show usage and revenue."
  }
];

const Launch = () => {
  return (
    <section className="w-full py-30 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full order-2 md:order-1">
          <div className="bg-[#f7f3f2] rounded-2xl p-8 min-h-[140px] flex flex-col justify-between">
            <div>
              <div className="text-xl mb-2 text-zinc-900">{launchFeatures[0].title}</div>
              <div className="text-zinc-600 text-base">{launchFeatures[0].desc}</div>
            </div>
          </div>
          <div className="bg-[#f7f3f2] rounded-2xl p-8 min-h-[140px] flex flex-col justify-between">
            <div>
              <div className="text-xl mb-2 text-zinc-900">{launchFeatures[1].title}</div>
              <div className="text-zinc-600 text-base">{launchFeatures[1].desc}</div>
            </div>
          </div>
          <div className="bg-[#f7f3f2] rounded-2xl p-8 min-h-[140px] flex flex-col justify-between sm:col-span-2">
            <div>
              <div className="text-xl mb-2 text-zinc-900">{launchFeatures[2].title}</div>
              <div className="text-zinc-600 text-base">{launchFeatures[2].desc}</div>
            </div>
          </div>
        </div>
        {/* Right: Text and CTA */}
        <div className="flex flex-col items-start justify-center max-w-xl mx-auto md:mx-0 order-1 md:order-2">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-700 mb-4 leading-tight">
            Launch your<br /> <span className="text-zinc-900">MCP server</span> in minutes
          </h2>
          <p className="text-lg text-zinc-600 mb-8">
            Instant deployment, automatic monetization, and seamless distribution across the agent network
          </p>
          <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-semibold rounded-full px-8 py-3 text-lg transition mb-12 md:mb-20">
            Explore TollBit for MCP
          </button>
          <div className="mt-auto">
            <span className="text-2xl font-medium text-zinc-500 mb-1 block">TIME</span>
            <span className="text-zinc-500">See how TIME handles this at<br />
              <span className="text-[#ff5722] font-semibold">tollbit</span>.<span className="font-semibold text-zinc-700">time.com/mcp</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Launch;
