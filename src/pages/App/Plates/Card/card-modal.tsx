import { DialogClose } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export function CardModal() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Deseja realmente Excluir esse prato?</DialogTitle>
      </DialogHeader>
      <DialogClose>
        <div className='flex items-center space-x-2'>
        <Button className="flex-1" variant="destructive">
          Não
        </Button>
        <Button className="flex-1" variant="success">
          Sim
        </Button>
        </div>
      </DialogClose>
    </DialogContent>
  );
}
