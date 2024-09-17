import { Home, SquareMenu, UtensilsCrossed } from 'lucide-react';
import { PiHamburgerBold } from 'react-icons/pi';

import { ThemeToggle } from '../theme/theme-toggle';
import { Button } from '../ui/button';
import { Dialog, DialogTrigger } from '../ui/dialog';
import { Separator } from '../ui/separator';
import { AccountMenu } from './accunt-menu';
import { NavLink } from '../nav-link';
import { ModalOpenOrClose } from './header-modal-open-or-close';
import { EmployeeRegistration } from '../EmployeeRegistration/employee-registration';

export function Header() {
  return (
    <div className="fixed z-50 w-full border-b bg-background/70">
      <div className="flex h-16 items-center gap-6 px-6">
        <PiHamburgerBold className="h-5 w-5" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-[1rem] w-[1rem]" />
            Início
          </NavLink>
          <NavLink to="/orders">
            <UtensilsCrossed className="h-[1rem] w-[1rem]" />
            Pedidos
          </NavLink>
          <NavLink to="/plates">
            <SquareMenu className="h-[1rem] w-[1rem]" />
            Pratos
          </NavLink>
          <EmployeeRegistration />
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Dialog>
            <DialogTrigger>
              <Button variant="ghost">
                <p className="text-ring">Aberto</p>
              </Button>
            </DialogTrigger>
            <ModalOpenOrClose />
          </Dialog>
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  );
}
