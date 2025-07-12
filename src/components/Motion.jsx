import React from "react";

const Motion = () => {
  return (
    <section className="w-full bg-[#f7f3f2] py-24 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center min-h-[500px]">
        {/* Circles */}
        <div className="flex-1 flex items-center justify-center relative min-h-[420px]">
          <div className="absolute left-[28%] md:left-[10%] top-[8%] -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="bg-[#ff3c0a] text-white flex items-center justify-center rounded-full w-[420px] h-[420px] text-center text-base absolute left-0 top-0 z-10 select-none" style={{lineHeight:'420px'}}>
                <span className="w-full block" style={{lineHeight:'normal'}}>Human traffic</span>
              </div>
              <div className="bg-zinc-900 text-white flex items-center justify-center rounded-full w-[260px] h-[260px] text-center text-base absolute left-[290px] top-[100px] z-20 select-none" style={{lineHeight:'260px'}}>
                <span className="w-full block" style={{lineHeight:'normal'}}>AI bot traffic</span>
              </div>
            </div>
          </div>
        </div>
        {/* Text */}
        <div className="flex-1 flex flex-col items-start justify-center mt-12 md:mt-0 md:ml-12 max-w-xl">
          <div className="flex items-center gap-6 mb-2">
            <div className="text-zinc-500 text-sm">2019</div>
            <div className="text-2xl font-bold text-zinc-900">62.8%</div>
            <span className="text-2xl mx-2">→</span>
            <div className="text-zinc-500 text-sm">2023</div>
            <div className="text-2xl font-bold text-zinc-900">50.4%</div>
          </div>
          <div className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-[#ff3c0a]">Human traffic has been steadily declining</span>
            <span className="text-zinc-900"> since AI tools became widely available</span>
          </div>
        </div>
      </div>
      {/* Timeline */}
      <div className="absolute left-0 bottom-0 w-full px-4">
        <div className="max-w-7xl mx-auto flex items-end justify-between text-zinc-400 text-sm relative">
          {/* Timeline lines */}
          <div className="absolute left-0 top-0 w-full h-8 flex items-end z-0">
            {Array.from({ length: 21 }).map((_, i) => (
              <div key={i} className="flex-1 h-full flex flex-col items-center">
                <div className="w-0.5 h-6 bg-zinc-300 mb-1" />
              </div>
            ))}
          </div>
          {/* Timeline years */}
          <div className="w-full flex justify-between z-10 pt-8">
            <span className="ml-2">2020</span>
            <span className="mr-2">2022</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motion;
