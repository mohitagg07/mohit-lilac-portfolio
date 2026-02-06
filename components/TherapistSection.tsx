'use client';

import { siteContent } from '@/content/siteContent';
import Image from 'next/image';
import FadeInSection from './FadeInSection';

export default function TherapistSection() {
  const { therapist } = siteContent;

  return (
    <section id="about" className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image - Dr. Maya Reynolds */}
          <FadeInSection delay={0.2}>
            <div className="order-2 md:order-1">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-secondary-100 rounded-4xl transform rotate-3"></div>
                
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-medium">
                  <Image
                    src="/images/dr-maya-reynolds.jpg"
                    alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                    width={600}
                    height={700}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Content */}
          <FadeInSection delay={0.4}>
            <div className="order-1 md:order-2">
              <p className="text-accent-600 font-semibold mb-2 tracking-wide uppercase text-sm">
                {therapist.eyebrow}
              </p>
              
              <h2 className="font-serif text-4xl md:text-5xl text-primary-800 mb-2">
                {therapist.name}
              </h2>
              
              <p className="text-neutral-600 mb-6">{therapist.credentials}</p>

              {/* Bio paragraphs from profile */}
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                {therapist.bio.map((paragraph, index) => (
                  <p key={index} className="text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Credentials/Badges */}
              <div className="mt-8 pt-8 border-t border-neutral-200">
                <ul className="space-y-3">
                  {therapist.badges.map((badge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700 text-sm">{badge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
}