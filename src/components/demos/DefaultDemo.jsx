export default function DefaultDemo({ feature }) {
  return (
    <div className="bg-[#6B4F4E] rounded-2xl p-8 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
        {feature.demoTitle}
      </h3>

      <div className="max-w-2xl mx-auto">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder={feature.demoPlaceholder}
            className="w-full px-6 py-4 rounded-full text-[#6B4F4E] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
          />
        </div>

        <button className="bg-white text-[#6B4F4E] px-8 py-3 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity duration-300 shadow-lg">
          {feature.demoButtonText}
        </button>
      </div>
    </div>
  );
}
