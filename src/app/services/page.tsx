import Image from 'next/image';
import SectionTitle from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, Car, KeyRound, Map, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const servicesData = [
  {
    icon: <Map className="h-12 w-12 text-primary" />,
    title: 'Outstation Cabs from Indore',
    description: 'Travel from Indore to Ujjain, Bhopal, Omkareshwar, Dewas, and other cities with ease. Our outstation cabs are perfect for long-distance journeys, one-way trips, round trips, and weekend getaways. Enjoy a smooth ride with our professional Indore cab drivers.',
    features: [
      'Indore to Ujjain Cab (Mahakaleshwar)',
      'Indore to Omkareshwar Taxi (Darshan)',
      'Indore to Bhopal Taxi Service (Round trip)',
      'Indore to Dewas Cab (One-way)',
      'Transparent pricing & multiple cab options (Sedan, SUV, Tempo Traveller in Indore)',
    ],
    image: '/images/services/outstation-cab-journey.svg',
    imageHint: 'Indore outstation cab Ujjain Bhopal',
    altText: 'Outstation cab from Indore travelling on a highway towards Ujjain/Bhopal'
  },
  {
    icon: <Car className="h-12 w-12 text-primary" />,
    title: 'In-City Cabs Indore (Local Taxi Service)',
    description: 'Navigate Indore effortlessly with our reliable local cab service. Whether for daily commutes, Indore airport cab transfers, taxi near Indore railway station, or city sightseeing, we provide timely and comfortable rides.',
    features: [
      'Point-to-point local cab in Indore',
      'Hourly rental packages for Indore local sightseeing taxi',
      'Airport taxi Indore (Pickup & Drop)',
      'Quick and easy 24x7 cab booking Indore',
    ],
    image: '/images/services/city-cab-street.svg',
    imageHint: 'Indore local taxi airport',
    altText: 'Local in-city cab on a street in Indore, near airport or railway station'
  },
  {
    icon: <KeyRound className="h-12 w-12 text-primary" />,
    title: 'Self-Drive Cars Rental Indore',
    description: 'Take control of your journey with our self-drive car rentals in Indore. Choose from a wide range of cars (Hatchback, Sedan, SUV) and enjoy the freedom to explore at your own pace. Best for those who love to drive.',
    features: [
      'Wide variety of cars for rent in Indore',
      'Flexible rental periods (daily cab rental Indore, weekly, monthly)',
      'Well-maintained and insured vehicles',
      'Minimal documentation for car rental Indore',
    ],
    image: '/images/services/person-driving-car.svg',
    imageHint: 'Indore self drive car',
    altText: 'Person driving a self-drive rental car in Indore'
  },
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: 'Tempo Traveller & Custom Travel Packages Indore',
    description: 'Planning a group trip or a special tour from Indore? Book a Tempo Traveller in Indore or get custom travel packages. Ideal for family taxi needs, pilgrimage tours (Ujjain, Omkareshwar), and Indore holiday cab packages.',
    features: [
      'Tempo traveller on rent Indore (9 to 26 seater)',
      'Personalized itineraries for Indore local sightseeing',
      'Cab for Mahakaleshwar Temple Ujjain, Taxi for Omkareshwar darshan',
      'Group travel solutions from Indore',
    ],
    image: '/images/services/group-travel-happy.svg',
    imageHint: 'Indore tempo traveller Ujjain Omkareshwar',
    altText: 'Group of happy tourists with a Tempo Traveller from Indore'
  },
  {
    icon: <Briefcase className="h-12 w-12 text-primary" />,
    title: 'Corporate Cab Service in Indore',
    description: 'Streamline your business travel with our dedicated corporate cab solutions in Indore. We offer reliable and professional transportation for employees, client meetings, and corporate events, ensuring punctuality and comfort.',
    features: [
      'Monthly billing options for corporate clients in Indore',
      'Dedicated account managers for taxi bookings',
      'Employee transport solutions in Indore',
      'Luxury cab in Indore for executives',
    ],
    image: '/images/services/business-travel-meeting.svg',
    imageHint: 'Indore corporate taxi luxury',
    altText: 'Business professionals using corporate cab service in Indore'
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Comprehensive Cab & Taxi Services in Indore, Ujjain, Bhopal" subtitle="Tailored transportation solutions from the best cab service in Indore. Book affordable taxi service for outstation, local, airport, and corporate needs 24x7." />
        
        <div className="space-y-16 mt-12">
          {servicesData.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-xl rounded-lg">
              <div className={`grid md:grid-cols-2 items-center gap-8 ${index % 2 !== 0 ? 'md:grid-flow-row-dense md:grid-cols-[auto_1fr]' : ''}`}>
                <div className={`relative h-64 md:h-full ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.altText}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={service.imageHint}
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <CardTitle className="text-2xl md:text-3xl font-semibold ml-4">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg text-foreground/80 mb-6">
                    {service.description}
                  </CardDescription>
                  <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-foreground/70">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/booking">Book {service.title.replace('Indore', '').trim()}</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
