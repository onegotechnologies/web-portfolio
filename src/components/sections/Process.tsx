import React from 'react';
import { useInView } from '../../hooks/useInView';

const steps = [
  {
    num: '01',
    title: 'Understand',
    body: 'We learn the business, the users, and the operational challenges before writing a line of code. Technology decisions made without this understanding are expensive.',
  },
  {
    num: '02',
    title: 'Design',
    body: 'Business requirements become clear system architecture and user experiences. Every design decision traces back to a real operational need.',
  },
  {
    num: '03',
    title: 'Build',
    body: 'We engineer software for maintainability and scale. Clean code, appropriate architecture, proper testing. Technology that can grow with the business.',
  },
  {
    num: '04',
    title: 'Improve',
    body: 'Launched software is the beginning of a product — not the end of a project. We measure, iterate, and continuously improve based on how the system performs in the real world.',
  },
];

export const Process: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-[#050505] py-28 lg:py-40">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className={`mb-16 lg:mb-20 reveal ${isInView ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C]" />
            <span className="font-display text-xs font-medium text-[#8A8A86] tracking-[0.2em] uppercase">
              How we work
            </span>
          </div>
          <h2
            className="font-display font-bold text-white tracking-tight max-w-2xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            A repeatable process.
            <br />
            <span className="text-[#8A8A86]">Not a repeatable outcome.</span>
          </h2>
        </div>

        {/* Steps — horizontal on desktop, stacked on mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-white/[0.08]">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`pt-10 pb-8 pr-8 border-b border-white/[0.08] lg:border-b-0 lg:border-r last:border-r-0 lg:last:border-r-0 reveal ${isInView ? 'visible' : ''} reveal-delay-${i + 1}`}
            >
              {/* Number + connecting line */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-xs font-medium text-[#B7FF3C] tracking-[0.15em]">
                  {step.num}
                </span>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px bg-white/[0.1]" />
                )}
              </div>

              <h3 className="font-display font-semibold text-white text-xl tracking-tight mb-4">
                {step.title}
              </h3>
              <p className="font-body text-[#8A8A86] text-sm leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
