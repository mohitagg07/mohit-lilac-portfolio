'use client';

import { siteContent } from '@/content/siteContent';
import Image from 'next/image';
import FadeInSection from './FadeInSection';

// Service images - calming, professional imagery
const serviceImages = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800', // Calm meditation
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800', // Healing nature
  'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800', // Peaceful workspace
];

export default function SpecialtiesSection() {
  const { specialties } = siteContent;

  return (
    <section id="services" className="section bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary-800 mb-4">
              {specialties.heading}
            </h2>
            <p className="text-lg text-neutral-600">
              {specialties.subheading}
            </p>
          </div>
        </FadeInSection>

        {/* Services Grid - items-stretch ensures columns match height */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {specialties.items.map((service, index) => (
            <FadeInSection key={index} delay={0.2 * index} className="flex">
              {/* Card - flex-col and h-full makes the card expand to the grid height */}
              <div className="card group flex flex-col h-full w-full">
                
                {/* Service Image */}
                <div className="mb-6 rounded-xl overflow-hidden h-48 relative flex-shrink-0">
                  <Image
                    src={serviceImages[index]}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-2xl text-primary-800 mb-4">
                  {service.title}
                </h3>

                {/* Service Description - flex-grow pushes the tags to the bottom */}
                <p className="text-neutral-700 mb-6 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>

                {/* Tags/Keywords - mt-auto ensures they stick to the bottom */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-secondary-50 text-secondary-700 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* CTA Button */}
        <FadeInSection delay={0.8}>
          <div className="text-center mt-12">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors duration-300"
            >
              Schedule a Consultation
            </button>
          </div>
        </FadeInSection>

      </div>
    </section>
  );
}