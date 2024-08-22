import { Home, UtensilsCrossed, SquareMenu } from 'lucide-react';
import { PiHamburgerBold } from 'react-icons/pi';

import { AccountMenu } from './accunt-menu';
import { NavLink } from './nav-link';
import { ThemeToggle } from './theme/theme-toggle';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

export function Header() {
  return (
    <div className="fixed z-50 w-full border-b bg-background/70">
      <div className="flex h-16 items-center gap-6 px-6">
        <PiHamburgerBold size={20} />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink to="/orders">
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
          <NavLink to="/plates">
            <SquareMenu className="h-4 w-4" />
            Pratos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost">
            <p className="text-ring">Aberto</p>
          </Button>
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  );
}
