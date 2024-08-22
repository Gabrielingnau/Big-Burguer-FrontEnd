import { Pencil, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CarouselItem } from '@/components/ui/carousel';

import Hamburguer from '/Hamburguer.jpeg';

interface CardProductProps {
  data?: {
    name: string;
    description: string;
    image: string;
  };
}

export function CardProduct({ data }: CardProductProps) {
  return (
    <CarouselItem className="min-w-[20%] max-w-[20%] flex-1">
      <Card>
        <CardHeader>
          <div className="flex flex-row items-center justify-between">
            <Button variant="outline">
              <Pencil className="h-4 w-4" />
            </Button>
            <Button variant="outline">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-2">
          <img
            src={Hamburguer}
            alt="Nome do amburguer"
            className="min-h-[200px] w-[100%] max-w-[300px] rounded-[6px] object-cover"
          />
          <CardTitle>Big triplo x</CardTitle>
          <CardDescription className="w-[80%] max-w-[300px] text-center">
            Um delicioso haburguer com tres carnes suculentas e moplo especial da casa
          </CardDescription>
          <Button className="w-[60%] max-w-[250px]">Visualizar</Button>
        </CardContent>
      </Card>
    </CarouselItem>
  );
}
