import React from 'react';
import { GeometricCanvas } from '../ui/GeometricCanvas';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-[92vh] bg-[#061536] flex items-center overflow-hidden border-b border-[#1B2B50]"
      aria-label="Hero"
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Subtle radial depth highlight */}
      <div 
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#1264FF]/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden 
      />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-24 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text content */}
          <div>
            {/* Category label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-[#1264FF] rounded-none" />
              <span className="font-display text-xs font-semibold text-[#D9E1EC] tracking-[0.2em] uppercase">
                Software &amp; Systems Engineering
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="font-display font-bold text-white leading-[1.06] tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)' }}
            >
              Technology built for the businesses that{' '}
              <span className="text-[#1D6BFF]">move the world.</span>
            </h1>

            {/* Supporting copy */}
            <p
              className="font-body text-[#D9E1EC] leading-relaxed mb-10 max-w-xl text-base md:text-lg"
              style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.15rem)' }}
            >
              OneGo Technologies builds digital products, intelligent systems, and
              scalable software for organizations operating in complex, high-stakes
              industries.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" href="/#industries">
                Explore our expertise
              </Button>
              <Button variant="secondary" size="lg" href="/#contact">
                Start a Conversation
              </Button>
            </div>

            {/* Industry indicators */}
            <div className="mt-14 pt-8 border-t border-white/[0.1]">
              <p className="font-display text-[11px] text-[#D9E1EC]/70 tracking-[0.2em] uppercase mb-4">
                Core Domains
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2.5">
                {['Healthcare', 'Real Estate', 'Transportation', 'Automation & AI'].map((d) => (
                  <span
                    key={d}
                    className="font-display text-sm font-medium text-white/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#1264FF]" />
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Geometric visual */}
          <div
            className="relative hidden lg:block h-[500px] animate-[fade-in_1.2s_ease_0.4s_both]"
          >
            <GeometricCanvas />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fade-in_1s_ease_1.5s_both]">
        <span className="font-display text-[10px] text-[#D9E1EC]/60 tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-px h-7 bg-gradient-to-b from-[#1264FF] to-transparent" />
      </div>
    </section>
  );
};

