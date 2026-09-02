import React from 'react';
import { useInView } from '../../hooks/useInView';

const projects = [
  {
    index: '01',
    industry: 'Healthcare',
    type: 'Digital Operations Platform',
    problem:
      'A healthcare organization needed to consolidate disconnected workflows into a single operational system accessible across multiple facilities.',
    solution:
      'A unified digital platform connecting patient management, staff workflows, and operational reporting.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    status: 'placeholder',
  },
  {
    index: '02',
    industry: 'Real Estate',
    type: 'Property Management Platform',
    problem:
      'A property group required a centralized system to manage listings, tenant interactions, and maintenance across their portfolio.',
    solution:
      'An end-to-end property management system with customer-facing interfaces and internal operations dashboards.',
    tech: ['Next.js', 'Go', 'PostgreSQL', 'AWS'],
    status: 'placeholder',
  },
  {
    index: '03',
    industry: 'Transportation',
    type: 'Fleet Operations System',
    problem:
      'A logistics company lacked real-time visibility into their fleet, causing operational delays and reporting gaps.',
    solution:
      'A real-time fleet tracking and operations management platform with driver apps and management dashboards.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Kubernetes'],
    status: 'placeholder',
  },
  {
    index: '04',
    industry: 'Automation & AI',
    type: 'Intelligent Workflow Platform',
    problem:
      'A professional services firm spent significant time on repeatable document processing and approval workflows.',
    solution:
      'An intelligent automation system with ML-powered document extraction and workflow routing.',
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    status: 'placeholder',
  },
];

export const SelectedWork: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section
      id="work"
      ref={ref}
      className="bg-[#0A0A0A] py-28 lg:py-40"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className={`mb-16 lg:mb-20 reveal ${isInView ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C]" />
            <span className="font-display text-xs font-medium text-[#8A8A86] tracking-[0.2em] uppercase">
              Selected work
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              className="font-display font-bold text-white tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Projects built for
              <br />
              real operations.
            </h2>
            <p className="font-body text-[#8A8A86] text-base leading-relaxed max-w-sm">
              We build software that runs in production — not prototypes. Each engagement
              is a long-term commitment to the client's operational success.
            </p>
          </div>
        </div>

        {/* Project grid */}
        <div className="space-y-0 border-t border-white/[0.08]">
          {projects.map((proj, i) => (
            <div
              key={proj.index}
              className={`group border-b border-white/[0.08] py-10 lg:py-14 reveal ${isInView ? 'visible' : ''} reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="grid lg:grid-cols-[120px,1fr,300px] gap-8 lg:gap-16 items-start">
                {/* Index + industry */}
                <div>
                  <div className="font-display text-xs text-[#8A8A86]/50 tracking-[0.2em] mb-3">
                    {proj.index}
                  </div>
                  <span className="inline-block font-display text-xs font-medium text-[#B7FF3C] bg-[#B7FF3C]/10 border border-[#B7FF3C]/20 px-2.5 py-1 tracking-wide">
                    {proj.industry}
                  </span>
                </div>

                {/* Main content */}
                <div>
                  <h3 className="font-display font-semibold text-white text-xl lg:text-2xl tracking-tight mb-4 group-hover:text-white/90 transition-colors">
                    {proj.type}
                  </h3>
                  <p className="font-body text-[#8A8A86] text-sm leading-relaxed mb-4 max-w-lg">
                    <strong className="text-white/60 font-display text-xs tracking-wide uppercase mr-2">Problem:</strong>
                    {proj.problem}
                  </p>
                  <p className="font-body text-[#8A8A86] text-sm leading-relaxed max-w-lg">
                    <strong className="text-white/60 font-display text-xs tracking-wide uppercase mr-2">Solution:</strong>
                    {proj.solution}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-col justify-between h-full gap-6">
                  <div>
                    <p className="font-display text-xs text-[#8A8A86]/50 tracking-[0.15em] uppercase mb-3">
                      Technology
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="font-display text-xs text-white/50 bg-white/[0.04] border border-white/[0.08] px-2.5 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-[#8A8A86]/30 group-hover:text-[#8A8A86]/60 group-hover:translate-x-1 transition-all duration-200 text-sm font-display">
                    →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
