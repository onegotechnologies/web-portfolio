import React from 'react';
import { useInView } from '../../hooks/useInView';

const capabilities = [
  {
    category: 'Digital Products',
    items: ['Web platforms', 'Mobile applications', 'SaaS products', 'Customer portals'],
    description:
      'Software people actually use. We design and build digital products around how users and businesses work — not around technology trends.',
  },
  {
    category: 'Intelligent Systems',
    items: ['AI integrations', 'Machine learning pipelines', 'Intelligent agents', 'Data systems'],
    description:
      'AI applied to specific, solvable problems. We build systems that learn from operational data and make businesses more capable over time.',
  },
  {
    category: 'Business Automation',
    items: [
      'Workflow automation',
      'Process optimization',
      'API integrations',
      'Third-party connectors',
    ],
    description:
      'Manual processes that consume time and introduce error are opportunities for automation. We identify and eliminate them systematically.',
  },
  {
    category: 'Enterprise Technology',
    items: [
      'Scalable backend systems',
      'Cloud infrastructure',
      'Data architecture',
      'API design',
    ],
    description:
      'Systems built for scale — designed to handle growth without requiring complete rebuilds. Engineering decisions made for the long term.',
  },
];

export const WhatWeBuild: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.08 });

  return (
    <section
      id="expertise"
      ref={ref}
      className="bg-[#F4F3EF] py-28 lg:py-40"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className={`mb-16 lg:mb-24 reveal ${isInView ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#050505]" />
            <span className="font-display text-xs font-medium text-[#8A8A86] tracking-[0.2em] uppercase">
              What we build
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              className="font-display font-bold text-[#111111] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Four types of technology.
              <br />
              One engineering standard.
            </h2>
            <p className="font-body text-[#8A8A86] text-base leading-relaxed max-w-sm">
              We build software that turns complex operations into connected, scalable systems.
            </p>
          </div>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 gap-0 border-t border-[#111111]/10">
          {capabilities.map((cap, i) => (
            <div
              key={cap.category}
              className={`border-b border-r border-[#111111]/10 py-10 px-8 md:px-10 group hover:bg-[#111111]/[0.02] transition-colors duration-200 reveal ${isInView ? 'visible' : ''} reveal-delay-${i + 1} ${
                i % 2 === 0 ? '' : 'md:border-r-0'
              }`}
            >
              {/* Number */}
              <div className="font-display text-xs font-medium text-[#8A8A86]/60 tracking-[0.2em] mb-5">
                0{i + 1}
              </div>

              {/* Category name */}
              <h3 className="font-display font-semibold text-[#111111] text-xl tracking-tight mb-4">
                {cap.category}
              </h3>

              {/* Description */}
              <p className="font-body text-[#8A8A86] text-sm leading-relaxed mb-6">
                {cap.description}
              </p>

              {/* Item list */}
              <ul className="space-y-2 border-t border-[#111111]/10 pt-6">
                {cap.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 font-body text-sm text-[#111111]/60"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#111111]/30 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Arrow — visible on hover */}
              <div className="mt-6 text-[#8A8A86]/40 group-hover:text-[#111111]/40 group-hover:translate-x-1 transition-all duration-200 text-sm">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
