"use client";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import SectionTitle from '@/components/shared/section-title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import Image from 'next/image';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters (e.g., Indore to Ujjain Cab Inquiry)"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Contact Form Data (Indore Cab Service):", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting TourEase, your Indore cab service provider. We will get back to you soon regarding your query.",
    });
    reset(); 
  };

  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Get In Touch with TourEase Indore" subtitle="Contact us for Indore cab booking, taxi service in Ujjain, Bhopal cab contact number, or any queries. We're here to help 24x7." />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <Card className="shadow-xl rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send us a Message for Indore Taxi Service</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" {...register("name")} placeholder="John Doe" />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" {...register("email")} placeholder="john.doe@example.com" />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="subject">Subject (e.g., Indore Airport Cab, Ujjain Taxi Booking)</Label>
                  <Input id="subject" {...register("subject")} placeholder="Inquiry for Indore to Ujjain Cab" />
                  {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" {...register("message")} placeholder="Your message regarding cab service in Indore or other locations..." rows={5} />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3 rounded-md shadow-md">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl text-primary">TourEase Indore Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-accent mr-3" />
                  <p>Main Taxi Stand, Near Indore Railway Station, Indore, MP, India</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-accent mr-3" />
                  <p>Indore Cab Contact: +91-XXX-XXXXXXX (Call for 24x7 Cab Booking)</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-accent mr-3" />
                  <p>support@tourease-indore.com</p>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-6 w-6 text-accent mr-3" />
                  <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    WhatsApp for Indore Cab Booking (+91-XXX-XXXXXXX)
                  </a>
                </div>
                <p className="text-sm text-muted-foreground pt-2">Our Indore taxi support team is available 24x7 to assist you with bookings for Indore, Ujjain, Bhopal, Omkareshwar, and Dewas.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Our Indore Office Location</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                   <Image src="/images/contact/city-map-location.svg" alt="TourEase Indore Office Location Map - Near Indore Airport" width={600} height={300} className="w-full h-full object-cover" data-ai-hint="Indore taxi office map"/>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
