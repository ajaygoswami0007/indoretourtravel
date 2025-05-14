import Image from 'next/image';
import SectionTitle from '@/components/shared/section-title';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Users, Snowflake, Zap } from 'lucide-react';

const cars = [
  {
    name: 'Maruti Suzuki Dzire (Sedan Cab)',
    type: 'Sedan Cab in Indore',
    capacity: '4 Passengers',
    ac: true,
    image: '/images/fleet/dzire.svg',
    imageHint: 'Indore sedan taxi Dzire',
    altText: 'Maruti Suzuki Dzire sedan cab for rent in Indore',
    features: ['Comfortable Seating for city/outstation', 'Ample Luggage Space', 'Smooth Ride Quality'],
    pricePerKm: '₹10-12/km',
  },
  {
    name: 'Toyota Innova Crysta (SUV Taxi)',
    type: 'SUV Taxi Indore to Ujjain/Omkareshwar',
    capacity: '6-7 Passengers',
    ac: true,
    image: '/images/fleet/innova.svg',
    imageHint: 'Indore SUV taxi Innova',
    altText: 'Toyota Innova Crysta SUV taxi for family trips from Indore',
    features: ['Spacious Interior', 'Powerful Engine for outstation', 'Ideal for Families/Groups'],
    pricePerKm: '₹15-18/km',
  },
  {
    name: 'Maruti Suzuki Swift (Hatchback Cab)',
    type: 'Hatchback Cab for Local Indore Travel',
    capacity: '4 Passengers',
    ac: true,
    image: '/images/fleet/swift.svg',
    imageHint: 'Indore hatchback cab Swift',
    altText: 'Maruti Suzuki Swift, an affordable hatchback cab in Indore',
    features: ['City Friendly, Easy Parking', 'Fuel Efficient for local commute', 'Easy to Maneuver'],
    pricePerKm: '₹9-11/km',
  },
  {
    name: 'Tempo Traveller Indore',
    type: 'Tempo Traveller on Rent Indore (Group Travel)',
    capacity: '9, 12, 17, 26 Passengers',
    ac: true,
    image: '/images/fleet/tempo.svg',
    imageHint: 'Indore tempo traveller rental',
    altText: 'Tempo Traveller for group tours and outstation trips from Indore',
    features: ['Ideal for Group Travel & Family Taxi', 'Ample Space for Luggage', 'Comfortable for Long Trips (e.g. Ujjain, Bhopal)'],
    pricePerKm: 'Starting ₹20/km',
  },
  {
    name: 'Honda City (Premium Sedan Cab)',
    type: 'Luxury Cab in Indore',
    capacity: '4 Passengers',
    ac: true,
    image: '/images/fleet/city.svg',
    imageHint: 'Indore luxury sedan City',
    altText: 'Honda City, a premium sedan cab available in Indore',
    features: ['Premium Feel and Comfort', 'Advanced Safety Features', 'Stylish Design for corporate travel'],
    pricePerKm: '₹12-14/km',
  },
  {
    name: 'Mahindra XUV500 (Large SUV Taxi)',
    type: 'SUV Taxi Indore for Outstation',
    capacity: '7 Passengers',
    ac: true,
    image: '/images/fleet/xuv.svg',
    imageHint: 'Indore large SUV XUV500',
    altText: 'Mahindra XUV500, a large SUV taxi for robust travel from Indore',
    features: ['Robust Build Quality', 'Suitable for Tough Terrains', 'Feature-rich for comfortable journeys'],
    pricePerKm: '₹16-20/km',
  },
];

export default function FleetPage() {
  return (
    <div className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Our Diverse Fleet for Cab Service in Indore & Outstation Trips" subtitle="Choose from a wide range of well-maintained vehicles: Sedan, SUV, Hatchback, and Tempo Traveller in Indore to suit your needs. Perfect for Indore to Ujjain cab, airport taxi, and local travel." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {cars.map((car, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <div className="relative h-56 w-full">
                <Image
                  src={car.image}
                  alt={car.altText}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={car.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">{car.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{car.type}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 mr-2 text-accent" /> {car.capacity}
                </div>
                <div className="flex items-center text-sm">
                  {car.ac ? <Snowflake className="h-4 w-4 mr-2 text-accent" /> : <Zap className="h-4 w-4 mr-2 text-muted-foreground" /> }
                  {car.ac ? 'AC Available' : 'Non-AC'}
                </div>
                 <div className="text-sm">
                  <span className="font-semibold">Features:</span>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    {car.features.map((feature, i) => (
                      <li key={i} className="text-xs text-foreground/80">{feature}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm font-semibold">Approx. Price: <span className="text-primary">{car.pricePerKm}</span></p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/booking">Book This Cab</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
