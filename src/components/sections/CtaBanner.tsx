import React, { useState } from 'react';
import { useInView } from '../../hooks/useInView';

export const CtaBanner: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    interest: 'Software Engineering',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          'bot-field': '',
          ...formData,
        }).toString(),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        interest: 'Software Engineering',
        message: '',
      });
    } catch {
      setSubmitError(
        'We could not send your inquiry. Please try again or email info@onegotechnologies.com.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-[#F7F9FC] py-24 lg:py-36 border-t border-[#D9E1EC] scroll-mt-20 lg:scroll-mt-24"
    >
      <div className={`max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16 reveal ${isInView ? 'visible' : ''}`}>
        <div className="bg-[#061536] border border-[#1B2B50] shadow-xl overflow-hidden grid lg:grid-cols-12">
          
          {/* LEFT SIDE: Deep Navy Brand Message & Geometry */}
          <div className="lg:col-span-5 p-10 md:p-14 lg:p-16 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[#1B2B50]">
            {/* Subtle geometric line pattern in background */}
            <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden>
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="contactGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#contactGrid)" />
                <line x1="0" y1="80" x2="300" y2="80" stroke="#1264FF" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="80" y1="0" x2="80" y2="300" stroke="#1264FF" strokeWidth="0.5" />
                <rect x="180" y="160" width="80" height="80" fill="none" stroke="rgba(18,100,255,0.4)" strokeWidth="1" />
                <rect x="200" y="180" width="40" height="40" fill="rgba(18,100,255,0.1)" />
                <circle cx="80" cy="80" r="3" fill="#1264FF" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 bg-[#1264FF]" />
                <span className="font-display text-xs font-semibold text-[#D9E1EC] tracking-[0.2em] uppercase">
                  Direct Inquiries
                </span>
              </div>

              <h2
                className="font-display font-bold text-white tracking-tight leading-[1.08] mb-6"
                style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.5rem)' }}
              >
                Have a complex problem <br />
                <span className="text-[#1D6BFF]">worth solving?</span>
              </h2>

              <p className="font-body text-[#D9E1EC] text-base lg:text-lg leading-relaxed max-w-md">
                Tell us what you're building, improving or automating. We'll start with the problem and work toward the right technology.
              </p>
            </div>

            <div className="relative z-10 mt-14 pt-8 border-t border-[#1B2B50]">
              <p className="font-display text-[11px] text-[#D9E1EC]/60 uppercase tracking-widest mb-3">
                Focus Areas
              </p>
              <p className="font-display text-xs md:text-sm text-white/90 tracking-wide font-medium">
                Healthcare · Real Estate · Transportation · Automation &amp; AI
              </p>
              
              <div className="mt-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1264FF]" />
                <span className="font-display text-xs text-[#D9E1EC]/80 font-medium">hello@onego.tech</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Clean Premium Form on White */}
          <div className="lg:col-span-7 bg-white p-10 md:p-14 lg:p-16">
            {submitted ? (
              <div
                className="h-full flex flex-col justify-center items-center text-center py-12"
                role="status"
                aria-live="polite"
              >
                <div className="w-12 h-12 bg-[#1264FF]/10 text-[#1264FF] flex items-center justify-center text-2xl font-bold mb-4 border border-[#1264FF]/20">
                  ✓
                </div>
                <h3 className="font-display font-bold text-2xl text-[#101828] mb-2">
                  Conversation Started
                </h3>
                <p className="font-body text-[#5B667A] text-sm max-w-sm mb-8 leading-relaxed">
                  Thank you for reaching out. An engineering lead from OneGo will review your problem and respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-display text-xs text-[#1264FF] hover:underline uppercase tracking-wider font-semibold"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden" aria-hidden="true">
                  <label htmlFor="bot-field">
                    Do not fill this out if you are human
                    <input id="bot-field" name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block font-display text-xs font-semibold text-[#101828] mb-2">
                      First Name <span className="text-[#1264FF]">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Jane"
                      className="w-full px-3.5 py-2.5 bg-[#F7F9FC] border border-[#D9E1EC] text-[#101828] placeholder-[#5B667A]/50 text-sm focus:outline-none focus:border-[#1264FF] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block font-display text-xs font-semibold text-[#101828] mb-2">
                      Last Name <span className="text-[#1264FF]">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Doe"
                      className="w-full px-3.5 py-2.5 bg-[#F7F9FC] border border-[#D9E1EC] text-[#101828] placeholder-[#5B667A]/50 text-sm focus:outline-none focus:border-[#1264FF] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block font-display text-xs font-semibold text-[#101828] mb-2">
                      Business Email <span className="text-[#1264FF]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 bg-[#F7F9FC] border border-[#D9E1EC] text-[#101828] placeholder-[#5B667A]/50 text-sm focus:outline-none focus:border-[#1264FF] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-display text-xs font-semibold text-[#101828] mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 bg-[#F7F9FC] border border-[#D9E1EC] text-[#101828] placeholder-[#5B667A]/50 text-sm focus:outline-none focus:border-[#1264FF] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block font-display text-xs font-semibold text-[#101828] mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Organization or Venture"
                      className="w-full px-3.5 py-2.5 bg-[#F7F9FC] border border-[#D9E1EC] text-[#101828] placeholder-[#5B667A]/50 text-sm focus:outline-none focus:border-[#1264FF] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block font-display text-xs font-semibold text-[#101828] mb-2">
                      What are you interested in?
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F7F9FC] border border-[#D9E1EC] text-[#101828] text-sm focus:outline-none focus:border-[#1264FF] focus:bg-white transition-colors"
                    >
                      <option value="Healthcare">Healthcare</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Transportation">Transportation</option>
                      <option value="Automation & AI">Automation &amp; AI</option>
                      <option value="Software Engineering">Software Engineering</option>
                      <option value="AI / Intelligent Systems">AI / Intelligent Systems</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-display text-xs font-semibold text-[#101828] mb-2">
                    Tell us about your project / challenge <span className="text-[#1264FF]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the operational challenge, system requirements, or technology you're looking to build..."
                    className="w-full px-3.5 py-2.5 bg-[#F7F9FC] border border-[#D9E1EC] text-[#101828] placeholder-[#5B667A]/50 text-sm focus:outline-none focus:border-[#1264FF] focus:bg-white transition-colors resize-y"
                  />
                </div>

                {submitError && (
                  <p
                    id="contact-form-error"
                    className="font-body text-sm text-red-700"
                    role="alert"
                  >
                    {submitError}
                  </p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1264FF] text-white hover:bg-[#1D6BFF] active:bg-[#0E52D6] font-display font-semibold text-sm tracking-wide transition-colors duration-200 cursor-pointer disabled:opacity-70"
                  >
                    <span>{submitting ? 'Submitting...' : 'Start a Conversation'}</span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
