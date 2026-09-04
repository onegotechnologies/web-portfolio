import React from 'react';
import { useInView } from '../../hooks/useInView';

export const About: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#061536] py-28 lg:py-36 border-b border-[#1B2B50] text-white scroll-mt-20 lg:scroll-mt-24"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div className={`lg:col-span-5 reveal ${isInView ? 'visible' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-[#1264FF]" />
              <span className="font-display text-xs font-semibold text-[#D9E1EC] tracking-[0.2em] uppercase">
                About OneGo
              </span>
            </div>
            <h2
              className="font-display font-bold text-white tracking-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              OneGo Technologies
            </h2>
            <p className="font-display text-[#D9E1EC]/70 text-base mt-2">
              Software &amp; Systems Engineering Organization
            </p>

            {/* Geometric accent — logo motif */}
            <div className="mt-10 flex items-center gap-3" aria-hidden>
              <div className="w-9 h-9 border border-white/20 bg-white/5" />
              <div className="w-7 h-7 bg-[#1264FF]/20 border border-[#1264FF]/40" />
              <div className="text-[#1264FF] text-sm font-mono">→</div>
            </div>
          </div>

          {/* Right */}
          <div className={`lg:col-span-7 reveal ${isInView ? 'visible' : ''} reveal-delay-2`}>
            <p
              className="font-body text-white font-medium leading-relaxed mb-8"
              style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)' }}
            >
              OneGo Technologies combines software engineering, product architecture, and
              intelligent automation to build systems that solve real operational
              problems.
            </p>
            <p className="font-body text-[#D9E1EC] text-base leading-relaxed mb-6">
              We work in industries where software complexity is high and the operational stakes
              are significant. Healthcare, real estate, transportation,
              and automation-driven businesses need technology partners who understand the
              domain, not just the code.
            </p>
            <p className="font-body text-[#D9E1EC] text-base leading-relaxed">
              From the initial architecture to scalable deployment and long-term evolution —
              we engineer technology built to operate reliably, scale cleanly, and deliver lasting value.
            </p>

            {/* Values */}
            <div className="mt-12 pt-8 border-t border-[#1B2B50] grid sm:grid-cols-2 gap-6">
              {[
                { label: 'Engineering-led', sub: 'Technology decisions made for the long term' },
                { label: 'Domain-aware', sub: 'We understand operational realities, not just briefs' },
                { label: 'Product-minded', sub: 'Engineered for actual users and system integration' },
                { label: 'Reliable execution', sub: 'High architectural standards across every build' },
              ].map((v) => (
                <div key={v.label} className="p-4 bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 bg-[#1264FF]" />
                    <h4 className="font-display text-sm font-bold text-white">
                      {v.label}
                    </h4>
                  </div>
                  <p className="font-body text-xs text-[#D9E1EC]/70 leading-relaxed">{v.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

