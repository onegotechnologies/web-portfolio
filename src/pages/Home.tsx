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
      <Hero />
      <Industries />
      <HowWeEngineer />
      <EngineeringStack />
      <BuiltForComplexity />
      
      {/* Explore Projects CTA Section */}
      <section className="bg-[#0A0A0A] py-20 border-t border-white/[0.08] flex justify-center">
        <Link 
          to="/projects" 
          className="group flex items-center gap-4 px-8 py-5 border border-white/20 bg-white/5 hover:bg-white/10 transition-colors duration-300 font-display text-white tracking-wide"
        >
          Explore Projects
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </section>

      <Process />
      <About />
      <CtaBanner />
    </>
  );
};
