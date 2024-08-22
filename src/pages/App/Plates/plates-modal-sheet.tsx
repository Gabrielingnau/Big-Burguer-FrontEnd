import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { ModalDialog } from './plates-modal-dialog';

export function ModalSheet() {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Crie seu prato</SheetTitle>
        <SheetDescription>
          Preencha os campos obrigatórios para criar o prato, e a esquerda veja como o prato está ficando
        </SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4 py-4">
        <div className="felx flex-col items-center justify-end gap-4">
          <Label htmlFor="name" className="text-right">
            Nome
          </Label>
          <Input id="name" className="col-span-3" />
        </div>

        <div className="felx flex-col items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Descrição
          </Label>
          <Textarea id="description" className="col-span-3" />
        </div>

        <div className="felx flex-col items-center gap-4 ">
          <Label htmlFor="description" className="text-right">
            Descrição
          </Label>
          <Input type='file' id="description" className="col-span-3 flex flex-row-reverse"/>
        </div>

        <Select defaultValue="all">
          <SelectTrigger className="h-8 w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos status</SelectItem>
            <SelectItem value="hamburguers">Hamburguers</SelectItem>
            <SelectItem value="dog`s">Dog`s</SelectItem>
            <SelectItem value="porções">Porções</SelectItem>
            <SelectItem value="refrigerantes">Refrigerantes</SelectItem>
            <SelectItem value="bebidas">Bebidas</SelectItem>
            <SelectItem value="sucos">Sucos</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <SheetFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" type="button">
              Visualizar
            </Button>
          </DialogTrigger>
          <ModalDialog />
        </Dialog>
        <SheetClose asChild>
          <Button type="submit">Save changes</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
}
