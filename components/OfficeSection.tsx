'use client';

import { siteContent } from '@/content/siteContent';
import Image from 'next/image';
import FadeInSection from './FadeInSection';

// PART 3 - NEW CUSTOM SECTION
// Uses the 2 office photos from your public folder
export default function OfficeSection() {
  const { office } = siteContent;

  return (
    <section id="office" className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary-800 mb-4">
              {office.heading}
            </h2>
            <p className="text-lg text-neutral-600">
              {office.subheading}
            </p>
          </div>
        </FadeInSection>

        {/* Two Column Layout - matches lilac structure */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          
          {/* LEFT: Text Content */}
          <FadeInSection delay={0.2}>
            <div className="order-2 md:order-1">
              {/* Description paragraphs from profile */}
              <div className="space-y-4 text-neutral-700 leading-relaxed mb-8">
                {office.description.map((paragraph, index) => (
                  <p key={index} className="text-base">{paragraph}</p>
                ))}
              </div>

              {/* Address Card */}
              <div className="bg-primary-50 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-primary-800 mb-1">Office Location</p>
                    <p className="text-neutral-700">{office.address}</p>
                  </div>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4">
                {office.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* RIGHT: Office Images - YOUR 2 OFFICE PHOTOS */}
          <FadeInSection delay={0.4}>
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-1 gap-4">
                {/* Main office image */}
                <div className="rounded-2xl overflow-hidden shadow-medium h-64 md:h-80 relative">
                  <Image
                    src="/images/office-1.jpg"
                    alt="Dr. Maya Reynolds therapy office in Santa Monica - comfortable and calming space with natural light"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Second office image */}
                <div className="rounded-xl overflow-hidden shadow-soft h-48 md:h-64 relative">
                  <Image
                    src="/images/office-2.jpg"
                    alt="Therapy office waiting area - private and comfortable setting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeInSection>

        </div>

        {/* Bottom Info Bar */}
        <FadeInSection delay={0.6}>
          <div className="mt-12 p-6 bg-background rounded-2xl text-center">
            <p className="text-neutral-600 text-sm">
              <strong className="text-primary-700">Location:</strong> Conveniently located in Santa Monica, CA • 
              <strong className="text-primary-700 ml-2">Sessions:</strong> In-person & Telehealth available throughout California
            </p>
          </div>
        </FadeInSection>

      </div>
    </section>
  );
}