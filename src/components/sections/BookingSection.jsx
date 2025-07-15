import React from 'react';

const BookingSection = () => {
  return (
    <section className="bg-[#F4EFEB] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#6B4F4E] mb-8 leading-tight">
          Discover the Next Era of Publishing
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-[#6B4F4E] mb-12 leading-relaxed max-w-4xl mx-auto">
          let us show you how PublisherAI can transform your engagement and revenue. The demo is free and takes less than 30 minutes.
        </p>

        {/* CTA Button */}
        <button className="bg-[#6B4F4E] text-white px-12 py-4 rounded-full text-xl font-medium hover:opacity-90 transition-opacity duration-300 shadow-lg">
          Book a Free Demo
        </button>
      </div>
    </section>
  );
};

export default BookingSection;
