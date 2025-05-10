"use client";
import { useState } from 'react';
import SectionTitle from '@/components/shared/section-title';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ThumbsUp, Heart, Laugh, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  avatarFallback: string;
  text: string;
  location?: string;
  rating: number;
  reactions: {
    thumbsUp: number;
    heart: number;
    laugh: number;
  };
}

const initialTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Aarav Sharma',
    avatar: 'https://picsum.photos/id/1005/60/60',
    avatarFallback: 'AS',
    text: "TourEase provided an excellent outstation service for my family trip. The cab was spotless, arrived on time, and the driver was incredibly professional and knew the routes well. Highly recommended!",
    location: 'Mumbai, India',
    rating: 5,
    reactions: { thumbsUp: 15, heart: 10, laugh: 5 },
  },
  {
    id: '2',
    name: 'Priya Singh',
    avatar: 'https://picsum.photos/id/1011/60/60',
    avatarFallback: 'PS',
    text: "I frequently use TourEase for my in-city commutes. Their app is user-friendly, cabs are always clean, and drivers are courteous. It's my go-to cab service now.",
    location: 'Delhi, India',
    rating: 5,
    reactions: { thumbsUp: 22, heart: 18, laugh: 3 },
  },
  {
    id: '3',
    name: 'Rohan Mehta',
    avatar: 'https://picsum.photos/id/1012/60/60',
    avatarFallback: 'RM',
    text: "Rented a self-drive car for a weekend trip. The car was in pristine condition, and the entire rental process was smooth and hassle-free. Great experience with TourEase!",
    location: 'Bangalore, India',
    rating: 4,
    reactions: { thumbsUp: 12, heart: 8, laugh: 7 },
  },
  {
    id: '4',
    name: 'Ananya Reddy',
    avatar: 'https://picsum.photos/id/1027/60/60',
    avatarFallback: 'AR',
    text: "We booked a custom travel package for a pilgrimage tour. TourEase handled all transportation arrangements flawlessly. The driver was patient and very helpful throughout the journey.",
    location: 'Hyderabad, India',
    rating: 5,
    reactions: { thumbsUp: 10, heart: 15, laugh: 2 },
  },
   {
    id: '5',
    name: 'Vikram Kumar',
    avatar: 'https://picsum.photos/id/1035/60/60',
    avatarFallback: 'VK',
    text: "Our company uses TourEase for corporate bookings. They are extremely reliable, provide excellent vehicles, and their customer support is top-notch. Makes business travel much easier.",
    location: 'Chennai, India',
    rating: 5,
    reactions: { thumbsUp: 17, heart: 9, laugh: 4 },
  },
   {
    id: '6',
    name: 'Sneha Patel',
    avatar: 'https://picsum.photos/id/1045/60/60',
    avatarFallback: 'SP',
    text: "The cleanliness of the cab was a major plus point for me. The driver was also very polite and followed all safety guidelines. I felt very safe and comfortable during my ride.",
    location: 'Pune, India',
    rating: 5,
    reactions: { thumbsUp: 25, heart: 12, laugh: 6 },
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ))}
  </div>
);

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);

  const handleReaction = (testimonialId: string, reactionType: keyof Testimonial['reactions']) => {
    setTestimonials(prevTestimonials =>
      prevTestimonials.map(testimonial =>
        testimonial.id === testimonialId
          ? { ...testimonial, reactions: { ...testimonial.reactions, [reactionType]: testimonial.reactions[reactionType] + 1 } }
          : testimonial
      )
    );
  };

  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Hear From Our Happy Customers" subtitle="Real stories from those who've experienced the TourEase difference." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardHeader className="flex flex-row items-start space-x-4 pb-3">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="customer avatar" />
                  <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                  {testimonial.location && <CardDescription className="text-xs text-muted-foreground">{testimonial.location}</CardDescription>}
                   <div className="mt-1">
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <p className="text-sm text-foreground/80 italic leading-relaxed">"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className="flex justify-start space-x-3 border-t pt-4">
                {[
                  { type: 'thumbsUp', icon: ThumbsUp, label: 'Like' },
                  { type: 'heart', icon: Heart, label: 'Love' },
                  { type: 'laugh', icon: Laugh, label: 'Haha' },
                ].map(reaction => (
                  <Button
                    key={reaction.type}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleReaction(testimonial.id, reaction.type as keyof Testimonial['reactions'])}
                    className="text-muted-foreground hover:text-primary group"
                    aria-label={reaction.label}
                  >
                    <reaction.icon className="h-4 w-4 mr-1.5 group-hover:fill-primary/20 transition-colors" /> 
                    {testimonial.reactions[reaction.type as keyof Testimonial['reactions']]}
                  </Button>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
