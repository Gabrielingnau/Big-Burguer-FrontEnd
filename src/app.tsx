import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import { ThemeProvider } from './components/theme/theme-provider';
import { router } from './routes';

import './global.css';

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme='dark' storageKey='bigBurguer-theme'>
        <Helmet titleTemplate="%s | BigBurguer" />
        <Toaster richColors={true} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
