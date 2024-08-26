import { Search, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ModalCreatePlates } from './plates-modal-create-plates';

export function PlatesTableFilter() {
  return (
    <form className="flex items-center">
      <div className="flex flex-1 items-center gap-2">
        <span className="text-sm font-semibold">Filtros:</span>
        <Input placeholder="Nome do prato" className="h-8 max-w-[20rem]" />
        <Input placeholder="Ingredientes" className="h-8 max-w-[20rem]" />
        <Select defaultValue="all">
          <SelectTrigger className="h-8 w-[11.25rem]">
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
        <Button variant="secondary" size="xs" type="submit">
          <Search className="mr-2 h-[1rem] w-[1rem]" />
          Filtrar resultados
        </Button>
        <Button variant="outline" size="xs" type="button">
          <X className="mr-2 h-[1rem] w-[1rem]" />
          Remover filtros
        </Button>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button type="button">Novo prato</Button>
        </DialogTrigger>
        <ModalCreatePlates />
      </Dialog>
    </form>
  );
}
