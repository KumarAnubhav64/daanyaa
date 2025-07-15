import React from 'react';

const ContentSection = () => {
  return (
    <section className="bg-[#F4EFEB] py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#6B4F4E] mb-12 leading-tight">
          Your audience is evolving. Are your<br />
          tools keeping pace?
        </h2>

        {/* Description Paragraphs */}
        <div className="max-w-5xl mx-auto space-y-8 text-lg md:text-xl text-[#6B4F4E] leading-relaxed">
          <p>
            Static content no longer cuts it. Today's users crave interactive,
            immersive experience and ad revenue alone is proving increasingly
            volatile. Meanwhile, AI isn't just another tool; it's the defining
            challenge and greatest opportunity for publishers in a generation.
          </p>

          <p>
            PublisherAI transforms disruption into advantage.
            Our unified platform delivers the intelligent tools your audience
            expects—meeting them where they are, while you build a more
            resilient, profitable business.
          </p>

          <p className="font-medium">
            Go live in just three simple steps."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
