import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "The Platform", href: "#platform" },
    { label: "Monetization", href: "#monetization" },
    { label: "Why Publisher.AI?", href: "#why-publisher-ai" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (

<header className="sticky top-0 z-50 w-full border-none bg-[#F4EFEB] transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#715482] tracking-tight">Publisher.AI</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-12 text-lg font-semibold text-[#715482] ">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="relative hover:text-black transition-colors duration-300 group"
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#715482] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden xl:block">
          <a
            href="#login"
            className="inline-block px-6 py-2 rounded-full bg-[#715482] text-white text-md font-medium hover:opacity-90 transition"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="xl:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="xl:hidden px-2 pb-2 space-y-5 text-base font-medium text-gray-600">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="block hover:text-black relative group transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#715482] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#login"
            className="block text-white bg-purple-600 rounded-full px-4 py-2 text-center hover:opacity-90"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </a>
        </div>
      )}
    </header>
  );
}
