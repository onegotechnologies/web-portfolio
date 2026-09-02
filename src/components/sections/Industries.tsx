import React, { useState } from 'react';
import { useInView } from '../../hooks/useInView';

interface Industry {
  num: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  visualBlocks: { x: number; y: number; w: number; h: number; opacity: number }[];
}

const industries: Industry[] = [
  {
    num: '01',
    title: 'Healthcare',
    tagline: 'Software that improves how care is delivered.',
    description:
      'We build digital platforms that connect patients, providers, and operational systems. From workflow automation to data-driven decision tools — technology that works within the actual complexity of healthcare.',
    capabilities: [
      'Patient-facing applications',
      'Clinical workflow systems',
      'Healthcare operations platforms',
      'Data and reporting systems',
      'Process automation',
    ],
    visualBlocks: [
      { x: 10, y: 20, w: 50, h: 50, opacity: 0.2 },
      { x: 70, y: 10, w: 35, h: 35, opacity: 0.15 },
      { x: 20, y: 80, w: 30, h: 30, opacity: 0.1 },
      { x: 80, y: 65, w: 20, h: 20, opacity: 0.3 },
    ],
  },
  {
    num: '02',
    title: 'Real Estate',
    tagline: 'Property technology that mirrors how deals actually work.',
    description:
      'Real estate operations are complex, relationship-driven, and data-intensive. We build platforms for property management, sales workflows, and connected data systems that reduce friction across the entire lifecycle.',
    capabilities: [
      'Property management systems',
      'Real estate sales platforms',
      'Customer experience systems',
      'Data and analytics',
      'Workflow automation',
    ],
    visualBlocks: [
      { x: 5, y: 15, w: 40, h: 40, opacity: 0.15 },
      { x: 55, y: 10, w: 45, h: 45, opacity: 0.2 },
      { x: 10, y: 65, w: 35, h: 35, opacity: 0.12 },
      { x: 70, y: 65, w: 25, h: 25, opacity: 0.25 },
    ],
  },
  {
    num: '03',
    title: 'Transportation',
    tagline: 'Systems that keep fleets, logistics, and routes connected.',
    description:
      'Moving goods and people at scale requires intelligent operational software. We build fleet management, logistics, and route optimization systems that give transportation businesses real operational control.',
    capabilities: [
      'Fleet management systems',
      'Logistics platforms',
      'Route optimization',
      'Tracking and visibility',
      'Operational automation',
    ],
    visualBlocks: [
      { x: 0, y: 30, w: 30, h: 30, opacity: 0.12 },
      { x: 40, y: 15, w: 55, h: 30, opacity: 0.18 },
      { x: 15, y: 70, w: 50, h: 25, opacity: 0.1 },
      { x: 75, y: 60, w: 25, h: 35, opacity: 0.22 },
    ],
  },
  {
    num: '04',
    title: 'Automation & AI',
    tagline: 'AI is a tool. We use it to build better systems.',
    description:
      'Automation and AI are most effective when applied to specific operational problems. We integrate intelligent automation, workflow systems, and AI-driven tools that solve real business challenges — not marketing abstractions.',
    capabilities: [
      'Workflow automation',
      'Intelligent agents',
      'Business process automation',
      'AI integrations and APIs',
      'Data processing pipelines',
    ],
    visualBlocks: [
      { x: 10, y: 10, w: 35, h: 35, opacity: 0.18 },
      { x: 55, y: 5, w: 40, h: 40, opacity: 0.25 },
      { x: 5, y: 60, w: 45, h: 30, opacity: 0.12 },
      { x: 65, y: 60, w: 30, h: 35, opacity: 0.2 },
    ],
  },
];

/* Rich SVG composition per industry — architectural block language */
const IndustryVisual: React.FC<{ blocks: Industry['visualBlocks']; active: boolean; title: string }> = ({
  blocks,
  active,
  title,
}) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden>
    {/* Fine grid */}
    <defs>
      <pattern id={`g-${title}`} width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.3" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill={`url(#g-${title})`} />

    {/* Primary structural blocks */}
    {blocks.map((b, i) => (
      <rect
        key={i}
        x={b.x}
        y={b.y}
        width={b.w}
        height={b.h}
        fill={active ? `rgba(183,255,60,${b.opacity * 0.9})` : `rgba(255,255,255,${b.opacity * 0.7})`}
        stroke={active ? `rgba(183,255,60,${b.opacity + 0.15})` : `rgba(255,255,255,${b.opacity + 0.1})`}
        strokeWidth="0.5"
        className="transition-all duration-500"
        rx="0"
      />
    ))}

    {/* Arrow motif when active */}
    {active && (
      <g>
        <line x1="35" y1="50" x2="55" y2="50" stroke="rgba(183,255,60,0.8)" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="50,45 55,50 50,55" fill="none" stroke="rgba(183,255,60,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Active dot */}
        <circle cx="85" cy="15" r="2.5" fill="#B7FF3C" />
      </g>
    )}
  </svg>
);


