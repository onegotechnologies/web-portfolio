import React from 'react';
import { GeometricCanvas } from '../ui/GeometricCanvas';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen bg-[#0A0A0A] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text content */}
          <div>
            {/* Category label */}
            <div className="flex items-center gap-3 mb-8 animate-[fade-in_0.6s_ease_0.2s_both]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C]" />
              <span className="font-display text-xs font-medium text-[#8A8A86] tracking-[0.2em] uppercase">
                Software &amp; Systems
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="font-display font-bold text-white leading-[1.05] tracking-tight mb-8 animate-[fade-up_0.8s_ease_0.3s_both]"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)' }}
            >
              Technology built for the businesses that{' '}
              <span className="text-[#B7FF3C]">move the world.</span>
            </h1>

            {/* Supporting copy */}
            <p
              className="font-body text-[#8A8A86] leading-relaxed mb-12 max-w-lg animate-[fade-up_0.8s_ease_0.45s_both]"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
            >
              OneGo Technologies builds digital products, intelligent systems and
              scalable software for organizations operating in complex, fast-moving
              industries.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-[fade-up_0.8s_ease_0.6s_both]">
              <Button variant="primary" size="lg" href="#industries">
                Explore our expertise
              </Button>
              <Button variant="secondary" size="lg" href="#contact">
                Start a project
              </Button>
            </div>

            {/* Industry indicators */}
            <div className="mt-16 pt-8 border-t border-white/[0.08] animate-[fade-up_0.8s_ease_0.75s_both]">
              <p className="font-display text-[10px] text-[#8A8A86] tracking-[0.2em] uppercase mb-4">
                Core domains
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {['Healthcare', 'Real Estate', 'Transportation', 'Automation & AI'].map((d) => (
                  <span
                    key={d}
                    className="font-display text-sm font-medium text-white/60 flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#B7FF3C]/60" />
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Geometric visual */}
          <div
            className="relative hidden lg:block h-[480px] animate-[fade-in_1.2s_ease_0.4s_both]"
          >
            <GeometricCanvas />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fade-in_1s_ease_1.5s_both]">
        <span className="font-display text-[10px] text-[#8A8A86] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#8A8A86] to-transparent" />
      </div>
    </section>
  );
};
