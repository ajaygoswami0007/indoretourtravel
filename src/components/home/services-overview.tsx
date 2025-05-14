
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Briefcase, Car, KeyRound, Map, Users, ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/shared/section-title';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: <Map className="h-10 w-10 text-white mb-4" />,
    title: 'Outstation Cabs from Indore',
    description: 'Book comfortable cabs from Indore to Ujjain, Bhopal, Omkareshwar, Dewas, and more. One-way & round trips available.',
    bookingLink: '/booking?serviceType=outstation',
    image: '/images/home/services-overview/outstation.svg',
    imageHint: 'Indore outstation taxi',
    altText: 'Comfortable outstation cab from Indore on a scenic road'
  },
  {
    icon: <Car className="h-10 w-10 text-white mb-4" />,
    title: 'In-City Cabs Indore',
    description: 'Reliable on-demand local cab service for hassle-free travel within Indore, including airport and railway station transfers.',
    bookingLink: '/booking?serviceType=in-city',
    image: '/images/home/services-overview/incity.svg',
    imageHint: 'Indore city taxi',
    altText: 'Local in-city taxi service on a street in Indore'
  },
  {
    icon: <KeyRound className="h-10 w-10 text-white mb-4" />,
    title: 'Self-Drive Cars Indore',
    description: 'Rent a car in Indore and enjoy the freedom to drive yourself. Wide range of well-maintained cars.',
    bookingLink: '/booking?serviceType=self-drive',
    image: '/images/home/services-overview/selfdrive.svg',
    imageHint: 'self drive car rental Indore',
    altText: 'Hand holding car keys for self-drive car rental in Indore'
  },
  {
    icon: <Users className="h-10 w-10 text-white mb-4" />,
    title: 'Tempo Traveller & Custom Packages',
    description: 'Book Tempo Traveller in Indore or tailored travel packages for Mahakaleshwar, Omkareshwar, and group tours.',
    bookingLink: '/contact', 
    image: '/images/home/services-overview/custom.svg',
    imageHint: 'Indore tempo traveller group tour',
    altText: 'Happy group of tourists on a custom travel package from Indore'
  },
  {
    icon: <Briefcase className="h-10 w-10 text-white mb-4" />,
    title: 'Corporate Cab Service Indore',
    description: 'Dedicated and efficient cab solutions for all your business travel requirements in and around Indore.',
    bookingLink: '/contact', 
    image: '/images/home/services-overview/corporate.svg',
    imageHint: 'Indore corporate cab',
    altText: 'Business person using corporate cab service in Indore'
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Our Core Cab Services in Indore and Nearby Cities" subtitle="Travel solutions designed for your comfort and convenience, including Indore to Ujjain cab, airport taxi, and local sightseeing." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="relative text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden group">
              <Image
                src={service.image}
                alt={service.altText}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0 brightness-50 group-hover:brightness-[0.4] transition-all duration-300"
                data-ai-hint={service.imageHint}
              />
              <div className="relative z-10 flex flex-col flex-grow">
                <CardHeader className="pt-8 pb-4 text-white">
                  <div className="flex justify-center">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold mt-1">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pb-4 text-gray-200 px-6">
                  <CardDescription className="text-gray-200">{service.description}</CardDescription>
                </CardContent>
                <CardFooter className="pb-8 pt-4 px-6 justify-center">
                  <Button asChild className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href={service.bookingLink}>
                      Book Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
