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
  description: string;
  startingPrice: string;
}

const touristPlacesData: TouristPlace[] = [
  {
    id: '1',
    name: 'Mahakaleshwar Ujjain',
    image: 'https://picsum.photos/400/300?random=ujjain',
    imageHint: 'temple ancient',
    description: 'Bhopal To Ujjain Mahakal Temple Tour Package',
    startingPrice: '₹5000',
  },
  {
    id: '2',
    name: 'Sanchi Stupa',
    image: 'https://picsum.photos/400/300?random=sanchi',
    imageHint: 'stupa historical',
    description: 'Bhopal To Sanchi Stupa Tour Package Starting',
    startingPrice: '₹2100',
  },
  {
    id: '3',
    name: 'Omkareshwar Temple',
    image: 'https://picsum.photos/400/300?random=omkareshwar',
    imageHint: 'temple river',
    description: 'Bhopal To Omkareshwar Temple Tour Package',
    startingPrice: '₹6000',
  },
  {
    id: '4',
    name: 'Kubreshwar Dham',
    image: 'https://picsum.photos/400/300?random=kubreshwar',
    imageHint: 'temple spiritual',
    description: 'Bhopal To Kubreshwar Dham Tour Package',
    startingPrice: '₹2100',
  },
  {
    id: '5',
    name: 'Bhimbetka Caves',
    image: 'https://picsum.photos/400/300?random=bhimbetka',
    imageHint: 'caves rock',
    description: 'Bhopal To Bhimbetka Caves Tour Package',
    startingPrice: '₹2200',
  },
  {
    id: '6',
    name: 'Maheshwar Temple',
    image: 'https://picsum.photos/400/300?random=maheshwar',
    imageHint: 'temple fort',
    description: 'Bhopal To Maheshwar Temple Tour Package',
    startingPrice: '₹7000',
  },
];

export default function TouristPlacesSection() {
  return (
    <section id="tourist-places" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Enjoy Comfortable Rides And Guidance" 
          subtitle="Explore popular tourist destinations with our tailored packages." 
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {touristPlacesData.map((place) => (
            <Card key={place.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <div className="relative h-56 w-full">
                <Image
                  src={place.image}
                  alt={place.name}
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
                  <Link href="/booking">
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
