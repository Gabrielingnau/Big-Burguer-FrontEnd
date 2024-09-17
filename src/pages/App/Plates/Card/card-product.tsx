import { Pencil, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CarouselItem } from '@/components/ui/carousel';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';

import { ModalCreatePlates } from '../ModalCreatePlates/modal';
import { CardModal } from './card-modal';
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
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Pencil className="h-[1rem] w-[1rem]" />
                </Button>
              </DialogTrigger>
              <ModalCreatePlates />
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <X className="h-[1rem] w-[1rem]" />
                </Button>
              </DialogTrigger>
              <CardModal />
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-2">
          <img
            src={Hamburguer}
            alt="Nome do amburguer"
            className="min-h-[12.5rem] w-[100%] rounded-[6px] object-cover"
          />
          <CardTitle>Big triplo x</CardTitle>
          <CardDescription className="w-[80%] max-w-[18.75rem] text-center">
            Um delicioso haburguer com tres carnes suculentas e moplo especial da casa
          </CardDescription>
          <Button className="w-[60%] max-w-[15.625rem]">Visualizar</Button>
        </CardContent>
      </Card>
    </CarouselItem>
  );
}
