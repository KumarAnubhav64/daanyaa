import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

<header className="sticky top-0 z-50 w-full border-none bg-[#F4EFEB]/95 backdrop-blur-sm transition-all duration-300 ">
      <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold text-[#715482] tracking-tight hover:opacity-90 transition">
            Publisher.AI
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-12 text-lg font-semibold text-[#715482] ">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className="relative hover:text-black transition-colors duration-300 group"
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#715482] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden xl:block">
          <Link
            to="/contact"
            className="inline-block px-6 py-2 rounded-full bg-[#715482] text-white text-md font-medium hover:opacity-90 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="xl:hidden text-[#715482] hover:text-black transition-colors">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="xl:hidden px-8 pb-6 space-y-5 text-base font-medium text-[#715482] bg-[#F4EFEB]/95 backdrop-blur-sm border-t border-[#715482]/10">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className="block hover:text-black relative group transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#715482] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="block text-white bg-[#715482] rounded-full px-6 py-3 text-center hover:opacity-90 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
