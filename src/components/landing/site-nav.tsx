import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Process', href: '/process' },
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
];

export function SiteNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <nav
          className={`rounded-full bg-ink text-ink-foreground px-4 py-2.5 sm:px-5 sm:py-3 flex items-center justify-between transition-all duration-500 border border-white/10 ${
            isScrolled ? 'shadow-float backdrop-blur-md bg-ink/95' : 'shadow-soft'
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Nexora Home"
          >
            <div className="w-7 h-7 rounded-lg bg-butter flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="w-3 h-3 rounded-[3px] bg-ink" />
            </div>
            <span className="font-display font-medium text-lg tracking-tight text-ink-foreground">
              Nexora
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1.5 sm:gap-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-white/15 text-butter font-medium'
                      : 'text-ink-muted hover:text-ink-foreground hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Action + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="bg-butter text-butter-foreground rounded-full px-4 py-2 text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 hover:scale-[1.03] transition-all duration-200 shadow-sm"
            >
              <span>Book a call</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-ink-muted hover:text-ink-foreground hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 rounded-3xl bg-ink/95 backdrop-blur-xl border border-white/10 text-ink-foreground p-6 shadow-float animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base px-3 py-2 rounded-xl transition-colors ${
                    isActive ? 'bg-white/15 text-butter font-medium' : 'text-ink-muted hover:text-ink-foreground'
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
                    `text-base px-3 py-2 rounded-xl transition-colors ${
                      isActive ? 'bg-white/15 text-butter font-medium' : 'text-ink-muted hover:text-ink-foreground'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-3 border-t border-white/10 mt-2">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-butter text-butter-foreground rounded-full py-3 text-sm font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  <span>Book a call</span>
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
