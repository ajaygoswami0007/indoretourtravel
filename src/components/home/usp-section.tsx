import { CarFront, ShieldCheck, Smile, Clock } from 'lucide-react';
import SectionTitle from '@/components/shared/section-title';

const usps = [
  {
    icon: <CarFront className="h-12 w-12 text-primary" />,
    title: 'Clean & Well-Maintained Cabs',
    description: 'Our top priority is providing immaculate vehicles for a comfortable and hygienic ride.',
  },
  {
    icon: <Smile className="h-12 w-12 text-primary" />,
    title: 'Humble & Professional Drivers',
    description: 'Courteous, experienced, and verified drivers dedicated to your safety and satisfaction.',
  },
  {
    icon: <Clock className="h-12 w-12 text-primary" />,
    title: 'On-Time Service',
    description: 'We value your time. Expect punctuality and reliability for every booking.',
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-primary" />,
    title: 'Customer-Centric Approach',
    description: 'Your needs are at the heart of our service. We offer 24x7 support for any assistance.',
  },
];

export default function UspSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Why Choose TourEase?" subtitle="Experience the difference with our commitment to excellence." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {usps.map((usp, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              {usp.icon}
              <h3 className="text-lg font-semibold mt-4 mb-2">{usp.title}</h3>
              <p className="text-sm text-muted-foreground">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
