import React from 'react';
import { useInView } from '../../hooks/useInView';
import { GeometricCanvas } from '../ui/GeometricCanvas';

export const BuiltForComplexity: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} id="complexity" className="relative bg-[#050505] py-28 lg:py-40 overflow-hidden">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <GeometricCanvas />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className={`reveal ${isInView ? 'visible' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C]" />
              <span className="font-display text-xs font-medium text-[#8A8A86] tracking-[0.2em] uppercase">
                Built For Complexity
              </span>
            </div>
            
            <h2 className="font-display font-bold text-white tracking-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: '1.1' }}>
              We don't start with technology.<br />
              <span className="text-[#8A8A86]">We start with the problem.</span>
            </h2>
            
            <p className="font-body text-[#8A8A86] text-lg leading-relaxed max-w-lg mb-12">
              From complex healthcare workflows to connected transportation systems, OneGo combines software engineering, automation, AI, integrations and infrastructure to turn operational complexity into systems that work.
            </p>

            <div className="flex flex-col gap-6 font-display text-sm tracking-[0.1em] text-white/80">
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-[#B7FF3C]" />
                Healthcare
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-[#B7FF3C]" />
                Real Estate
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-[#B7FF3C]" />
                Transportation
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-[#B7FF3C]" />
                Automation & AI
              </div>
            </div>
          </div>

          {/* Visual Concept */}
          <div className={`relative h-[500px] lg:h-[600px] w-full flex items-center justify-center reveal ${isInView ? 'visible' : ''} reveal-delay-2`}>
            <div className="absolute inset-0 border border-white/[0.04] bg-white/[0.01]" />
            
            {/* Diagram representation */}
            <div className="relative w-full max-w-md h-full flex flex-col justify-between py-12 px-8">
              
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 border border-white/20 mb-3" />
                  <span className="font-display text-[10px] text-white/40 tracking-widest uppercase">Nodes</span>
                </div>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mx-4" />
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 border border-white/20 mb-3 rotate-45" />
                  <span className="font-display text-[10px] text-white/40 tracking-widest uppercase">Grid</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-8 relative z-10">
                <div className="px-6 py-3 border border-white/10 bg-[#0A0A0A] text-white/80 font-display text-xs tracking-[0.15em] uppercase w-full text-center">
                  Complex Problems
                </div>
                
                <div className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent relative">
                  <div className="absolute -left-1 bottom-0 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-white/20" />
                </div>
                
                <div className="px-6 py-3 border border-white/10 bg-[#0A0A0A] text-white/80 font-display text-xs tracking-[0.15em] uppercase w-full text-center">
                  Connected Systems
                </div>
                
                <div className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-[#B7FF3C]/50 relative">
                  <div className="absolute -left-1 bottom-0 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#B7FF3C]/50" />
                </div>
                
                <div className="flex gap-4 w-full">
                  <div className="px-4 py-3 border border-[#B7FF3C]/30 bg-[#B7FF3C]/5 text-[#B7FF3C] font-display text-[10px] tracking-[0.15em] uppercase flex-1 text-center">
                    Automation
                  </div>
                  <div className="px-4 py-3 border border-[#B7FF3C]/30 bg-[#B7FF3C]/5 text-[#B7FF3C] font-display text-[10px] tracking-[0.15em] uppercase flex-1 text-center">
                    Intelligence
                  </div>
                </div>
                
                <div className="w-[1px] h-8 bg-gradient-to-b from-[#B7FF3C]/50 to-white/20 relative">
                  <div className="absolute -left-1 bottom-0 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-white/20" />
                </div>

                <div className="px-6 py-3 border border-white/10 bg-[#0A0A0A] text-white/80 font-display text-xs tracking-[0.15em] uppercase w-full text-center">
                  Better Operations
                </div>
              </div>
              
              <div className="flex justify-between items-center w-full mt-auto pt-12">
                <div className="w-1.5 h-1.5 bg-[#B7FF3C]" />
                <div className="flex-1 h-[1px] border-t border-dashed border-white/10 mx-4" />
                <div className="font-display text-[10px] text-white/40 tracking-widest uppercase">Scalable Technology</div>
              </div>
              
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};
