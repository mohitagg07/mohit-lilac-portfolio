import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TherapistSection from '@/components/TherapistSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import OfficeSection from '@/components/OfficeSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TherapistSection />
      <SpecialtiesSection />
      <OfficeSection />  {/* NEW - Part 3 requirement */}
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}