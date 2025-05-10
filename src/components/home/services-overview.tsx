
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Briefcase, Car, KeyRound, Map, Users, ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/shared/section-title';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: <Map className="h-10 w-10 text-primary mb-4" />,
    title: 'Outstation Cabs',
    description: 'Book comfortable cabs for your inter-city or long-distance travel needs.',
    bookingLink: '/booking?serviceType=outstation'
  },
  {
    icon: <Car className="h-10 w-10 text-primary mb-4" />,
    title: 'In-City Cabs',
    description: 'Reliable on-demand cab service for hassle-free travel within the city.',
    bookingLink: '/booking?serviceType=in-city'
  },
  {
    icon: <KeyRound className="h-10 w-10 text-primary mb-4" />,
    title: 'Self-Drive Cars',
    description: 'Rent a car and enjoy the freedom to drive yourself on your terms.',
    bookingLink: '/booking?serviceType=self-drive'
  },
  {
    icon: <Users className="h-10 w-10 text-primary mb-4" />,
    title: 'Custom Packages',
    description: 'Tailored travel packages for weekend getaways, pilgrimage, and group tours.',
    bookingLink: '/contact' // Custom packages might need a contact form
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary mb-4" />,
    title: 'Corporate Bookings',
    description: 'Dedicated and efficient cab solutions for all your business travel requirements.',
    bookingLink: '/contact' // Corporate bookings might need a contact form
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Our Core Services" subtitle="Travel solutions designed for your comfort and convenience." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardHeader>
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-4 justify-center">
                <Button asChild className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={service.bookingLink}>
                    Book Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

