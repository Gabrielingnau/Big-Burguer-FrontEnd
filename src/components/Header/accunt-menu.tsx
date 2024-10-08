import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Building, ChevronDown, LogOut } from 'lucide-react';

import { DialogTrigger } from '@radix-ui/react-dialog';

import { Button } from '../ui/button';
import { Dialog } from '../ui/dialog';
import { StoreProfileDialog } from '../store-profile-dialog';

export function AccountMenu() {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex select-none items-center gap-2">
            Big Burguer
            <ChevronDown className="h-[1rem] w-[1rem]" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            <span>Diego Fernandes</span>
            <span className="text-xs font-normal text-muted-foreground">diego@rocketseat.com.br</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Building className="mr-2 h-[1rem] w-[1rem]" />
              <span>Perfil da loja</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
            <LogOut className="mr-2 h-[1rem] w-[1rem]" />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <StoreProfileDialog />
    </Dialog>
  );
}
