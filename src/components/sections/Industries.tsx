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
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(6,21,54,0.06)" strokeWidth="0.5" />
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
        fill={active ? `rgba(18,100,255,${b.opacity * 0.9})` : `rgba(6,21,54,${b.opacity * 0.5})`}
        stroke={active ? `rgba(18,100,255,${b.opacity + 0.2})` : `rgba(6,21,54,${b.opacity + 0.1})`}
        strokeWidth="0.8"
        className="transition-all duration-500"
        rx="0"
      />
    ))}

    {/* Arrow motif when active */}
    {active && (
      <g>
        <line x1="35" y1="50" x2="55" y2="50" stroke="#1264FF" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="50,45 55,50 50,55" fill="none" stroke="#1264FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Active dot */}
        <circle cx="85" cy="15" r="2.5" fill="#1264FF" />
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
      className="bg-[#F7F9FC] py-28 lg:py-36 border-b border-[#D9E1EC] scroll-mt-20 lg:scroll-mt-24"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <div className={`mb-16 lg:mb-20 reveal ${isInView ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-[#1264FF]" />
            <span className="font-display text-xs font-semibold text-[#5B667A] tracking-[0.2em] uppercase">
              Industry Focus
            </span>
          </div>
          <h2
            className="font-display font-bold text-[#101828] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Four complex industries.
            <br />
            <span className="text-[#5B667A]">One engineering approach.</span>
          </h2>
        </div>

        {/* Industry explorer — desktop: two-column; mobile: stacked accordion */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left: industry list */}
          <div
            className={`lg:col-span-7 space-y-0 border-t border-[#D9E1EC] reveal ${isInView ? 'visible' : ''} reveal-delay-2`}
          >
            {industries.map((industry, i) => (
              <div
                key={industry.num}
                className={`group border-b border-[#D9E1EC] transition-all duration-200 cursor-pointer ${
                  activeIndex === i ? 'bg-white shadow-sm' : 'hover:bg-white/50'
                }`}
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => setActiveIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveIndex(i)}
                aria-expanded={activeIndex === i}
                aria-label={`View ${industry.title} details`}
              >
                <div className="py-7 px-4 md:px-6 flex items-start justify-between gap-6">
                  {/* Number + title */}
                  <div className="flex items-start gap-6">
                    <span
                      className={`font-display text-sm font-semibold transition-colors duration-200 mt-1 ${
                        activeIndex === i ? 'text-[#1264FF]' : 'text-[#5B667A]/60'
                      }`}
                    >
                      {industry.num}
                    </span>
                    <div>
                      <h3
                        className={`font-display font-bold tracking-tight transition-colors duration-200 ${
                          activeIndex === i ? 'text-[#101828]' : 'text-[#101828]/80'
                        }`}
                        style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)' }}
                      >
                        {industry.title}
                      </h3>
                      <p className="font-body text-[#5B667A] text-sm mt-1 leading-snug max-w-sm">
                        {industry.tagline}
                      </p>

                      {/* Expandable content — mobile inline */}
                      <div
                        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                          activeIndex === i
                            ? 'max-h-[500px] opacity-100 mt-5 pt-4 border-t border-[#D9E1EC]'
                            : 'max-h-0 opacity-0 mt-0'
                        }`}
                      >
                        <p className="font-body text-[#5B667A] text-sm leading-relaxed mb-4">
                          {industry.description}
                        </p>
                        <ul className="space-y-2">
                          {industry.capabilities.map((cap) => (
                            <li
                              key={cap}
                              className="flex items-center gap-2.5 text-xs font-display text-[#101828]"
                            >
                              <span className="w-1.5 h-1.5 bg-[#1264FF]" />
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`font-display text-lg transition-transform duration-200 ${
                      activeIndex === i ? 'text-[#1264FF] translate-x-1' : 'text-[#5B667A]/40'
                    }`}
                  >
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Desktop preview card with architectural visual */}
          <div
            className={`hidden lg:block lg:col-span-5 bg-white border border-[#D9E1EC] p-8 reveal ${
              isInView ? 'visible' : ''
            } reveal-delay-3 sticky top-28 shadow-sm`}
          >
            {/* Visual canvas */}
            <div className="h-56 bg-[#EEF3FA] border border-[#D9E1EC] mb-6 p-4">
              <IndustryVisual
                blocks={active.visualBlocks}
                active={true}
                title={active.title}
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <span className="font-display text-xs text-[#1264FF] font-semibold tracking-wider uppercase mb-1 block">
                {active.num} · Domain Focus
              </span>
              <h4 className="font-display text-xl font-bold text-[#101828] mb-3">
                {active.title}
              </h4>
              <p className="font-body text-[#5B667A] text-sm leading-relaxed">
                {active.description}
              </p>
            </div>

            {/* Capabilities list */}
            <div>
              <p className="font-display text-[11px] text-[#5B667A] tracking-[0.15em] uppercase mb-3 font-medium">
                Key Capabilities
              </p>
              <ul className="space-y-2">
                {active.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-center gap-2.5 font-display text-xs text-[#101828]"
                  >
                    <span className="w-1.5 h-1.5 bg-[#1264FF]" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

