
"use client";

import { Award, Briefcase, CarFront, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CountUp from 'react-countup';

interface StatItem {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

const statsData: StatItem[] = [
  {
    icon: <Briefcase className="h-10 w-10 text-accent" />,
    value: 50,
    label: 'Tour Packages',
    suffix: '+',
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    value: 1000,
    label: 'Happy Customers',
    suffix: '+',
  },
  {
    icon: <Award className="h-10 w-10 text-accent" />,
    value: 10,
    label: 'Years of Experience',
    suffix: '+',
  },
  {
    icon: <CarFront className="h-10 w-10 text-accent" />,
    value: 100,
    label: 'Cars Available',
    suffix: '+',
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-foreground/90 text-background">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="bg-background/10 border-border/30 shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {statsData.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="mb-3 p-3 bg-accent/20 rounded-full">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-accent">
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} enableScrollSpy />
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground group-hover:text-background/90">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
