import React from 'react';
import { LogoMark } from '../ui/LogoMark';

const navGroups = [
  {
    label: 'Expertise',
    links: [
      { label: 'Digital Products', href: '#expertise' },
      { label: 'Intelligent Systems', href: '#expertise' },
      { label: 'Business Automation', href: '#expertise' },
      { label: 'Enterprise Technology', href: '#expertise' },
    ],
  },
  {
    label: 'Industries',
    links: [
      { label: 'Healthcare', href: '#industries' },
      { label: 'Real Estate', href: '#industries' },
      { label: 'Transportation', href: '#industries' },
      { label: 'Automation & AI', href: '#industries' },
    ],
  },
  {
    label: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Selected Work', href: '#work' },
      { label: 'Contact', href: '#contact' },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.06]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Top: logo + nav */}
        <div className="py-16 lg:py-20 grid md:grid-cols-[1fr,2fr] gap-16">
          {/* Brand */}
          <div>
            <LogoMark height={30} />
            <p className="font-body text-[#8A8A86] text-sm leading-relaxed mt-6 max-w-xs">
              Software engineering, product thinking, and intelligent automation for
              complex industries.
            </p>
            {/* Social — placeholders */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="font-display text-xs text-[#8A8A86]/60 hover:text-white transition-colors duration-150 tracking-wide"
              >
                LinkedIn
              </a>
              <span className="text-white/10">·</span>
              <a
                href="#"
                aria-label="GitHub"
                className="font-display text-xs text-[#8A8A86]/60 hover:text-white transition-colors duration-150 tracking-wide"
              >
                GitHub
              </a>
              <span className="text-white/10">·</span>
              <a
                href="#"
                aria-label="Twitter / X"
                className="font-display text-xs text-[#8A8A86]/60 hover:text-white transition-colors duration-150 tracking-wide"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Navigation groups */}
          <div className="grid grid-cols-3 gap-8">
            {navGroups.map((group) => (
              <div key={group.label}>
                <h3 className="font-display text-[10px] font-medium text-[#8A8A86]/60 tracking-[0.2em] uppercase mb-5">
                  {group.label}
                </h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-body text-sm text-[#8A8A86] hover:text-white transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-display text-xs text-[#8A8A86]/50 tracking-wide">
            © {new Date().getFullYear()} OneGo Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-display text-xs text-[#8A8A86]/50 hover:text-[#8A8A86] transition-colors duration-150 tracking-wide"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-display text-xs text-[#8A8A86]/50 hover:text-[#8A8A86] transition-colors duration-150 tracking-wide"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
