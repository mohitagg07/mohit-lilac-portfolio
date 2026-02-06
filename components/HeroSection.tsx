'use client';

import { siteContent } from '@/content/siteContent';
import Image from 'next/image';
import FadeInSection from './FadeInSection';

export default function HeroSection() {
  const { hero } = siteContent;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070"
          alt="Calm Santa Monica beach"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/50 to-primary-400/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <FadeInSection delay={0.2}>
            {/* H1 - SEO optimized with Santa Monica */}
            <h1 className="font-serif text-4xl md:text-6xl text-primary-900 mb-6 drop-shadow-sm">
              {hero.title}
            </h1>
          </FadeInSection>
          
          <FadeInSection delay={0.4}>
            {/* Subheading */}
            <p className="text-lg md:text-xl text-neutral-800 mb-8 leading-relaxed font-medium">
              {hero.subtitle}
            </p>
          </FadeInSection>

          <FadeInSection delay={0.6}>
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="btn-primary text-center"
              >
                {hero.cta}
              </button>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.8}>
            {/* Location badge for SEO */}
            <div className="mt-8 flex items-center gap-2 text-neutral-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm md:text-base font-medium">Serving Santa Monica & California via Telehealth</span>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}