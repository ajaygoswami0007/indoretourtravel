"use client";
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/shared/section-title';
import { Star } from 'lucide-react';

const mockTestimonials = [
  {
    id: '1',
    name: 'Sarah L.',
    avatar: '/images/testimonials/generic-avatar.svg',
    avatarFallback: 'SL',
    text: "TourEase made our Indore to Ujjain cab trip incredibly smooth. The cab was clean, and the driver was very professional. Highly recommended for outstation taxi from Indore!",
    rating: 5,
    location: 'Indore, India'
  },
  {
    id: '2',
    name: 'John B.',
    avatar: '/images/testimonials/generic-avatar.svg',
    avatarFallback: 'JB',
    text: "Used their local cab service in Indore multiple times. Always on time for airport pickup, and the cars are in excellent condition. Best taxi service in Indore.",
    rating: 5,
    location: 'Indore Airport User'
  },
  {
    id: '3',
    name: 'Priya K.',
    avatar: '/images/testimonials/generic-avatar.svg',
    avatarFallback: 'PK',
    text: "Rented a self-drive car in Indore for a weekend getaway to Omkareshwar. The process was seamless, and the car was perfect. Will definitely use TourEase again for taxi for Omkareshwar darshan.",
    rating: 4,
    location: 'Bhopal Traveler'
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ))}
  </div>
);

export default function TestimonialsPreview() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Happy Customers of Our Indore Cab Service" subtitle="Real feedback from travelers who used our taxi service in Indore, Ujjain, Bhopal and more." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {mockTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={`${testimonial.name} - TourEase Indore Customer`} data-ai-hint="Indore customer avatar" />
                  <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/80 italic">"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <StarRating rating={testimonial.rating} />
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/testimonials">View All Testimonials</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
