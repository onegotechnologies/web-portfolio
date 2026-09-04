import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogoMark } from '../ui/LogoMark';

const navGroups = [
  {
    label: 'Capabilities',
    links: [
      { label: 'Product Engineering', href: '/#engineering' },
      { label: 'Intelligent Systems', href: '/#engineering' },
      { label: 'Cloud & Infrastructure', href: '/#engineering' },
      { label: 'Data & Integration', href: '/#engineering' },
    ],
  },
  {
    label: 'Industries',
    links: [
      { label: 'Healthcare', href: '/#industries' },
      { label: 'Real Estate', href: '/#industries' },
      { label: 'Transportation', href: '/#industries' },
      { label: 'Automation & AI', href: '/#industries' },
    ],
  },
  {
    label: 'Navigation',
    links: [
      { label: 'Explore Projects', href: '/projects' },
      { label: 'Engineering Stack', href: '/#stack' },
      { label: 'About OneGo', href: '/#about' },
      { label: 'Start a Conversation', href: '/#contact' },
    ],
  },
];

export const Footer: React.FC = () => {
  const location = useLocation();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') || href.startsWith('#')) {
      const hash = href.includes('#') ? '#' + href.split('#')[1] : '';
      if (location.pathname === '/' && hash) {
        e.preventDefault();
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
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#061536] border-t border-[#1B2B50] text-white">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Top: logo + nav */}
        <div className="py-16 lg:py-20 grid md:grid-cols-12 gap-16 items-start">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="inline-block">
              <LogoMark height={42} variant="horizontal" />
            </div>
            <p className="font-body text-[#D9E1EC] text-sm leading-relaxed mt-6 max-w-sm">
              We combine software engineering, automation, and AI to turn operational complexity into systems that work.
            </p>
            <div className="mt-4 text-xs font-display text-[#1264FF] tracking-wider uppercase">
              Technology Built Around The Problem
            </div>
          </div>

          {/* Navigation groups */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {navGroups.map((group) => (
              <div key={group.label}>
                <h3 className="font-display text-xs font-semibold text-white tracking-[0.15em] uppercase mb-4">
                  {group.label}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="font-body text-sm text-[#D9E1EC]/80 hover:text-white hover:translate-x-0.5 inline-block transition-all duration-150"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1B2B50] py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-display text-xs text-[#D9E1EC]/60 tracking-wide">
            © {new Date().getFullYear()} OneGo Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-display text-xs text-[#D9E1EC]/60">
              Healthcare · Real Estate · Transportation · Automation &amp; AI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

