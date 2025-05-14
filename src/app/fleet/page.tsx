import Image from 'next/image';
import SectionTitle from '@/components/shared/section-title';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Users, Snowflake, Zap } from 'lucide-react';

const cars = [
  {
    name: 'Maruti Suzuki Dzire',
    type: 'Sedan',
    capacity: '4 Passengers',
    ac: true,
    image: '/images/fleet/dzire.svg',
    imageHint: 'white sedan car',
    features: ['Comfortable Seating', 'Ample Luggage Space', 'Smooth Ride'],
    pricePerKm: '₹10-12/km',
  },
  {
    name: 'Toyota Innova Crysta',
    type: 'SUV',
    capacity: '6-7 Passengers',
    ac: true,
    image: '/images/fleet/innova.svg',
    imageHint: 'silver suv car',
    features: ['Spacious Interior', 'Powerful Engine', 'Ideal for Families'],
    pricePerKm: '₹15-18/km',
  },
  {
    name: 'Maruti Suzuki Swift',
    type: 'Hatchback',
    capacity: '4 Passengers',
    ac: true,
    image: '/images/fleet/swift.svg',
    imageHint: 'red hatchback car',
    features: ['City Friendly', 'Fuel Efficient', 'Easy to Maneuver'],
    pricePerKm: '₹9-11/km',
  },
  {
    name: 'Tempo Traveller',
    type: 'Van',
    capacity: '12 Passengers',
    ac: true,
    image: '/images/fleet/tempo.svg',
    imageHint: 'white van group',
    features: ['Group Travel', 'Ample Space', 'Comfortable for Long Trips'],
    pricePerKm: '₹20-25/km',
  },
  {
    name: 'Honda City',
    type: 'Sedan',
    capacity: '4 Passengers',
    ac: true,
    image: '/images/fleet/city.svg',
    imageHint: 'blue sedan car',
    features: ['Premium Feel', 'Advanced Safety', 'Stylish Design'],
    pricePerKm: '₹12-14/km',
  },
  {
    name: 'Mahindra XUV500',
    type: 'SUV',
    capacity: '7 Passengers',
    ac: true,
    image: '/images/fleet/xuv.svg',
    imageHint: 'black suv car',
    features: ['Robust Build', 'Off-road Capable (select models)', 'Feature-rich'],
    pricePerKm: '₹16-20/km',
  },
];

export default function FleetPage() {
  return (
    <div className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Our Diverse Fleet" subtitle="Choose from a wide range of well-maintained vehicles to suit your needs." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {cars.map((car, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <div className="relative h-56 w-full">
                <Image
                  src={car.image}
                  alt={car.name}
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
                  <Link href="/booking">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
