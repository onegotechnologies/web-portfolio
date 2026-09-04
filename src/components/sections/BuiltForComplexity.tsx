import React from 'react';
import { useInView } from '../../hooks/useInView';
import { GeometricCanvas } from '../ui/GeometricCanvas';

export const BuiltForComplexity: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} id="complexity" className="relative bg-[#061536] py-28 lg:py-36 overflow-hidden border-b border-[#1B2B50] text-white">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <GeometricCanvas />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className={`reveal ${isInView ? 'visible' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-[#1264FF]" />
              <span className="font-display text-xs font-semibold text-[#D9E1EC] tracking-[0.2em] uppercase">
                Built For Complexity
              </span>
            </div>
            
            <h2 className="font-display font-bold text-white tracking-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: '1.1' }}>
              We don't start with technology.<br />
              <span className="text-[#1D6BFF]">We start with the problem.</span>
            </h2>
            
            <p className="font-body text-[#D9E1EC] text-base lg:text-lg leading-relaxed max-w-lg mb-12">
              From complex healthcare workflows to connected transportation systems, OneGo combines software engineering, automation, AI, integrations and infrastructure to turn operational complexity into systems that work.
            </p>

            <div className="grid grid-cols-2 gap-4 font-display text-xs tracking-[0.15em] text-[#D9E1EC]">
              <div className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/[0.08]">
                <span className="w-2 h-2 bg-[#1264FF]" />
                Healthcare
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/[0.08]">
                <span className="w-2 h-2 bg-[#1264FF]" />
                Real Estate
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/[0.08]">
                <span className="w-2 h-2 bg-[#1264FF]" />
                Transportation
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/[0.08]">
                <span className="w-2 h-2 bg-[#1264FF]" />
                Automation &amp; AI
              </div>
            </div>
          </div>

          {/* Visual System Architecture Concept */}
          <div className={`relative w-full flex items-center justify-center reveal ${isInView ? 'visible' : ''} reveal-delay-2`}>
            <div className="w-full max-w-lg bg-[#030B1C] border border-[#1B2B50] p-8 md:p-10 shadow-xl relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#1264FF]/10 pointer-events-none" />

              <div className="flex justify-between items-center w-full mb-8 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#1264FF]" />
                  <span className="font-display text-xs text-[#D9E1EC] tracking-widest uppercase font-semibold">Operational Engine</span>
                </div>
                <span className="font-display text-[11px] text-[#1264FF] tracking-widest uppercase">SYS // ARCH</span>
              </div>

              {/* Connected node blocks */}
              <div className="flex flex-col items-center gap-3 relative z-10">
                
                {/* 01: Complex Problems */}
                <div className="w-full p-3.5 bg-white/[0.04] border border-white/[0.12] text-white font-display text-xs tracking-[0.15em] uppercase text-center flex items-center justify-between">
                  <span className="text-[#1264FF] font-bold">01</span>
                  <span>Complex Problems</span>
                  <span className="w-1.5 h-1.5 bg-[#1264FF]" />
                </div>
                
                {/* Connector */}
                <div className="h-4 w-px bg-[#1264FF]/60 relative flex items-center justify-center">
                  <span className="text-[10px] text-[#1264FF]">↓</span>
                </div>
                
                {/* 02: Connected Systems */}
                <div className="w-full p-3.5 bg-white/[0.04] border border-white/[0.12] text-white font-display text-xs tracking-[0.15em] uppercase text-center flex items-center justify-between">
                  <span className="text-[#1264FF] font-bold">02</span>
                  <span>Connected Systems</span>
                  <span className="w-1.5 h-1.5 bg-[#1264FF]" />
                </div>
                
                {/* Connector */}
                <div className="h-4 w-px bg-[#1264FF]/60 relative flex items-center justify-center">
                  <span className="text-[10px] text-[#1264FF]">↓</span>
                </div>
                
                {/* 03 & 04: Automation & Intelligence */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  <div className="p-3 bg-[#1264FF]/10 border border-[#1264FF]/40 text-white font-display text-xs tracking-[0.15em] uppercase text-center">
                    <span className="block text-[#1264FF] text-[10px] mb-0.5">03</span>
                    Automation
                  </div>
                  <div className="p-3 bg-[#1264FF]/10 border border-[#1264FF]/40 text-white font-display text-xs tracking-[0.15em] uppercase text-center">
                    <span className="block text-[#1264FF] text-[10px] mb-0.5">04</span>
                    Intelligence
                  </div>
                </div>
                
                {/* Connector */}
                <div className="h-4 w-px bg-[#1264FF]/60 relative flex items-center justify-center">
                  <span className="text-[10px] text-[#1264FF]">↓</span>
                </div>

                {/* 05: Scalable Technology */}
                <div className="w-full p-3.5 bg-white/[0.04] border border-white/[0.12] text-white font-display text-xs tracking-[0.15em] uppercase text-center flex items-center justify-between">
                  <span className="text-[#1264FF] font-bold">05</span>
                  <span>Scalable Technology</span>
                  <span className="w-1.5 h-1.5 bg-[#1264FF]" />
                </div>

                {/* Connector */}
                <div className="h-4 w-px bg-[#1264FF]/60 relative flex items-center justify-center">
                  <span className="text-[10px] text-[#1264FF]">↓</span>
                </div>

                {/* 06: Better Operations */}
                <div className="w-full p-4 bg-[#1264FF] text-white font-display text-xs tracking-[0.18em] uppercase text-center font-bold shadow-md flex items-center justify-between">
                  <span className="text-white/80">06</span>
                  <span>Better Operations</span>
                  <span className="text-white text-sm">✓</span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.08] flex justify-between items-center text-[11px] font-display text-[#D9E1EC]/60">
                <span>Integrated Engineering</span>
                <span className="text-[#1264FF]">Proven Execution</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

