import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LogoMark } from '../ui/LogoMark';
import { Button } from '../ui/Button';

const navLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Expertise', href: '/#engineering' },
  { label: 'Industries', href: '/#industries' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/95 backdrop-blur-sm border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" aria-label="OneGo Technologies — Home" className="shrink-0">
              <LogoMark height={32} />
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-8 lg:gap-10"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-display text-sm font-medium text-[#8A8A86] hover:text-white transition-colors duration-150 tracking-tight relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#B7FF3C] group-hover:w-full transition-all duration-200" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button variant="primary" size="sm" href="#contact">
                Start a conversation
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus-visible:outline-2 focus-visible:outline-[#B7FF3C]"
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
        className={`fixed inset-0 z-40 bg-[#050505] flex flex-col justify-between transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Logo row */}
        <div className="flex items-center h-16 px-6 border-b border-white/[0.06]">
          <LogoMark height={32} />
        </div>

        {/* Nav links */}
        <nav className="flex-1 flex flex-col justify-center px-8" aria-label="Mobile navigation">
          <ul className="space-y-2">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={handleNavClick}
                  className="font-display text-4xl font-semibold text-white/80 hover:text-white transition-colors duration-150 block py-3 tracking-tight"
                  style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile CTA */}
        <div className="px-8 pb-12">
          <Button variant="primary" size="lg" href="#contact" className="w-full justify-center">
            Start a conversation
          </Button>
        </div>
      </div>
    </>
  );
};
