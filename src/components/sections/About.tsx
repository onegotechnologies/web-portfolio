import React from 'react';
import { useInView } from '../../hooks/useInView';

export const About: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#050505] py-28 lg:py-40"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1fr,1.4fr] gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div className={`reveal ${isInView ? 'visible' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C]" />
              <span className="font-display text-xs font-medium text-[#8A8A86] tracking-[0.2em] uppercase">
                About
              </span>
            </div>
            <h2
              className="font-display font-bold text-white tracking-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              OneGo Technologies
            </h2>
            <p className="font-display text-[#8A8A86] text-base mt-2">
              Software &amp; Systems Company
            </p>

            {/* Geometric accent — logo motif */}
            <div className="mt-12 flex items-center gap-3" aria-hidden>
              <div className="w-10 h-10 border border-white/10" />
              <div className="w-7 h-7 border border-[#B7FF3C]/30 bg-[#B7FF3C]/[0.05]" />
              <div className="text-[#B7FF3C]/60 text-sm font-mono">→</div>
            </div>
          </div>

          {/* Right */}
          <div className={`reveal ${isInView ? 'visible' : ''} reveal-delay-2`}>
            <p
              className="font-body text-white/75 leading-relaxed mb-8"
              style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.375rem)' }}
            >
              OneGo Technologies combines software engineering, product thinking, and
              intelligent automation to build technology that solves real operational
              problems.
            </p>
            <p className="font-body text-[#8A8A86] text-base leading-relaxed mb-8">
              We work in industries where software complexity is high and the stakes of
              getting it wrong are significant. Healthcare, real estate, transportation,
              and automation-heavy businesses need technology partners who understand the
              domain, not just the stack.
            </p>
            <p className="font-body text-[#8A8A86] text-base leading-relaxed">
              From the first architecture decision to production deployment and beyond —
              we engineer software built to operate reliably, scale cleanly, and improve
              continuously.
            </p>

            {/* Values — minimal list */}
            <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 gap-6">
              {[
                { label: 'Engineering-led', sub: 'Technology decisions made for the long term' },
                { label: 'Domain-aware', sub: 'We learn the industry, not just the brief' },
                { label: 'Product-minded', sub: 'Built for users, not for spec' },
                { label: 'Long-term partners', sub: 'We ship and then we improve' },
              ].map((v) => (
                <div key={v.label}>
                  <h4 className="font-display text-sm font-semibold text-white mb-1">
                    {v.label}
                  </h4>
                  <p className="font-body text-xs text-[#8A8A86] leading-snug">{v.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
