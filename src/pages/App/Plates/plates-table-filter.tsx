import { Plus, Search, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';

import { ModalSheet } from './plates-modal-sheet';

export function PlatesTableFilter() {
  return (
    <form className="flex items-center">
      <div className="flex flex-1 items-center gap-2">
        <span className="text-sm font-semibold">Filtros:</span>
        <Input placeholder="Nome do prato" className="h-8 max-w-[320px]" />
        <Input placeholder="Ingredientes" className="h-8 max-w-[320px]" />
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
        <Button variant="secondary" size="xs" type="submit">
          <Search className="mr-2 h-4 w-4" />
          Filtrar resultados
        </Button>
        <Button variant="outline" size="xs" type="button">
          <X className="mr-2 h-4 w-4" />
          Remover filtros
        </Button>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className='flex items-center w-[5%]'>
            <Plus className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <ModalSheet />
      </Sheet>
    </form>
  );
}
