
"use client";
import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import SectionTitle from '@/components/shared/section-title';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon, Car, User, MapPin, Clock, Phone, Mail, CheckCircle, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/navigation';

const bookingSchema = z.object({
  serviceType: z.string().min(1, "Service type is required"),
  pickupLocation: z.string().min(3, "Pickup location is required"),
  dropLocation: z.string().min(3, "Drop-off location is required"),
  pickupDate: z.date({ required_error: "Pickup date is required" }),
  pickupTime: z.string().min(1, "Pickup time is required"),
  carType: z.string().min(1, "Car type is required"),
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required").max(15),
  email: z.string().email("Invalid email address").optional().or(z.literal('')),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const carTypes = [
  { id: 'sedan', name: 'Sedan (4 Seater)' },
  { id: 'suv', name: 'SUV (6 Seater)' },
  { id: 'hatchback', name: 'Hatchback (4 Seater)' },
  { id: 'tempo', name: 'Tempo Traveller (12 Seater)' },
];

const serviceTypes = [
  { id: 'outstation', name: 'Outstation Cabs' },
  { id: 'in-city', name: 'In-City Cabs' },
  { id: 'self-drive', name: 'Self-Drive Cars' },
];

export default function BookingPage() {
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const [minPickupDate, setMinPickupDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    setMinPickupDate(today);
  }, []);

  const { control, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceType: '',
      pickupLocation: '',
      dropLocation: '',
      pickupTime: '',
      carType: '',
      name: '',
      phone: '',
      email: '',
    }
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsLoading(true);
    console.log('Booking Data:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    toast({
      title: "Booking Submitted!",
      description: "Your booking request has been received. We will contact you shortly.",
      variant: "default",
    });
    setIsBookingConfirmed(true);
    reset(); 
  };

  if (isBookingConfirmed) {
    return (
      <div className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-2xl mx-auto shadow-xl rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Booking Confirmation</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <h3 className="text-2xl font-semibold">Booking Confirmed!</h3>
              <p className="text-muted-foreground">
                Thank you for choosing TourEase! Your booking request has been successfully submitted. Our team will review the details and contact you shortly to confirm your ride.
              </p>
              <p className="text-sm">A confirmation email (if provided) and SMS will be sent to you with the booking summary.</p>
              <Button onClick={() => router.push('/')} variant="outline" className="w-full sm:w-auto">Back to Home</Button>
              <Button onClick={() => setIsBookingConfirmed(false)} className="w-full sm:w-auto mt-2 sm:mt-0 sm:ml-2">Make Another Booking</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Book Your Cab" subtitle="Complete your booking in one easy step" />
        
        <Card className="max-w-2xl mx-auto shadow-xl rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Enter Your Booking Details</CardTitle>
            <CardDescription>Fill in the information below to secure your ride.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="serviceType">Service Type</Label>
                  <Controller
                    name="serviceType"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger id="serviceType"><SelectValue placeholder="Select service type" /></SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map(type => <SelectItem key={type.id} value={type.id}>{type.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.serviceType && <p className="text-destructive text-sm mt-1">{errors.serviceType.message}</p>}
                </div>
                <div>
                  <Label htmlFor="carType" className="flex items-center"><Car className="w-4 h-4 mr-2 text-muted-foreground" />Car Type</Label>
                  <Controller
                    name="carType"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger id="carType"><SelectValue placeholder="Select car type" /></SelectTrigger>
                        <SelectContent>
                          {carTypes.map(car => <SelectItem key={car.id} value={car.id}>{car.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.carType && <p className="text-destructive text-sm mt-1">{errors.carType.message}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="pickupLocation" className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-muted-foreground" />Pickup Location</Label>
                <Controller name="pickupLocation" control={control} render={({ field }) => <Input id="pickupLocation" {...field} placeholder="e.g., Airport Terminal 1" />} />
                {errors.pickupLocation && <p className="text-destructive text-sm mt-1">{errors.pickupLocation.message}</p>}
              </div>
              <div>
                <Label htmlFor="dropLocation" className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-muted-foreground" />Drop-off Location</Label>
                <Controller name="dropLocation" control={control} render={({ field }) => <Input id="dropLocation" {...field} placeholder="e.g., City Center Hotel" />} />
                {errors.dropLocation && <p className="text-destructive text-sm mt-1">{errors.dropLocation.message}</p>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="pickupDate" className="flex items-center"><CalendarIcon className="w-4 h-4 mr-2 text-muted-foreground" />Pickup Date</Label>
                  <Controller
                    name="pickupDate"
                    control={control}
                    render={({ field }) => (
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}>
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar 
                            mode="single" 
                            selected={field.value} 
                            onSelect={field.onChange} 
                            initialFocus 
                            disabled={(dateToCompare) => minPickupDate ? dateToCompare < minPickupDate : true }
                          />
                        </PopoverContent>
                      </Popover>
                    )}
                  />
                  {errors.pickupDate && <p className="text-destructive text-sm mt-1">{errors.pickupDate.message}</p>}
                </div>
                <div>
                  <Label htmlFor="pickupTime" className="flex items-center"><Clock className="w-4 h-4 mr-2 text-muted-foreground" />Pickup Time</Label>
                  <Controller name="pickupTime" control={control} render={({ field }) => <Input id="pickupTime" type="time" {...field} />} />
                  {errors.pickupTime && <p className="text-destructive text-sm mt-1">{errors.pickupTime.message}</p>}
                </div>
              </div>

              <CardTitle className="text-xl text-primary pt-4 border-t mt-6">Contact Information</CardTitle>
              
              <div>
                <Label htmlFor="name" className="flex items-center"><User className="w-4 h-4 mr-2 text-muted-foreground" />Full Name</Label>
                <Controller name="name" control={control} render={({ field }) => <Input id="name" {...field} placeholder="Your full name" />} />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="phone" className="flex items-center"><Phone className="w-4 h-4 mr-2 text-muted-foreground" />Phone Number</Label>
                <Controller name="phone" control={control} render={({ field }) => <Input id="phone" type="tel" {...field} placeholder="Your phone number" />} />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="flex items-center"><Mail className="w-4 h-4 mr-2 text-muted-foreground" />Email Address (Optional)</Label>
                <Controller name="email" control={control} render={({ field }) => <Input id="email" type="email" {...field} placeholder="Your email address" />} />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
              </div>
              
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? "Submitting..." : "Submit Booking"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

