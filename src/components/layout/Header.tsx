import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogoMark } from '../ui/LogoMark';
import { Button } from '../ui/Button';

const navLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Industries', href: '/#industries' },
  { label: 'How We Engineer', href: '/#engineering' },
  { label: 'Engineering Stack', href: '/#stack' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e?: React.MouseEvent, href?: string) => {
    setMenuOpen(false);

    if (href && (href.startsWith('/#') || href.startsWith('#'))) {
      const hash = href.includes('#') ? '#' + href.split('#')[1] : '';
      if (location.pathname === '/' && hash) {
        if (e && e.preventDefault) e.preventDefault();
        const target = document.querySelector(hash);
        if (target) {
          const headerOffset = 85;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
          window.history.pushState(null, '', href);
        }
      }
    } else if (href === '/projects' && location.pathname === '/projects') {
      if (e && e.preventDefault) e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#061536]/95 backdrop-blur-md border-b border-[#1B2B50] shadow-sm'
            : 'bg-[#061536]/80 backdrop-blur-sm border-b border-white/[0.06]'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo with clean clear space */}
            <Link
              to="/"
              aria-label="OneGo Technologies — Home"
              className="shrink-0 py-2"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  window.history.pushState(null, '', '/');
                }
              }}
            >
              <LogoMark height={38} variant="horizontal" />
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-7 xl:gap-9"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-display text-sm font-medium text-[#D9E1EC] hover:text-white transition-colors duration-150 tracking-tight relative group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1264FF] group-hover:w-full transition-all duration-200" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                variant="primary"
                size="sm"
                href="/#contact"
                onClick={(e) => handleNavClick(e, '/#contact')}
              >
                Start a Conversation
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus-visible:outline-2 focus-visible:outline-[#1264FF]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                  menuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen nav */}
      <div
        className={`fixed inset-0 z-40 bg-[#061536] flex flex-col justify-between transition-all duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Logo row */}
        <div className="flex items-center h-20 px-6 border-b border-[#1B2B50]">
          <LogoMark height={34} variant="horizontal" />
        </div>

        {/* Nav links */}
        <nav className="flex-1 flex flex-col justify-center px-8" aria-label="Mobile navigation">
          <ul className="space-y-3">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-display text-2xl sm:text-3xl font-semibold text-white/90 hover:text-white transition-colors duration-150 block py-2.5 tracking-tight"
                  style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile CTA */}
        <div className="px-8 pb-12">
          <Button
            variant="primary"
            size="lg"
            href="/#contact"
            onClick={(e) => handleNavClick(e, '/#contact')}
            className="w-full justify-center"
          >
            Start a Conversation
          </Button>
        </div>
      </div>
    </>
  );
};

