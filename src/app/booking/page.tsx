
"use client";
import { useState, useEffect, Suspense } from 'react';
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
import { useRouter, useSearchParams } from 'next/navigation';

const bookingSchema = z.object({
  serviceType: z.string().min(1, "Service type is required"),
  pickupLocation: z.string().min(3, "Pickup location is required (e.g., Indore Airport, Indore Railway Station)"),
  dropLocation: z.string().min(3, "Drop-off location is required (e.g., Ujjain Mahakal Temple, Omkareshwar)"),
  pickupDate: z.date({ required_error: "Pickup date is required" }),
  pickupTime: z.string().min(1, "Pickup time is required"),
  carType: z.string().min(1, "Car type is required (e.g., Sedan, SUV, Tempo Traveller)"),
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required").max(15),
  email: z.string().email("Invalid email address").optional().or(z.literal('')),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const carTypes = [
  { id: 'sedan', name: 'Sedan Cab (4 Seater)' },
  { id: 'suv', name: 'SUV Taxi (6-7 Seater)' },
  { id: 'hatchback', name: 'Hatchback Cab (4 Seater)' },
  { id: 'tempo_traveller_12', name: 'Tempo Traveller (12 Seater)' },
  { id: 'tempo_traveller_17', name: 'Tempo Traveller (17 Seater)' },
  { id: 'luxury', name: 'Luxury Cab (e.g. Honda City)' },
];

const serviceTypes = [
  { id: 'outstation', name: 'Outstation Cabs from Indore (e.g., Indore to Ujjain, Bhopal)' },
  { id: 'in-city', name: 'In-City Cabs Indore (Local Taxi)' },
  { id: 'airport', name: 'Indore Airport Taxi (Pickup/Drop)' },
  { id: 'self-drive', name: 'Self-Drive Car Rental Indore' },
  { id: 'tourist_package', name: 'Tourist Cab Packages (e.g. Omkareshwar Darshan)'}
];

function BookingPageContent() {
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [minPickupDate, setMinPickupDate] = useState<Date | undefined>(undefined);

  const { control, handleSubmit, formState: { errors }, reset, setValue } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceType: '',
      pickupLocation: 'Indore', // Default to Indore
      dropLocation: '',
      pickupTime: '',
      carType: '',
      name: '',
      phone: '',
      email: '',
    }
  });

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    setMinPickupDate(today);
    
    const queryPickup = searchParams.get('pickupLocation');
    const queryDrop = searchParams.get('dropLocation');
    const queryDate = searchParams.get('pickupDate');
    const queryServiceType = searchParams.get('serviceType');
    const queryDestination = searchParams.get('destination');


    if (queryPickup) setValue('pickupLocation', queryPickup);
    if (queryDrop) setValue('dropLocation', queryDrop);
    if (queryDestination) setValue('dropLocation', queryDestination);


    if (queryDate) {
      const dateFromQuery = new Date(queryDate);
      if (!isNaN(dateFromQuery.getTime())) {
        if (dateFromQuery >= today) {
          setValue('pickupDate', dateFromQuery);
        } else {
          setValue('pickupDate', today); 
        }
      }
    } else {
       setValue('pickupDate', today); 
    }

    if (queryServiceType) {
        const matchedService = serviceTypes.find(st => st.id === queryServiceType);
        if (matchedService) setValue('serviceType', matchedService.id);
    } else if (queryDestination) {
        if (queryDestination.toLowerCase().includes('ujjain') || queryDestination.toLowerCase().includes('omkareshwar') || queryDestination.toLowerCase().includes('bhopal')) {
            setValue('serviceType', 'outstation');
        }
    }


  }, [searchParams, setValue]);

  const onSubmit = async (data: BookingFormData) => {
    setIsLoading(true);
    console.log('Booking Data for Indore Cab Service:', data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    toast({
      title: "Booking Submitted!",
      description: `Your cab booking from ${data.pickupLocation} to ${data.dropLocation} has been received. We will contact you shortly to confirm your Indore taxi.`,
      variant: "default",
    });
    setIsBookingConfirmed(true);
    reset({ 
        pickupLocation: 'Indore', 
        pickupDate: new Date(),
        serviceType: '',
        dropLocation: '',
        pickupTime: '',
        carType: '',
        name: '',
        phone: '',
        email: '',
    }); 
  };

  if (isBookingConfirmed) {
    return (
      <div className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-3xl mx-auto shadow-xl rounded-lg">
            <CardHeader className="p-8">
              <CardTitle className="text-3xl text-primary">Indore Cab Booking Confirmation</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6 p-8 pt-0">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
              <h3 className="text-2xl font-semibold">Booking Confirmed!</h3>
              <p className="text-muted-foreground text-lg">
                Thank you for choosing TourEase for your taxi service in Indore! Your booking request has been successfully submitted. Our team will review the details and contact you shortly to confirm your ride.
              </p>
              <p className="text-md">A confirmation email (if provided) and SMS will be sent to you with the Indore cab booking summary.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button onClick={() => router.push('/')} variant="outline" className="w-full sm:w-auto text-lg py-3">Back to Home</Button>
                <Button onClick={() => setIsBookingConfirmed(false)} className="w-full sm:w-auto text-lg py-3">Make Another Indore Taxi Booking</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Book Your Cab in Indore Online" subtitle="Complete your booking in one easy step for local taxi, outstation cabs (Indore to Ujjain, Bhopal, etc.), or airport taxi Indore." className="mb-12 md:mb-16" />
        
        <Card className="max-w-3xl mx-auto shadow-xl rounded-lg">
          <CardHeader className="p-8">
            <CardTitle className="text-3xl text-primary">Enter Your Indore Cab Booking Details</CardTitle>
            <CardDescription className="text-lg pt-1">Fill in the information below to secure your ride with the best taxi service in Indore.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Label htmlFor="serviceType" className="mb-1.5 block">Service Type (e.g., Outstation Taxi from Indore, Airport Cab)</Label>
                  <Controller
                    name="serviceType"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                        <SelectTrigger id="serviceType"><SelectValue placeholder="Select service type" /></SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map(type => <SelectItem key={type.id} value={type.id}>{type.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.serviceType && <p className="text-destructive text-sm mt-1.5">{errors.serviceType.message}</p>}
                </div>
                <div>
                  <Label htmlFor="carType" className="flex items-center mb-1.5"><Car className="w-4 h-4 mr-2 text-muted-foreground" />Car Type (e.g., Sedan Cab Indore, SUV Taxi, Tempo Traveller)</Label>
                  <Controller
                    name="carType"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                        <SelectTrigger id="carType"><SelectValue placeholder="Select car type" /></SelectTrigger>
                        <SelectContent>
                          {carTypes.map(car => <SelectItem key={car.id} value={car.id}>{car.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.carType && <p className="text-destructive text-sm mt-1.5">{errors.carType.message}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="pickupLocation" className="flex items-center mb-1.5"><MapPin className="w-4 h-4 mr-2 text-muted-foreground" />Pickup Location (e.g., Indore Airport, Your Address in Indore)</Label>
                <Controller name="pickupLocation" control={control} render={({ field }) => <Input id="pickupLocation" {...field} placeholder="e.g., Indore Airport Terminal 1, Indore Railway Station" />} />
                {errors.pickupLocation && <p className="text-destructive text-sm mt-1.5">{errors.pickupLocation.message}</p>}
              </div>
              <div>
                <Label htmlFor="dropLocation" className="flex items-center mb-1.5"><MapPin className="w-4 h-4 mr-2 text-muted-foreground" />Drop-off Location (e.g., Ujjain Mahakal, Bhopal Hotel)</Label>
                <Controller name="dropLocation" control={control} render={({ field }) => <Input id="dropLocation" {...field} placeholder="e.g., Ujjain Mahakaleshwar Temple, Omkareshwar" />} />
                {errors.dropLocation && <p className="text-destructive text-sm mt-1.5">{errors.dropLocation.message}</p>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Label htmlFor="pickupDate" className="flex items-center mb-1.5"><CalendarIcon className="w-4 h-4 mr-2 text-muted-foreground" />Pickup Date</Label>
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
                  {errors.pickupDate && <p className="text-destructive text-sm mt-1.5">{errors.pickupDate.message}</p>}
                </div>
                <div>
                  <Label htmlFor="pickupTime" className="flex items-center mb-1.5"><Clock className="w-4 h-4 mr-2 text-muted-foreground" />Pickup Time</Label>
                  <Controller name="pickupTime" control={control} render={({ field }) => <Input id="pickupTime" type="time" {...field} />} />
                  {errors.pickupTime && <p className="text-destructive text-sm mt-1.5">{errors.pickupTime.message}</p>}
                </div>
              </div>

              <CardTitle className="text-2xl text-primary pt-6 border-t mt-8">Contact Information (For Indore Cab Booking)</CardTitle>
              
              <div>
                <Label htmlFor="name" className="flex items-center mb-1.5"><User className="w-4 h-4 mr-2 text-muted-foreground" />Full Name</Label>
                <Controller name="name" control={control} render={({ field }) => <Input id="name" {...field} placeholder="Your full name" />} />
                {errors.name && <p className="text-destructive text-sm mt-1.5">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="phone" className="flex items-center mb-1.5"><Phone className="w-4 h-4 mr-2 text-muted-foreground" />Phone Number (Indore Cab Driver Contact)</Label>
                <Controller name="phone" control={control} render={({ field }) => <Input id="phone" type="tel" {...field} placeholder="Your phone number for cab booking" />} />
                {errors.phone && <p className="text-destructive text-sm mt-1.5">{errors.phone.message}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="flex items-center mb-1.5"><Mail className="w-4 h-4 mr-2 text-muted-foreground" />Email Address (Optional)</Label>
                <Controller name="email" control={control} render={({ field }) => <Input id="email" type="email" {...field} placeholder="Your email address for booking confirmation" />} />
                {errors.email && <p className="text-destructive text-sm mt-1.5">{errors.email.message}</p>}
              </div>
              
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3.5" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? "Submitting Booking..." : "Submit Indore Cab Booking"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen"><Loader2 className="h-8 w-8 animate-spin text-primary" /> <span className="ml-2">Loading booking form...</span></div>}>
      <BookingPageContent />
    </Suspense>
  );
}

