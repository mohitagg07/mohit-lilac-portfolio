'use client';

import { siteContent } from '@/content/siteContent';
import { useState } from 'react';
import FadeInSection from './FadeInSection';

export default function FAQSection() {
  const { faq } = siteContent;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary-800 mb-4">
              {faq.heading}
            </h2>
          </div>
        </FadeInSection>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faq.items.map((item, index) => (
            <FadeInSection key={index} delay={0.1 * index}>
              <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                {/* Question Button */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-primary-50 transition-colors"
                >
                  <span className="font-semibold text-primary-800 pr-8">
                    {item.question}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Answer */}
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-neutral-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  );
}