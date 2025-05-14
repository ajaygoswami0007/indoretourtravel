
import Image from 'next/image';
import { CarFront, ShieldCheck, Smile, Clock } from 'lucide-react';
import SectionTitle from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const usps = [
  {
    icon: <CarFront className="h-10 w-10 text-primary mb-3" />,
    title: 'Clean & Well-Maintained Cabs in Indore',
    description: 'Our top priority is providing immaculate vehicles for a comfortable and hygienic ride in and from Indore.',
    image: '/images/home/usp/clean-cab.svg',
    imageHint: 'Indore clean cab',
    altText: 'Interior of a clean and well-maintained cab service in Indore'
  },
  {
    icon: <Smile className="h-10 w-10 text-primary mb-3" />,
    title: 'Professional Indore Taxi Drivers',
    description: 'Courteous, experienced, and verified drivers for your Indore taxi, ensuring safety and satisfaction.',
    image: '/images/home/usp/driver-smile.svg',
    imageHint: 'Indore taxi driver',
    altText: 'Professional and smiling taxi driver for TourEase Indore'
  },
  {
    icon: <Clock className="h-10 w-10 text-primary mb-3" />,
    title: 'On-Time Service Guarantee',
    description: 'We value your time. Expect punctuality for every Indore cab booking, including airport taxi services.',
    image: '/images/home/usp/on-time.svg',
    imageHint: 'Indore on-time cab',
    altText: 'Clock symbolizing on-time cab service in Indore'
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary mb-3" />,
    title: '24x7 Customer Support for Indore Cabs',
    description: 'Your needs are at the heart of our service. We offer 24x7 support for any Indore cab booking assistance.',
    image: '/images/home/usp/customer-support.svg',
    imageHint: 'Indore cab support',
    altText: 'Customer support representative for TourEase Indore cab service'
  },
];

export default function UspSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Why Choose TourEase for Cab Service in Indore?" subtitle="Experience the difference with the best taxi service in Indore. We are committed to excellence for all your travel needs, from local cabs to outstation taxi from Indore." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {usps.map((usp, index) => (
            <Card key={index} className="relative flex flex-col text-center overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src={usp.image}
                alt={usp.altText}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0 brightness-[0.3] group-hover:brightness-[0.4] transition-all duration-300"
                data-ai-hint={usp.imageHint}
              />
              <div className="relative z-10 flex flex-col flex-grow p-6 bg-black/30 group-hover:bg-black/40 transition-colors duration-300">
                <CardHeader className="items-center p-0 pb-4">
                  {usp.icon}
                  <CardTitle className="text-lg font-semibold text-white">{usp.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-0">
                  <p className="text-sm text-gray-200">{usp.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
