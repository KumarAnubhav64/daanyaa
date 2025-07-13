export default function DefaultDemo({ feature }) {
  return (
    <div className="bg-[#715482] rounded-2xl p-8 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
        {feature.demoTitle}
      </h3>

      <div className="max-w-2xl mx-auto">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder={feature.demoPlaceholder}
            className="w-full px-6 py-4 rounded-full text-[#715482] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
          />
        </div>

        <button className="bg-white text-[#715482] px-8 py-3 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity duration-300 shadow-lg">
          {feature.demoButtonText}
        </button>
      </div>
    </div>
  );
}
