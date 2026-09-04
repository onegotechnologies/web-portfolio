import React from 'react';
import { useInView } from '../../hooks/useInView';

const capabilities = [
  {
    number: '01',
    title: 'Product Engineering',
    items: ['Web platforms', 'SaaS products', 'Mobile applications', 'Digital products', 'APIs'],
  },
  {
    number: '02',
    title: 'Intelligent Systems',
    items: ['Artificial Intelligence', 'LLM applications', 'AI agents', 'Machine learning', 'Intelligent automation'],
  },
  {
    number: '03',
    title: 'Cloud & Infrastructure',
    items: ['Cloud architecture', 'Docker', 'Kubernetes', 'CI/CD', 'Cloud-native systems', 'Scalable infrastructure'],
  },
  {
    number: '04',
    title: 'Data & Integration',
    items: ['Database systems', 'API integrations', 'Event-driven architecture', 'Data pipelines', 'Enterprise integrations'],
  },
];

export const HowWeEngineer: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section ref={ref} id="engineering" className="bg-[#061536] py-28 lg:py-36 border-b border-[#1B2B50] text-white scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        <div className={`mb-16 lg:mb-24 reveal ${isInView ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-[#1264FF]" />
            <span className="font-display text-xs font-semibold text-[#D9E1EC] tracking-[0.2em] uppercase">
              How We Engineer
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="font-display font-bold text-white tracking-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Engineering philosophy.<br />
              <span className="text-[#1D6BFF]">Built for scale.</span>
            </h2>
            <p className="font-body text-[#D9E1EC] text-base lg:text-lg leading-relaxed max-w-xl">
              We build technology designed for enterprise resilience, operational longevity, and seamless integration with existing organizational ecosystems.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-y-16 gap-x-12 lg:gap-x-20 border-t border-[#1B2B50] pt-16">
          {capabilities.map((cap, i) => (
            <div key={cap.number} className={`group relative reveal ${isInView ? 'visible' : ''} reveal-delay-${Math.min(i + 1, 4)}`}>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-display text-3xl lg:text-4xl text-[#1264FF] font-light group-hover:translate-x-1 transition-transform duration-300">
                  {cap.number}
                </span>
                <h3 className="font-display text-2xl lg:text-3xl text-white font-bold tracking-tight">
                  {cap.title}
                </h3>
              </div>
              <ul className="space-y-3.5 pl-[3.5rem] lg:pl-[4rem]">
                {cap.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-[#D9E1EC] group-hover:text-white transition-colors duration-200 font-body text-base">
                    <span className="w-3 h-0.5 bg-[#1264FF] group-hover:w-5 transition-all duration-300" />
                    {item}
                  </li>
                ))}
              </ul>
              {/* Directional motion indicator */}
              <div className="absolute top-0 right-0 text-[#1264FF] text-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

