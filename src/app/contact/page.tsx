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
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // In a real app, you would send this data to your backend
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you soon.",
    });
    reset(); // Reset form fields
  };

  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Get In Touch" subtitle="We're here to help and answer any question you might have." />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <Card className="shadow-xl rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
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
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" {...register("subject")} placeholder="Booking Inquiry" />
                  {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" {...register("message")} placeholder="Your message..." rows={5} />
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
                <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-accent mr-3" />
                  <p>123 Travel Lane, Cityville, State 54321, Country</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-accent mr-3" />
                  <p>+1 (234) 567-890 (Call Us)</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-accent mr-3" />
                  <p>support@tourease.com</p>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-6 w-6 text-accent mr-3" />
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Chat on WhatsApp (+1234567890)
                  </a>
                </div>
                <p className="text-sm text-muted-foreground pt-2">Our support team is available 24x7 to assist you.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Our Location</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {/* Placeholder for Google Maps. Replace with actual map embed if needed */}
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                   <Image src="https://picsum.photos/600/300?random=map" alt="Location Map" width={600} height={300} className="w-full h-full object-cover" data-ai-hint="city map location"/>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
