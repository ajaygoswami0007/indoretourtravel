import Image from 'next/image';
import SectionTitle from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, Target } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="About TourEase" subtitle="Your Trusted Partner in Travel" />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Story</h3>
            <p className="text-lg text-foreground/80 mb-4">
              Founded with a passion for travel and a commitment to exceptional service, TourEase aims to redefine your journey experience. We believe that travel should be comfortable, safe, and memorable, whether it's a short city ride or a long outstation adventure.
            </p>
            <p className="text-lg text-foreground/80">
              Our core philosophy revolves around customer satisfaction, achieved through meticulously maintained vehicles, professional and courteous drivers, and a steadfast commitment to punctuality.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about/team-journey.svg"
              alt="TourEase Team or Scenic View"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              data-ai-hint="team journey"
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
              <p className="text-foreground/80">To provide reliable, safe, and high-quality transportation services that exceed customer expectations, fostering a culture of trust and excellence in every journey.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-accent mb-2" />
              <CardTitle className="text-xl text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">To be the leading and most preferred cab and car rental service provider, known for our unwavering commitment to customer satisfaction, cleanliness, and innovation in travel solutions.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <Users className="h-10 w-10 text-accent mb-2" />
              <CardTitle className="text-xl text-primary">Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">Our team comprises experienced professionals, dedicated drivers, and customer support staff, all working together to ensure your travel with us is seamless and enjoyable.</p>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Our Commitment to Cleanliness</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about/clean-car-interior.svg"
                alt="Clean cab interior"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint="clean car interior"
              />
            </div>
            <div>
              <p className="text-lg text-foreground/80 mb-4">
                At TourEase, cleanliness isn't just a feature; it's a promise. We understand the importance of a hygienic environment, especially when you're traveling.
              </p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                  <span>Regular sanitization of all vehicles before and after each trip.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                  <span>Deep cleaning schedules to ensure interiors are spotless and fresh.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                  <span>Provision of hand sanitizers in every cab for passenger use.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                  <span>Drivers trained in hygiene protocols to maintain a clean environment.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
