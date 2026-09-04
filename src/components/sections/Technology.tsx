import React from 'react';
import { useInView } from '../../hooks/useInView';

const techStack = [
  { name: 'Go', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'PostgreSQL', category: 'Data' },
  { name: 'MongoDB', category: 'Data' },
  { name: 'Docker', category: 'Infrastructure' },
  { name: 'Kubernetes', category: 'Infrastructure' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'REST / GraphQL', category: 'APIs' },
];

export const Technology: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="bg-[#F4F3EF] py-24 lg:py-32 border-t border-[#111111]/10"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Label */}
          <div className={`lg:col-span-4 reveal ${isInView ? 'visible' : ''}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#050505]" />
              <span className="font-display text-xs font-medium text-[#8A8A86] tracking-[0.2em] uppercase">
                Engineering stack
              </span>
            </div>
            <p className="font-body text-[#8A8A86] text-sm leading-relaxed max-w-xs">
              We choose technology based on the problem, not trends. These are the tools
              we work with daily.
            </p>
          </div>

          {/* Tech tags */}
          <div
            className={`lg:col-span-8 flex flex-wrap gap-3 reveal ${isInView ? 'visible' : ''} reveal-delay-2`}
          >
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-2 bg-white border border-[#111111]/10 px-4 py-2.5 hover:border-[#111111]/30 transition-colors duration-150 cursor-default"
              >
                <span className="font-display text-sm font-medium text-[#111111]">
                  {tech.name}
                </span>
                <span className="font-display text-[10px] text-[#8A8A86]/60 tracking-wide border-l border-[#111111]/10 pl-2">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
