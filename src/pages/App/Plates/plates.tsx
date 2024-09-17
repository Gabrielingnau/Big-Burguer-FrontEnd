import { Pencil, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import { Section } from '@/components/section';

import { CardProduct } from './Card/card-product';
import { PromoPLates } from './PromoPlates/promo';
import { PlatesTableFilter } from './plates-table-filter';

export function Plates() {
  return (
    <>
      <Helmet title="Pratos" />
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Pratos</h1>

        <div className="flex w-full flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Big Burguer</h1>
          <p className="max-w-[60%] text-lg text-center font-medium text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quaerat voluptate consectetur soluta
            aperiam porro nulla omnis ducimus delectus, consequuntur animi suscipit numquam, facere dolorum aut
            accusantium labore tempore ut?
          </p>
        </div>

        <PromoPLates />

        <PlatesTableFilter />
      </div>
      <div className="flex flex-col items-center gap-8 pb-20">
        <Section section="Hamburgues">
          {Array.from({ length: 20 }).map((_, i) => {
            return <CardProduct key={i} />;
          })}
        </Section>

        <Section section="Dog`s">
          {Array.from({ length: 20 }).map((_, i) => {
            return <CardProduct key={i} />;
          })}
        </Section>

        <Section section="Porções">
          {Array.from({ length: 20 }).map((_, i) => {
            return <CardProduct key={i} />;
          })}
        </Section>

        <Section section="Refrigerantes">
          {Array.from({ length: 20 }).map((_, i) => {
            return <CardProduct key={i} />;
          })}
        </Section>

        <Section section="Bebidas">
          {Array.from({ length: 20 }).map((_, i) => {
            return <CardProduct key={i} />;
          })}
        </Section>

        <Section section="Sucos">
          {Array.from({ length: 20 }).map((_, i) => {
            return <CardProduct key={i} />;
          })}
        </Section>
      </div>
    </>
  );
}
