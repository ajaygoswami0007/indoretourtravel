import HeroSection from '@/components/home/hero-section';
import ServicesOverview from '@/components/home/services-overview';
import UspSection from '@/components/home/usp-section';
import QuickBookingForm from '@/components/home/quick-booking-form';
import TestimonialsPreview from '@/components/home/testimonials-preview';
import AffordableCarsSection from '@/components/home/affordable-cars-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AffordableCarsSection />
      <UspSection />
      <QuickBookingForm />
      <TestimonialsPreview />
    </>
  );
}
