

export function Card({ children, className = "", variant = "default", ...props }) {
  // Custom beautiful shadow: large, soft, rose-50 color
  // rose-50 in Tailwind is #fff1f2
  // rose-500: rgb(244,63,94)
  const defaultShadow = "rounded-xl overflow-hidden shadow-[0_24px_120px_0_rgba(244,63,94,0.18),0_4px_32px_0_rgba(0,0,0,0.08),inset_0_1px_4px_0_rgba(255,255,255,0.7)]";

  // Feature card variant
  const featureCard = "bg-white rounded-2xl shadow-sm p-8 flex-1 min-w-[280px] max-w-md flex flex-col items-start border border-zinc-100";

  const base = variant === "feature" ? featureCard : defaultShadow;
  const finalClass = `${base} ${className}`;

  return (
    <div className={finalClass} {...props}>
      {children}
    </div>
  );
}

export function FeatureCard({ tag, title, desc, button, icon: Icon, gradient, delay = 0, ...props }) {
  return (
    <div
      className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl p-8 flex-1 min-w-[280px] max-w-md flex flex-col items-start border border-white/50 transition-all duration-500 hover:scale-105 hover:bg-white/90 group animate-fade-in-up cursor-pointer relative overflow-hidden`}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      {/* Gradient accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>

      {/* Icon with gradient background */}
      {Icon && (
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-full h-full text-white" />
        </div>
      )}

      <span className="bg-[#6B4F4E]/10 text-[#6B4F4E] text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-[#6B4F4E]/20">
        {tag}
      </span>

      <h3 className="text-2xl font-bold text-[#6B4F4E] mb-3 group-hover:text-[#5a3f6b] transition-colors duration-300">
        {title}
      </h3>

      <p className="text-[#6B4F4E]/80 mb-6 leading-relaxed flex-grow">
        {desc}
      </p>

      <button className="mt-auto px-6 py-2.5 border-2 border-[#6B4F4E]/20 rounded-full font-medium text-[#6B4F4E] hover:bg-[#6B4F4E] hover:text-white hover:border-[#6B4F4E] transition-all duration-300 group-hover:shadow-md relative overflow-hidden">
        <span className="relative z-50">{button}</span>
        <div className="absolute inset-0 bg-[#6B4F4E] scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </button>

      {/* Subtle hover glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
    </div>
  );
}

