"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar as CalendarIcon, MapPin } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export default function QuickBookingForm() {
  const router = useRouter();
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For a real app, you'd pass this data to the booking page
    // e.g., router.push(`/booking?pickup=${pickupLocation}&drop=${dropLocation}&date=${date?.toISOString()}`);
    router.push('/booking'); 
  };

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-2xl mx-auto shadow-xl rounded-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary">Book Your Ride Now</CardTitle>
            <CardDescription>Fast, easy, and reliable cab booking.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="pickup" className="flex items-center mb-1"><MapPin className="w-4 h-4 mr-2 text-primary" />Pickup Location</Label>
                <Input 
                  id="pickup" 
                  type="text" 
                  placeholder="Enter pickup location" 
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  required 
                  className="bg-background"
                />
              </div>
              <div>
                <Label htmlFor="drop" className="flex items-center mb-1"><MapPin className="w-4 h-4 mr-2 text-primary" />Drop-off Location</Label>
                <Input 
                  id="drop" 
                  type="text" 
                  placeholder="Enter drop-off location" 
                  value={dropLocation}
                  onChange={(e) => setDropLocation(e.target.value)}
                  required 
                  className="bg-background"
                />
              </div>
              <div>
                <Label htmlFor="date" className="flex items-center mb-1"><CalendarIcon className="w-4 h-4 mr-2 text-primary" />Travel Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal bg-background",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3 rounded-md shadow-md transform hover:scale-105 transition-transform">
                Find Cabs
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
