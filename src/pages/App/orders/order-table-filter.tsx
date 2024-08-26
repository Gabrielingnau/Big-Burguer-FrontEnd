import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, X } from 'lucide-react';

export function OrderTableFilter() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="ID do pedido" className="h-8 w-auto" />
      <Input placeholder="Nome do cliente" className="h-8 w-[20rem]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[11.25rem]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos status</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="processing">Em preparo</SelectItem>
          <SelectItem value="delivering">Em entrega</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
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
    </form>
  );
}
