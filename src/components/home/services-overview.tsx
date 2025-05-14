
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Briefcase, Car, KeyRound, Map, Users, ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/shared/section-title';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: <Map className="h-10 w-10 text-white mb-4" />,
    title: 'Outstation Cabs',
    description: 'Book comfortable cabs for your inter-city or long-distance travel needs.',
    bookingLink: '/booking?serviceType=outstation',
    image: '/images/home/services-overview/outstation.svg',
    imageHint: 'long road car'
  },
  {
    icon: <Car className="h-10 w-10 text-white mb-4" />,
    title: 'In-City Cabs',
    description: 'Reliable on-demand cab service for hassle-free travel within the city.',
    bookingLink: '/booking?serviceType=in-city',
    image: '/images/home/services-overview/incity.svg',
    imageHint: 'city street taxi'
  },
  {
    icon: <KeyRound className="h-10 w-10 text-white mb-4" />,
    title: 'Self-Drive Cars',
    description: 'Rent a car and enjoy the freedom to drive yourself on your terms.',
    bookingLink: '/booking?serviceType=self-drive',
    image: '/images/home/services-overview/selfdrive.svg',
    imageHint: 'car keys hand'
  },
  {
    icon: <Users className="h-10 w-10 text-white mb-4" />,
    title: 'Custom Packages',
    description: 'Tailored travel packages for weekend getaways, pilgrimage, and group tours.',
    bookingLink: '/contact', // Custom packages might need a contact form
    image: '/images/home/services-overview/custom.svg',
    imageHint: 'happy tourists group'
  },
  {
    icon: <Briefcase className="h-10 w-10 text-white mb-4" />,
    title: 'Corporate Bookings',
    description: 'Dedicated and efficient cab solutions for all your business travel requirements.',
    bookingLink: '/contact', // Corporate bookings might need a contact form
    image: '/images/home/services-overview/corporate.svg',
    imageHint: 'business person car'
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Our Core Services" subtitle="Travel solutions designed for your comfort and convenience." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="relative text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden group">
              <Image
                src={service.image}
                alt={`${service.title} service background image`}
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
