
import Image from 'next/image';
import { CarFront, ShieldCheck, Smile, Clock } from 'lucide-react';
import SectionTitle from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const usps = [
  {
    icon: <CarFront className="h-10 w-10 text-primary mb-3" />,
    title: 'Clean & Well-Maintained Cabs',
    description: 'Our top priority is providing immaculate vehicles for a comfortable and hygienic ride.',
    image: 'https://picsum.photos/400/300?random=clean-cab',
    imageHint: 'clean car interior'
  },
  {
    icon: <Smile className="h-10 w-10 text-primary mb-3" />,
    title: 'Humble & Professional Drivers',
    description: 'Courteous, experienced, and verified drivers dedicated to your safety and satisfaction.',
    image: 'https://picsum.photos/400/300?random=driver-smile',
    imageHint: 'professional driver portrait'
  },
  {
    icon: <Clock className="h-10 w-10 text-primary mb-3" />,
    title: 'On-Time Service',
    description: 'We value your time. Expect punctuality and reliability for every booking.',
    image: 'https://picsum.photos/400/300?random=on-time',
    imageHint: 'watch time punctual'
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary mb-3" />,
    title: 'Customer-Centric Approach',
    description: 'Your needs are at the heart of our service. We offer 24x7 support for any assistance.',
    image: 'https://picsum.photos/400/300?random=customer-support',
    imageHint: 'support help desk'
  },
];

export default function UspSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Why Choose TourEase?" subtitle="Experience the difference with our commitment to excellence." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {usps.map((usp, index) => (
            <Card key={index} className="relative flex flex-col text-center overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src={usp.image}
                alt={`${usp.title} background`}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0 brightness-[0.3] group-hover:brightness-[0.4] transition-all duration-300"
                data-ai-hint={usp.imageHint}
              />
              <div className="relative z-10 flex flex-col flex-grow p-6 bg-black/30 group-hover:bg-black/40 transition-colors duration-300">
                <CardHeader className="items-center p-0 pb-4">
                  {usp.icon}
                  <CardTitle className="text-lg font-semibold text-white">{usp.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-0">
                  <p className="text-sm text-gray-200">{usp.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

