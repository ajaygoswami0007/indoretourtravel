"use client";
import { useState } from 'react';
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
import { CalendarIcon, Car, User, MapPin, Clock, Phone, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

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
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  const { control, handleSubmit, trigger, formState: { errors } } = useForm<BookingFormData>({
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

  const onSubmit = (data: BookingFormData) => {
    console.log('Booking Data:', data);
    toast({
      title: "Booking Submitted!",
      description: "Your booking request has been received. We will contact you shortly.",
      variant: "default",
    });
    // Reset form or redirect
    setCurrentStep(4); // Go to confirmation step
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof BookingFormData)[] = [];
    if (currentStep === 1) fieldsToValidate = ['serviceType', 'pickupLocation', 'dropLocation', 'pickupDate', 'pickupTime'];
    if (currentStep === 2) fieldsToValidate = ['carType'];
    if (currentStep === 3) fieldsToValidate = ['name', 'phone', 'email'];
    
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Book Your Cab" subtitle="Easy step-by-step booking process" />
        
        <Card className="max-w-2xl mx-auto shadow-xl rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Step {currentStep} of 4: 
              {currentStep === 1 && " Trip Details"}
              {currentStep === 2 && " Select Car"}
              {currentStep === 3 && " Contact Information"}
              {currentStep === 4 && " Confirmation"}
            </CardTitle>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
              <div className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out" style={{ width: `${(currentStep / 4) * 100}%` }}></div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {currentStep === 1 && (
                <>
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
                    <Label htmlFor="pickupLocation" className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-muted-foreground" />Pickup Location</Label>
                    <Controller name="pickupLocation" control={control} render={({ field }) => <Input id="pickupLocation" {...field} placeholder="e.g., Airport Terminal 1" />} />
                    {errors.pickupLocation && <p className="text-destructive text-sm mt-1">{errors.pickupLocation.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="dropLocation" className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-muted-foreground" />Drop-off Location</Label>
                    <Controller name="dropLocation" control={control} render={({ field }) => <Input id="dropLocation" {...field} placeholder="e.g., City Center Hotel" />} />
                    {errors.dropLocation && <p className="text-destructive text-sm mt-1">{errors.dropLocation.message}</p>}
                  </div>
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
                          <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() -1))} /></PopoverContent>
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
                </>
              )}

              {currentStep === 2 && (
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
              )}

              {currentStep === 3 && (
                <>
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
                </>
              )}

              {currentStep === 4 && (
                 <div className="text-center space-y-4">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                    <h3 className="text-2xl font-semibold">Booking Confirmed!</h3>
                    <p className="text-muted-foreground">
                      Thank you for choosing TourEase! Your booking request has been successfully submitted. Our team will review the details and contact you shortly to confirm your ride.
                    </p>
                    <p className="text-sm">A confirmation email (if provided) and SMS will be sent to you with the booking summary.</p>
                    <Button onClick={() => router.push('/')} variant="outline" className="w-full">Back to Home</Button>
                 </div>
              )}

              <div className="flex justify-between mt-8">
                {currentStep > 1 && currentStep < 4 && (
                  <Button type="button" variant="outline" onClick={prevStep}>Previous</Button>
                )}
                {currentStep < 3 && (
                  <Button type="button" onClick={nextStep} className="ml-auto bg-primary hover:bg-primary/90">Next</Button>
                )}
                {currentStep === 3 && (
                  <Button type="submit" className="ml-auto bg-accent hover:bg-accent/90 text-accent-foreground">Submit Booking</Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Placeholder for CheckCircle icon if not imported above from lucide-react
const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);
