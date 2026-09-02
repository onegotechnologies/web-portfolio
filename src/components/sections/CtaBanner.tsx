import React from 'react';
import { useInView } from '../../hooks/useInView';
import { Button } from '../ui/Button';

export const CtaBanner: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-[#0A0A0A] py-28 lg:py-40 border-t border-white/[0.06]"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Headline */}
          <div className={`reveal ${isInView ? 'visible' : ''}`}>
            <h2
              className="font-display font-bold text-white tracking-tight leading-[1.05]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              Have a problem
              <br />
              <span className="text-[#B7FF3C]">worth solving?</span>
            </h2>
          </div>

          {/* Copy + CTA */}
          <div className={`reveal ${isInView ? 'visible' : ''} reveal-delay-2`}>
            <p className="font-body text-[#8A8A86] text-lg leading-relaxed mb-10 max-w-md">
              Let's turn the challenge into a system that works. Tell us what you're
              building — or what's broken — and we'll tell you how we'd approach it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" href="mailto:hello@onego.tech">
                Start a conversation
              </Button>
              <Button variant="ghost" size="lg" href="#industries">
                Explore our work
              </Button>
            </div>

            {/* Contact detail placeholder */}
            <p className="font-display text-xs text-[#8A8A86]/50 tracking-wide mt-8">
              hello@onego.tech
            </p>
          </div>
        </div>

        {/* Geometric bottom mark */}
        <div className="mt-24 pt-12 border-t border-white/[0.06] flex items-center gap-3" aria-hidden>
          <div className="w-6 h-6 border border-white/10" />
          <div className="w-4 h-4 bg-[#B7FF3C]/20 border border-[#B7FF3C]/30" />
          <div className="text-[#B7FF3C]/50 text-xs">→</div>
          <div className="h-px flex-1 bg-white/[0.05]" />
        </div>
      </div>
    </section>
  );
};
