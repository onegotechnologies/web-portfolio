import React from 'react';
import { useInView } from '../../hooks/useInView';

const capabilities = [
  {
    number: '01',
    title: 'Product Engineering',
    items: ['Web platforms', 'SaaS products', 'Mobile applications', 'Digital products', 'APIs']
  },
  {
    number: '02',
    title: 'Intelligent Systems',
    items: ['Artificial Intelligence', 'LLM applications', 'AI agents', 'Machine learning', 'Intelligent automation']
  },
  {
    number: '03',
    title: 'Cloud & Infrastructure',
    items: ['Cloud architecture', 'Docker', 'Kubernetes', 'CI/CD', 'Scalable infrastructure', 'Cloud-native systems']
  },
  {
    number: '04',
    title: 'Data & Integration',
    items: ['Database systems', 'API integrations', 'Event-driven architecture', 'Data pipelines', 'Enterprise integrations']
  }
];

export const HowWeEngineer: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section ref={ref} id="engineering" className="bg-[#050505] py-28 lg:py-40">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        <div className={`mb-16 lg:mb-24 reveal ${isInView ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C]" />
            <span className="font-display text-xs font-medium text-[#8A8A86] tracking-[0.2em] uppercase">
              How We Engineer
            </span>
          </div>
          <h2 className="font-display font-bold text-white tracking-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            Engineering philosophy.<br />Not just code.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-16 border-t border-white/[0.08] pt-16">
          {capabilities.map((cap, i) => (
            <div key={cap.number} className={`group relative reveal ${isInView ? 'visible' : ''} reveal-delay-${Math.min(i + 1, 4)}`}>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-display text-2xl lg:text-3xl text-[#B7FF3C] font-light group-hover:-translate-y-1 transition-transform duration-300">
                  {cap.number}
                </span>
                <h3 className="font-display text-2xl lg:text-3xl text-white font-medium tracking-tight">
                  {cap.title}
                </h3>
              </div>
              <ul className="space-y-4 pl-[3.5rem] lg:pl-[4.5rem]">
                {cap.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-[#8A8A86] group-hover:text-white/80 transition-colors duration-300 font-body">
                    <span className="w-4 h-[1px] bg-white/10 group-hover:bg-[#B7FF3C]/50 transition-colors duration-300" />
                    {item}
                  </li>
                ))}
              </ul>
              {/* Subtle geometric indicator */}
              <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#B7FF3C] rotate-45 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
