import { useState } from 'react';

import { DialogClose } from '@radix-ui/react-dialog';

import { Button } from '../ui/button';
import { DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select';

type ModalOpenOrCloseProps = 'OPEN' | 'CLOSE' | string;

export function ModalOpenOrClose() {
  const [select, setSelect] = useState<ModalOpenOrCloseProps>('OPEN');

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{select === 'OPEN' ? 'Abrir restaurante' : 'Fechar restaurante'}</DialogTitle>
      </DialogHeader>

      <div className="flex items-center space-x-2">
        <Select onValueChange={(value) => setSelect(value)} defaultValue={select}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="OPEN">Abrir</SelectItem>
            <SelectItem value="CLOSE">Fechar</SelectItem>
          </SelectContent>
        </Select>
        <DialogClose>
          <Button variant={select === 'OPEN' ? 'success' : 'destructive'}>
            {select === 'OPEN' ? 'Abrir' : 'Fechar'}
          </Button>
        </DialogClose>
      </div>
    </DialogContent>
  );
}
