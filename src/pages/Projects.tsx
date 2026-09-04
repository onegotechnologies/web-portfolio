import React from 'react';
import { SelectedWork } from '../components/sections/SelectedWork';
import { CtaBanner } from '../components/sections/CtaBanner';

export const Projects: React.FC = () => {
  return (
    <div className="pt-20 bg-[#061536]">
      {/* Projects Page Hero Banner */}
      <section className="py-20 lg:py-24 border-b border-[#1B2B50] bg-[#030B1C]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-[#1264FF]" />
            <span className="font-display text-xs font-semibold text-[#D9E1EC] tracking-[0.2em] uppercase">
              Production Portfolio
            </span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Engineering Portfolio &amp; <br />
            <span className="text-[#1D6BFF]">Operational Systems.</span>
          </h1>
          <p className="font-body text-[#D9E1EC] text-base lg:text-lg max-w-2xl leading-relaxed">
            A selection of platforms and software architectures built for enterprise reliability, clinical operations, fleet logistics, and automated workflows.
          </p>
        </div>
      </section>

      {/* Selected Work Portfolio */}
      <SelectedWork />

      {/* Dedicated Inquiries CTA */}
      <CtaBanner />
    </div>
  );
};

