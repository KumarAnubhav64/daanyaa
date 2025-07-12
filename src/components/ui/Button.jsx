// src/components/ui/Button.jsx
export function Button({ children, className = "", variant = "default", ...props }) {
  const base =
    "inline-flex items-center justify-center text-sm  font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-[#715482]-600 text-white hover:bg-gray-900",
    outline: "border border-gray-500 text-black hover:bg-gray-100",
    ghost: "text-black hover:bg-gray-100",
  };

  const finalClass = `${base} ${variants[variant]} ${className} px-5 py-3 rounded-full`;

  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  );
}
