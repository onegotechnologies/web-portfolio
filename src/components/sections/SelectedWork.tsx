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
  },
];

export const SelectedWork: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section
      id="work"
      ref={ref}
      className="bg-[#061536] py-28 lg:py-36 text-white"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className={`mb-16 lg:mb-20 reveal ${isInView ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-[#1264FF]" />
            <span className="font-display text-xs font-semibold text-[#D9E1EC] tracking-[0.2em] uppercase">
              Selected Work
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              className="font-display font-bold text-white tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)' }}
            >
              Projects built for
              <br />
              <span className="text-[#1D6BFF]">real operations.</span>
            </h2>
            <p className="font-body text-[#D9E1EC] text-base lg:text-lg leading-relaxed max-w-md">
              We build software designed for production — engineered for long-term operational resilience, high concurrency, and real enterprise scale.
            </p>
          </div>
        </div>

        {/* Project list */}
        <div className="space-y-8">
          {projects.map((proj, i) => (
            <div
              key={proj.index}
              className={`group bg-white/[0.015] border border-white/[0.08] hover:border-[#1264FF]/40 hover:bg-white/[0.03] p-8 lg:p-10 transition-all duration-300 reveal ${
                isInView ? 'visible' : ''
              } reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Index + industry (col-span-2) */}
                <div className="lg:col-span-2">
                  <span className="font-display text-base font-bold text-[#1264FF] tracking-[0.2em] mb-3 block">
                    {proj.index}
                  </span>
                  <span className="inline-block font-display text-xs font-semibold text-[#1264FF] bg-[#1264FF]/10 border border-[#1264FF]/30 px-3 py-1.5 tracking-wider uppercase">
                    {proj.industry}
                  </span>
                </div>

                {/* Main content (col-span-7) */}
                <div className="lg:col-span-7">
                  <h3 className="font-display font-bold text-white text-2xl lg:text-3xl tracking-tight mb-5 group-hover:text-[#1D6BFF] transition-colors">
                    {proj.type}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-black/20 border border-white/[0.05] p-5">
                      <span className="text-[#1D6BFF] font-display text-xs font-bold tracking-wider uppercase block mb-1.5">
                        Operational Challenge
                      </span>
                      <p className="font-body text-[#D9E1EC] text-sm leading-relaxed">
                        {proj.problem}
                      </p>
                    </div>
                    <div className="bg-black/20 border border-white/[0.05] p-5">
                      <span className="text-[#1D6BFF] font-display text-xs font-bold tracking-wider uppercase block mb-1.5">
                        Delivered Architecture
                      </span>
                      <p className="font-body text-[#D9E1EC] text-sm leading-relaxed">
                        {proj.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech stack & Action (col-span-3) */}
                <div className="lg:col-span-3 flex flex-col justify-between h-full pt-1">
                  <div>
                    <span className="font-display text-xs text-[#D9E1EC]/70 tracking-[0.15em] uppercase mb-3.5 block font-semibold">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="font-display text-xs text-[#D9E1EC] bg-white/[0.04] border border-white/[0.1] px-3 py-1.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="font-display text-xs text-[#D9E1EC]/60 uppercase tracking-widest font-medium">
                      Enterprise Tier
                    </span>
                    <span className="text-[#1264FF] text-xl font-bold group-hover:translate-x-2 transition-transform duration-200">
                      →
                    </span>
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

