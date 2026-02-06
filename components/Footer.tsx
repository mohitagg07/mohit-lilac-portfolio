'use client';

import { siteContent } from '@/content/siteContent';

export default function Footer() {
  const { footer } = siteContent;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* About */}
          <div>
            <h3 className="font-serif text-2xl mb-4">{footer.tagline}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Compassionate, evidence-based therapy for anxiety, trauma, and burnout in Santa Monica, California.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Office', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-neutral-400 text-sm">
              <p>{footer.address}</p>
              <p className="pt-2">By appointment only</p>
              <p>In-person & Telehealth</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {currentYear} Dr. Maya Reynolds, PsyD. All rights reserved.
            </p>
            <p className="text-neutral-600 text-xs">
              {footer.license}
            </p>
          </div>
          <p className="text-neutral-600 text-xs mt-4 text-center md:text-left">
            {footer.disclaimer}
          </p>
        </div>

      </div>
    </footer>
  );
}