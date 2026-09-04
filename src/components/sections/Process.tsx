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
    <section ref={ref} id="process" className="bg-[#F7F9FC] py-28 lg:py-36 border-b border-[#D9E1EC] scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className={`mb-16 lg:mb-20 reveal ${isInView ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-[#1264FF]" />
            <span className="font-display text-xs font-semibold text-[#5B667A] tracking-[0.2em] uppercase">
              How We Work
            </span>
          </div>
          <h2
            className="font-display font-bold text-[#101828] tracking-tight max-w-2xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            A repeatable process.
            <br />
            <span className="text-[#5B667A]">Not a repeatable outcome.</span>
          </h2>
        </div>

        {/* Steps — horizontal on desktop, stacked on mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-[#D9E1EC]">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`px-6 sm:px-8 lg:px-10 py-12 lg:py-16 border-b border-[#D9E1EC] lg:border-b-0 lg:border-r border-[#D9E1EC] last:border-r-0 transition-colors duration-200 hover:bg-white/60 reveal ${
                isInView ? 'visible' : ''
              } reveal-delay-${i + 1}`}
            >
              {/* Step indicator with generous breathing space */}
              <div className="flex items-center gap-3 mb-8">
                <span className="font-display text-sm font-bold text-[#1264FF] tracking-[0.2em] uppercase">
                  Phase {step.num}
                </span>
                <span className="w-1.5 h-1.5 bg-[#1264FF]" />
              </div>

              <h3 className="font-display font-bold text-[#101828] text-2xl tracking-tight mb-5">
                {step.title}
              </h3>
              <p className="font-body text-[#5B667A] text-sm leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

