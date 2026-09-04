import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { Industries } from '../components/sections/Industries';
import { HowWeEngineer } from '../components/sections/HowWeEngineer';
import { EngineeringStack } from '../components/sections/EngineeringStack';
import { BuiltForComplexity } from '../components/sections/BuiltForComplexity';
import { Process } from '../components/sections/Process';
import { About } from '../components/sections/About';
import { CtaBanner } from '../components/sections/CtaBanner';

export const Home: React.FC = () => {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Industries */}
      <Industries />

      {/* 3. How We Engineer */}
      <HowWeEngineer />

      {/* 4. Engineering Stack */}
      <EngineeringStack />

      {/* 5. Built For Complexity */}
      <BuiltForComplexity />

      {/* 6. How We Work (Process) */}
      <Process />

      {/* 7. About / Company Positioning */}
      <About />

      {/* 8. Dedicated Explore Projects CTA Section */}
      <section className="bg-[#030B1C] py-20 lg:py-28 border-b border-[#1B2B50] relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-white/[0.02] border border-[#1B2B50] p-8 md:p-12">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2 h-2 bg-[#1264FF]" />
                <span className="font-display text-xs font-semibold text-[#D9E1EC] tracking-[0.2em] uppercase">
                  Project Portfolio
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
                Software engineered for production operations.
              </h3>
              <p className="font-body text-[#D9E1EC]/70 text-sm md:text-base mt-2 max-w-xl">
                Explore our dedicated portfolio of platforms, applications, and system implementations across core industries.
              </p>
            </div>

            <Link
              to="/projects"
              className="group shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-[#1264FF] text-white hover:bg-[#1D6BFF] font-display font-semibold text-sm tracking-wide transition-colors duration-200"
            >
              <span>Explore Projects</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Final Contact CTA Section */}
      <CtaBanner />
    </>
  );
};

