import Image from 'next/image';
import SectionTitle from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, Car, KeyRound, Map, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const servicesData = [
  {
    icon: <Map className="h-12 w-12 text-primary" />,
    title: 'Outstation Cabs',
    description: 'Travel between cities with ease and comfort. Our outstation cabs are perfect for long-distance journeys, weekend getaways, or family trips. Enjoy a smooth ride with our professional drivers and well-maintained vehicles.',
    features: [
      'One-way & Round trips',
      'Multiple cab options (Sedan, SUV, etc.)',
      'Transparent pricing',
      'Experienced drivers familiar with routes',
    ],
    image: 'https://picsum.photos/500/300?random=outstation',
    imageHint: 'outstation cab journey'
  },
  {
    icon: <Car className="h-12 w-12 text-primary" />,
    title: 'In-City Cabs',
    description: 'Navigate the city effortlessly with our reliable in-city cab services. Whether it\'s for daily commutes, airport transfers, or running errands, we provide timely and comfortable rides at your doorstep.',
    features: [
      'Point-to-point travel',
      'Hourly rental packages',
      'Airport & Railway station transfers',
      'Quick and easy booking',
    ],
    image: 'https://picsum.photos/500/300?random=incity',
    imageHint: 'city cab street'
  },
  {
    icon: <KeyRound className="h-12 w-12 text-primary" />,
    title: 'Self-Drive Cars',
    description: 'Take control of your journey with our self-drive car rentals. Choose from a wide range of cars and enjoy the freedom to explore at your own pace. Perfect for those who love to drive.',
    features: [
      'Wide variety of cars (Hatchback, Sedan, SUV)',
      'Flexible rental periods (daily, weekly, monthly)',
      'Well-maintained and insured vehicles',
      'Minimal documentation',
    ],
    image: 'https://picsum.photos/500/300?random=selfdrive',
    imageHint: 'person driving car'
  },
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: 'Custom Travel Packages',
    description: 'Planning a special trip? We offer custom travel packages tailored to your needs. From weekend getaways and pilgrimage tours to group travel and holiday excursions, we handle the transportation so you can enjoy the experience.',
    features: [
      'Personalized itineraries',
      'Group travel solutions',
      'Pilgrimage and tourist destination packages',
      'Dedicated tour coordinators (on request)',
    ],
    image: 'https://picsum.photos/500/300?random=packages',
    imageHint: 'group travel happy'
  },
  {
    icon: <Briefcase className="h-12 w-12 text-primary" />,
    title: 'Corporate Bookings',
    description: 'Streamline your business travel with our dedicated corporate cab solutions. We offer reliable and professional transportation for employees, client meetings, and corporate events, ensuring punctuality and comfort.',
    features: [
      'Monthly billing options',
      'Dedicated account managers',
      'Employee transport solutions',
      'Premium vehicles for executives',
    ],
    image: 'https://picsum.photos/500/300?random=corporate',
    imageHint: 'business travel meeting'
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Our Comprehensive Services" subtitle="Tailored transportation solutions to meet all your travel needs." />
        
        <div className="space-y-16 mt-12">
          {servicesData.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-xl rounded-lg">
              <div className={`grid md:grid-cols-2 items-center gap-8 ${index % 2 !== 0 ? 'md:grid-flow-row-dense md:grid-cols-[auto_1fr]' : ''}`}>
                <div className={`relative h-64 md:h-full ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
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
                    <Link href="/booking">Book {service.title}</Link>
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
