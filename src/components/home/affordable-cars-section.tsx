
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/shared/section-title';
import { Star, ArrowRight } from 'lucide-react';

interface CarInfo {
  id: string;
  name: string;
  image: string;
  imageHint: string;
  altText: string;
  baseRate: string;
  perKmRate: string;
  passengers: number;
  rating: number;
}

const carsData: CarInfo[] = [
  {
    id: '1',
    name: 'Suzuki Alto',
    image: '/images/home/affordable/alto.svg',
    imageHint: 'Indore affordable hatchback',
    altText: 'Affordable Suzuki Alto hatchback for cab service in Indore',
    baseRate: '₹2125 /Day',
    perKmRate: '₹8.5',
    passengers: 4,
    rating: 4,
  },
  {
    id: '2',
    name: 'Suzuki WagonR',
    image: '/images/home/affordable/wagonr.svg',
    imageHint: 'Indore budget taxi',
    altText: 'Budget-friendly Suzuki WagonR taxi available in Indore',
    baseRate: '₹2250 /Day',
    perKmRate: '₹9.0',
    passengers: 5,
    rating: 4,
  },
  {
    id: '3',
    name: 'Suzuki Swift (Sedan/Hatchback)',
    image: '/images/home/affordable/swift-hatchback.svg',
    imageHint: 'Indore sedan cab',
    altText: 'Popular Suzuki Swift sedan/hatchback for local cab service in Indore',
    baseRate: '₹2500 /Day',
    perKmRate: '₹10',
    passengers: 5,
    rating: 5,
  },
  {
    id: '4',
    name: 'Tata Tigor (Compact Sedan)',
    image: '/images/home/affordable/tigor.svg',
    imageHint: 'Indore compact sedan taxi',
    altText: 'Tata Tigor compact sedan, an affordable taxi option in Indore',
    baseRate: '₹2500 /Day',
    perKmRate: '₹10',
    passengers: 4,
    rating: 4,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    <span className="text-sm text-muted-foreground mr-1">Rating:</span>
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ))}
  </div>
);

export default function AffordableCarsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Affordable Taxi & Cab Rentals in Indore" subtitle="Choose from a wide range of clean and affordable cars for your travel in and from Indore. Best rates for local and outstation taxi services." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {carsData.map((car) => (
            <Card key={car.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <div className="relative h-48 w-full">
                <Image
                  src={car.image}
                  alt={car.altText}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={car.imageHint}
                />
              </div>
              <CardHeader className="pb-3 pt-4">
                <CardTitle className="text-lg font-semibold text-primary">{car.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-1 text-sm">
                <p><span className="font-medium">Base Rate:</span> {car.baseRate}</p>
                <p><span className="font-medium">Per Km:</span> {car.perKmRate}</p>
                <p><span className="font-medium">Passengers:</span> {car.passengers}</p>
                <StarRating rating={car.rating} />
              </CardContent>
              <CardFooter className="p-4">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-2.5">
                  <Link href="/booking">
                    Book Taxi <ArrowRight className="ml-2 h-4 w-4" />
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
