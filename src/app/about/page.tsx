import Image from 'next/image';
import SectionTitle from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, Target } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="About TourEase - Leading Taxi Service in Indore" subtitle="Your Trusted Partner for Cab Service in Indore, Ujjain, Bhopal, and beyond." />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Story: Best Cab Service in Indore</h3>
            <p className="text-lg text-foreground/80 mb-4">
              Founded with a passion for travel and a commitment to exceptional service, TourEase aims to redefine your journey experience in Indore and surrounding regions like Ujjain, Bhopal, and Omkareshwar. We believe that travel, whether it's an Indore airport cab, an Indore to Ujjain taxi, or local cab in Indore, should be comfortable, safe, and memorable.
            </p>
            <p className="text-lg text-foreground/80">
              Our core philosophy revolves around customer satisfaction, achieved through meticulously maintained vehicles, professional Indore cab drivers, and a steadfast commitment to punctuality for every taxi service in Indore.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about/team-journey.svg"
              alt="TourEase team providing cab service in Indore"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              data-ai-hint="Indore cab service team"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <Target className="h-10 w-10 text-accent mb-2" />
              <CardTitle className="text-xl text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">To provide reliable, safe, and high-quality taxi and cab services in Indore, Ujjain, and Bhopal, exceeding customer expectations and fostering trust in every journey, including airport taxi and outstation cab bookings.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-accent mb-2" />
              <CardTitle className="text-xl text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">To be the leading and most preferred cab and car rental service provider in Indore and Madhya Pradesh, known for our unwavering commitment to customer satisfaction, cleanliness, and innovation in travel solutions like Indore to Ujjain cab and 24x7 cab booking Indore.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <Users className="h-10 w-10 text-accent mb-2" />
              <CardTitle className="text-xl text-primary">Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">Our team comprises experienced professionals, dedicated Indore cab drivers, and customer support staff, all working together to ensure your travel with TourEase, the best taxi company in Indore, is seamless and enjoyable.</p>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Our Commitment to Cleanliness in Every Indore Cab</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about/clean-car-interior.svg"
                alt="Clean interior of a TourEase Indore cab"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint="Indore clean cab interior"
              />
            </div>
            <div>
              <p className="text-lg text-foreground/80 mb-4">
                At TourEase, cleanliness in our Indore cabs isn't just a feature; it's a promise. We understand the importance of a hygienic environment, especially when you're using a taxi service in Indore.
              </p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                  <span>Regular sanitization of all Indore cabs before and after each trip.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                  <span>Deep cleaning schedules to ensure our taxi interiors are spotless and fresh.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                  <span>Provision of hand sanitizers in every cab booked in Indore.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                  <span>Indore cab drivers trained in hygiene protocols to maintain a clean environment.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
