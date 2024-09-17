import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
});

type StoreProfileSchema = z.infer<typeof storeProfileSchema>;

export function StoreProfileDialog() {
  const { register } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>Atualize as informações do seu estabelecimento visíveis ao seu cliente</DialogDescription>
      </DialogHeader>

      <form>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input placeholder='Mude o nome do seu restuarante' className="col-span-3" id="name" {...register('name')} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea placeholder='Descreva o seu restaurante' className="col-span-3" id="description" {...register('description')} />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" variant="success">
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