export const Industries: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const active = industries[activeIndex];

  return (
    <section
      id="industries"
      ref={ref}
      className="bg-[#050505] py-28 lg:py-40"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <div className={`mb-16 lg:mb-24 reveal ${isInView ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C]" />
            <span className="font-display text-xs font-medium text-[#8A8A86] tracking-[0.2em] uppercase">
              Industry focus
            </span>
          </div>
          <h2
            className="font-display font-bold text-white tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Four complex industries.
            <br />
            <span className="text-[#8A8A86]">One engineering approach.</span>
          </h2>
        </div>

        {/* Industry explorer — desktop: two-column; mobile: stacked accordion */}
        <div className="lg:grid lg:grid-cols-[1fr,420px] lg:gap-20 items-start">
          {/* Left: industry list */}
          <div
            className={`space-y-0 border-t border-white/[0.08] reveal ${isInView ? 'visible' : ''} reveal-delay-2`}
          >
            {industries.map((industry, i) => (
              <div
                key={industry.num}
                className={`group border-b border-white/[0.08] transition-all duration-300 cursor-pointer ${
                  activeIndex === i ? 'bg-white/[0.02]' : 'hover:bg-white/[0.015]'
                }`}
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => setActiveIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveIndex(i)}
                aria-expanded={activeIndex === i}
                aria-label={`View ${industry.title} details`}
              >
                <div className="py-8 px-2 flex items-start justify-between gap-6">
                  {/* Number + title */}
                  <div className="flex items-start gap-6">
                    <span
                      className={`font-display text-sm font-medium transition-colors duration-200 mt-1 ${
                        activeIndex === i ? 'text-[#B7FF3C]' : 'text-[#8A8A86]/60'
                      }`}
                    >
                      {industry.num}
                    </span>
                    <div>
                      <h3
                        className={`font-display font-semibold tracking-tight transition-colors duration-200 ${
                          activeIndex === i ? 'text-white' : 'text-white/70'
                        }`}
                        style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
                      >
                        {industry.title}
                      </h3>
                      <p className="font-body text-[#8A8A86] text-sm mt-1 leading-snug max-w-xs">
                        {industry.tagline}
                      </p>

                      {/* Expandable content — mobile & desktop inline */}
                      <div
                        className={`overflow-hidden transition-all duration-400 ease-in-out ${
                          activeIndex === i
                            ? 'max-h-[500px] opacity-100 mt-5'
                            : 'max-h-0 opacity-0 mt-0'
                        }`}
                      >
                        <p className="font-body text-[#8A8A86] text-sm leading-relaxed mb-5">
                          {industry.description}
                        </p>
                        <ul className="space-y-2">
                          {industry.capabilities.map((cap) => (
                            <li
                              key={cap}
                              className="flex items-center gap-2.5 font-body text-sm text-white/60"
                            >
                              <span className="w-1 h-1 rounded-full bg-[#B7FF3C]/70 shrink-0" />
                              {cap}
                            </li>
                          ))}
                        </ul>

                        {/* Mobile visual (shown inside accordion on small screens) */}
                        <div className="lg:hidden mt-8 h-32 opacity-60">
                          <IndustryVisual blocks={industry.visualBlocks} active={true} title={industry.title} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <span
                    className={`shrink-0 transition-all duration-200 mt-2 ${
                      activeIndex === i ? 'text-[#B7FF3C] translate-x-1' : 'text-[#8A8A86]/40'
                    }`}
                  >
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: visual panel — desktop only */}
          <div
            className={`hidden lg:block sticky top-28 reveal ${isInView ? 'visible' : ''} reveal-delay-3`}
          >
            <div className="bg-white/[0.03] border border-white/[0.07] p-8 aspect-square relative overflow-hidden">
              {/* Number watermark */}
              <div
                className="absolute top-6 left-6 font-display font-bold text-white/[0.04] transition-all duration-500 select-none pointer-events-none"
                style={{ fontSize: '7rem', lineHeight: 1 }}
              >
                {active.num}
              </div>

              {/* Visual composition */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="h-48 opacity-80">
                  <IndustryVisual blocks={active.visualBlocks} active={true} title={active.title} />
                </div>

                {/* Industry label */}
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C]" />
                    <span className="font-display text-xs text-[#B7FF3C] tracking-[0.15em] uppercase">
                      {active.title}
                    </span>
                  </div>
                  <p className="font-display text-white/80 text-sm leading-snug">
                    {active.tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
