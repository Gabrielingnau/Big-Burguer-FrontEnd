import { ReactNode } from 'react';

import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from './ui/carousel';

interface SectionProps {
  section: string;
  children: ReactNode;
}

export function Section({ section, children }: SectionProps) {
  return (
    <div className="mt-4 flex w-full flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">{section}</h1>
      <Carousel className="mx-8">
        <CarouselContent>
          {children}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
