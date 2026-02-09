'use client';

import { siteContent } from '@/content/siteContent';

export default function CTASection() {
  const { cta } = siteContent;

  return (
    <section id="contact" className="section bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heading - White text for contrast */}
        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">
          {cta.heading}
        </h2>

        {/* Body text - White with good opacity */}
        <p className="text-lg md:text-xl mb-8 text-white/95 leading-relaxed">
          {cta.text}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <button className="px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-background transition-colors shadow-medium">
            {cta.buttonPrimary}
          </button>
          <button className="px-8 py-4 bg-transparent text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border-2 border-white">
            {cta.buttonSecondary}
          </button>
        </div>

        {/* Note - White text */}
        <p className="text-sm text-white/90">
          {cta.note}
        </p>

      </div>
    </section>
  );
}
