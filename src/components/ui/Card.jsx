

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

export function FeatureCard({ tag, title, desc, button, ...props }) {
  return (
    <Card variant="feature" {...props}>
      <span className="bg-[#715482] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
        {tag}
      </span>
      <h3 className="text-2xl font-bold text-[#715482] mb-2">{title}</h3>
      <p className="text-[#715482] mb-6">{desc}</p>
      <button className="mt-auto px-5 py-2 border border-zinc-300 rounded-full font-medium text-[#715482] hover:bg-zinc-50 transition">
        {button}
      </button>
    </Card>
  );
}

