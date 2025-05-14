import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/shared/section-title';
import { ArrowRight } from 'lucide-react';

interface TouristPlace {
  id: string;
  name: string;
  image: string;
  imageHint: string;
  altText: string;
  description: string;
  startingPrice: string;
}

const touristPlacesData: TouristPlace[] = [
  {
    id: '1',
    name: 'Mahakaleshwar Ujjain',
    image: '/images/home/tourist-places/ujjain.svg',
    imageHint: 'Ujjain Mahakal taxi',
    altText: 'Mahakaleshwar Temple Ujjain - Book cab from Indore',
    description: 'Book Indore to Ujjain cab for Mahakaleshwar Temple darshan. Reliable taxi service.',
    startingPrice: '₹1500',
  },
  {
    id: '2',
    name: 'Omkareshwar Temple',
    image: '/images/home/tourist-places/omkareshwar.svg',
    imageHint: 'Omkareshwar taxi Indore',
    altText: 'Omkareshwar Temple - Taxi from Indore for darshan',
    description: 'Affordable Indore to Omkareshwar taxi package. Comfortable journey guaranteed.',
    startingPrice: '₹2500',
  },
  {
    id: '3',
    name: 'Bhopal City Tour',
    image: '/images/home/tourist-places/bhopal-lake.svg', // Assuming you create this image
    imageHint: 'Bhopal taxi tour',
    altText: 'Bhopal city tour by taxi from Indore',
    description: 'Explore Bhopal with our Indore to Bhopal taxi service. Round trip and one-way cabs.',
    startingPrice: '₹3000',
  },
  {
    id: '4',
    name: 'Dewas Tekri',
    image: '/images/home/tourist-places/dewas-tekri.svg', // Assuming you create this image
    imageHint: 'Dewas cab Indore',
    altText: 'Cab service from Indore to Dewas Tekri',
    description: 'Plan your visit to Dewas with our comfortable Indore to Dewas cab booking.',
    startingPrice: '₹1200',
  },
  {
    id: '5',
    name: 'Mandu (Mandavgad)',
    image: '/images/home/tourist-places/mandu.svg', // Assuming you create this image
    imageHint: 'Mandu taxi Indore',
    altText: 'Taxi from Indore to Mandu for sightseeing',
    description: 'Discover the historical city of Mandu with our outstation taxi from Indore.',
    startingPrice: '₹2800',
  },
  {
    id: '6',
    name: 'Sanchi Stupa',
    image: '/images/home/tourist-places/sanchi.svg',
    imageHint: 'Sanchi Stupa taxi',
    altText: 'Sanchi Stupa - Historical site taxi tour from Indore',
    description: 'Indore to Sanchi Stupa tour package by cab. Explore Buddhist heritage.',
    startingPrice: '₹2100',
  },
];

export default function TouristPlacesSection() {
  return (
    <section id="tourist-places" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Indore Taxi for Tourist Places: Ujjain, Omkareshwar & More" 
          subtitle="Explore popular tourist destinations like Mahakaleshwar Ujjain, Omkareshwar, Bhopal, and Dewas with our tailored cab packages from Indore." 
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {touristPlacesData.map((place) => (
            <Card key={place.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <div className="relative h-56 w-full">
                <Image
                  src={place.image}
                  alt={place.altText}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={place.imageHint}
                />
              </div>
              <CardHeader className="pb-2 pt-4">
                <CardTitle className="text-xl font-semibold text-primary">{place.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-1 text-sm">
                <p className="text-muted-foreground">{place.description}</p>
                <p className="font-medium">Starting From: <span className="text-accent">{place.startingPrice}</span></p>
              </CardContent>
              <CardFooter className="p-4">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-md">
                  <Link href={`/booking?destination=${encodeURIComponent(place.name)}`}>
                    Book Taxi Now <ArrowRight className="ml-2 h-4 w-4" />
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
