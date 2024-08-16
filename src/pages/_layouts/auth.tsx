import { PiHamburgerBold } from 'react-icons/pi';
import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="relative grid min-h-screen grid-cols-2 antialiased">
      {/* <img
        src="../../../public/HamburguerLogo.jpeg"
        className="absolute  -z-10 h-[100%] w-[50%] bg-cover bg-fixed bg-no-repeat"
      /> */}
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <PiHamburgerBold size={20} />
          <span className="font-semibold">BigBurguer</span>
        </div>
        <footer className="text-sm">Painel do parceiro &copy; big.burguer - {new Date().getFullYear()}</footer>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
