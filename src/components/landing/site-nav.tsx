import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '../common/brand-logo';

const NAV_LINKS = [
  { label: 'Solutions', href: '/services' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Process', href: '/process' },
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '/faq' },
];

export function SiteNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-5 pt-4 sm:px-10 sm:pt-6 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <nav
          className={`relative rounded-full px-6 py-3.5 flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? 'bg-white/90 text-zinc-950 backdrop-blur-2xl border border-black/10 shadow-lg'
              : 'bg-white/50 text-zinc-950 backdrop-blur-md border border-black/5 shadow-xs'
          }`}
          aria-label="Main Navigation"
        >
          {/* Left: Brand Logo & Title (My Planet Services) */}
          <Link
            to="/"
            className="flex items-center shrink-0 z-10"
            aria-label="My Planet Services Home"
          >
            <BrandLogo variant="light" />
          </Link>

          {/* Center: Desktop Navigation Links (Centered in the Nav Bar) */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-8 absolute left-1/2 -translate-x-1/2">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-xs font-mono uppercase tracking-wider transition-colors ${
                  isActive ? 'text-zinc-950 font-bold' : 'text-zinc-700 hover:text-zinc-950'
                }`
              }
            >
              SOLUTIONS
            </NavLink>
            <NavLink
              to="/process"
              className={({ isActive }) =>
                `text-xs font-mono uppercase tracking-wider transition-colors ${
                  isActive ? 'text-zinc-950 font-bold' : 'text-zinc-700 hover:text-zinc-950'
                }`
              }
            >
              PROCESS
            </NavLink>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `text-xs font-mono uppercase tracking-wider transition-colors ${
                  isActive ? 'text-zinc-950 font-bold' : 'text-zinc-700 hover:text-zinc-950'
                }`
              }
            >
              CASES
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `text-xs font-mono uppercase tracking-wider transition-colors ${
                  isActive ? 'text-zinc-950 font-bold' : 'text-zinc-700 hover:text-zinc-950'
                }`
              }
            >
              PRICING
            </NavLink>
          </div>

          {/* Right: CTA Button & Mobile Hamburger */}
          <div className="flex items-center gap-4 z-10">
            <Link
              to="/contact"
              className="bg-zinc-950 hover:bg-black text-white rounded-full px-4 sm:px-5 py-2 text-xs font-medium inline-flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm cursor-pointer shrink-0"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-full text-zinc-700 hover:text-zinc-950 hover:bg-black/5 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 rounded-3xl bg-white/95 backdrop-blur-2xl border border-black/10 text-zinc-950 p-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-2 text-left">
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm px-4 py-2.5 rounded-2xl transition-colors ${
                    isActive ? 'bg-zinc-100 text-zinc-950 font-semibold' : 'text-zinc-700 hover:text-zinc-950'
                  }`
                }
              >
                Home
              </NavLink>
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm px-4 py-2.5 rounded-2xl transition-colors ${
                      isActive ? 'bg-zinc-100 text-zinc-950 font-semibold' : 'text-zinc-700 hover:text-zinc-950'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-zinc-200 mt-2">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-zinc-950 text-white rounded-full py-3 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-black transition-colors"
                >
                  <span>Start Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
