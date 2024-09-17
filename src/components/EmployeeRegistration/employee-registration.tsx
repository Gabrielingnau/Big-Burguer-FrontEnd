import { Button } from '../ui/button';
import { Dialog, DialogTrigger } from '../ui/dialog';
import { Modal } from './modal';

export function EmployeeRegistration() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="flex w-full justify-start">
          Contrate um funcionario
        </Button>
      </DialogTrigger>
      <Modal />
    </Dialog>
  );
}
