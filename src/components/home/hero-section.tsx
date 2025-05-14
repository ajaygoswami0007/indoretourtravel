
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-4rem)] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center text-white">
      <Image
        src="/images/home/hero/scenic-road-cab.svg"
        alt="Scenic travel route with a TourEase cab in Indore"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="brightness-50"
        data-ai-hint="Indore cab service road"
        priority // Added priority for LCP
      />
      <div className="relative z-10 p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight shadow-text">
          TourEase: Your Trusted <span className="text-primary">Cab Service in Indore</span> & Beyond.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 shadow-text">
          Reliable & Clean Cabs for Indore, Ujjain, Bhopal, Omkareshwar. Book Airport Taxi, Outstation Cabs, and Local Taxi 24x7. Experience seamless travel with TourEase.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <Link href="/booking">Book Cab in Indore</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-primary px-8 py-3 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <Link href="/services">Explore Taxi Services</Link>
          </Button>
        </div>
      </div>
      <style jsx>{`
        .shadow-text {
          text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}
