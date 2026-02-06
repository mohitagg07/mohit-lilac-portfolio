'use client';

import { siteContent } from '@/content/siteContent';
import FadeInSection from './FadeInSection';

export default function CTASection() {
  const { cta } = siteContent;

  return (
    <section id="contact" className="section bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <FadeInSection delay={0.2}>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            {cta.heading}
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            {cta.text}
          </p>
        </FadeInSection>

        {/* CTA Buttons */}
        <FadeInSection delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="px-8 py-4 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors shadow-medium">
              {cta.buttonPrimary}
            </button>
            <button className="px-8 py-4 bg-transparent text-white rounded-lg font-medium hover:bg-white/10 transition-colors border-2 border-white">
              {cta.buttonSecondary}
            </button>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.8}>
          <p className="text-sm opacity-75">
            {cta.note}
          </p>
        </FadeInSection>

      </div>
    </section>
  );
}