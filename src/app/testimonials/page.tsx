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
  serviceUsed?: string;
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
    avatar: '/images/testimonials/generic-avatar.svg',
    avatarFallback: 'AS',
    text: "TourEase provided an excellent Indore to Ujjain cab service for my family trip to Mahakaleshwar temple. The cab was spotless, arrived on time, and the driver was incredibly professional. Highly recommended for outstation taxi from Indore!",
    location: 'Mumbai (Trip to Ujjain from Indore)',
    serviceUsed: 'Indore to Ujjain Cab',
    rating: 5,
    reactions: { thumbsUp: 25, heart: 18, laugh: 5 },
  },
  {
    id: '2',
    name: 'Priya Singh',
    avatar: '/images/testimonials/generic-avatar.svg',
    avatarFallback: 'PS',
    text: "I frequently use TourEase for my local cab in Indore, especially for airport pickup and drop. Their app is user-friendly, cabs are always clean, and drivers are courteous. Best airport taxi in Indore.",
    location: 'Delhi (Frequent Flyer to Indore)',
    serviceUsed: 'Indore Airport Cab',
    rating: 5,
    reactions: { thumbsUp: 32, heart: 25, laugh: 3 },
  },
  {
    id: '3',
    name: 'Rohan Mehta',
    avatar: '/images/testimonials/generic-avatar.svg',
    avatarFallback: 'RM',
    text: "Rented a self-drive car in Indore for a weekend trip to Omkareshwar. The car was in pristine condition, and the entire rental process was smooth and hassle-free. Great experience with TourEase for taxi for Omkareshwar darshan!",
    location: 'Bangalore (Trip from Indore)',
    serviceUsed: 'Self-Drive Car Indore to Omkareshwar',
    rating: 4,
    reactions: { thumbsUp: 18, heart: 12, laugh: 7 },
  },
  {
    id: '4',
    name: 'Ananya Reddy',
    avatar: '/images/testimonials/generic-avatar.svg',
    avatarFallback: 'AR',
    text: "We booked a Tempo Traveller in Indore for a family tour to Bhopal. TourEase handled all transportation arrangements flawlessly. The driver was patient and very helpful. Best tempo traveller on rent Indore.",
    location: 'Hyderabad (Group Tour from Indore)',
    serviceUsed: 'Tempo Traveller Indore to Bhopal',
    rating: 5,
    reactions: { thumbsUp: 20, heart: 19, laugh: 2 },
  },
   {
    id: '5',
    name: 'Vikram Kumar',
    avatar: '/images/testimonials/generic-avatar.svg',
    avatarFallback: 'VK',
    text: "Our company uses TourEase for corporate cab service in Indore. They are extremely reliable, provide excellent vehicles for our executives, and their customer support is top-notch. Makes business travel much easier.",
    location: 'Chennai (Business in Indore)',
    serviceUsed: 'Corporate Cab Service Indore',
    rating: 5,
    reactions: { thumbsUp: 27, heart: 15, laugh: 4 },
  },
   {
    id: '6',
    name: 'Sneha Patel',
    avatar: '/images/testimonials/generic-avatar.svg',
    avatarFallback: 'SP',
    text: "The cleanliness of the sedan cab in Indore was a major plus point for me. The driver was also very polite and followed all safety guidelines for our Indore to Dewas cab trip. I felt very safe and comfortable.",
    location: 'Pune (Trip from Indore to Dewas)',
    serviceUsed: 'Sedan Cab Indore to Dewas',
    rating: 5,
    reactions: { thumbsUp: 35, heart: 18, laugh: 6 },
  },
  {
    id: '7',
    name: 'Rajesh Gupta',
    avatar: '/images/testimonials/generic-avatar.svg',
    avatarFallback: 'RG',
    text: "Needed a taxi near Indore railway station urgently. TourEase provided a quick booking and the cab arrived promptly. Very efficient local cab service in Indore.",
    location: 'Indore Resident',
    serviceUsed: 'Local Cab in Indore (Railway Station)',
    rating: 5,
    reactions: { thumbsUp: 15, heart: 7, laugh: 3 },
  },
  {
    id: '8',
    name: 'Meera Iyer',
    avatar: '/images/testimonials/generic-avatar.svg',
    avatarFallback: 'MI',
    text: "Booked an affordable taxi service in Indore for daily commute. Their rates are competitive, and the service is consistently good. Definitely the best cab service in Indore for daily rental.",
    location: 'Indore (Working Professional)',
    serviceUsed: 'Daily Cab Rental Indore',
    rating: 4,
    reactions: { thumbsUp: 22, heart: 10, laugh: 5 },
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
        <SectionTitle title="Hear From Our Happy Customers - TourEase Indore Reviews" subtitle="Real stories from those who've experienced the best cab service in Indore, Ujjain, Bhopal, and for airport taxi, outstation trips, and local travel." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardHeader className="flex flex-row items-start space-x-4 pb-3">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarImage src={testimonial.avatar} alt={`${testimonial.name} - TourEase Customer Review for Indore Cab Service`} data-ai-hint="Indore cab customer review" />
                  <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                  {testimonial.location && <CardDescription className="text-xs text-muted-foreground">{testimonial.location}</CardDescription>}
                  {testimonial.serviceUsed && <CardDescription className="text-xs text-primary font-medium mt-0.5">Service: {testimonial.serviceUsed}</CardDescription>}
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
