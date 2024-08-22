import { createBrowserRouter } from 'react-router-dom';

import { NotFound } from '@/pages/404';
import { AppLayout } from '@/pages/_layouts/app';
import { AuthLayout } from '@/pages/_layouts/auth';
import { Dashboard } from '@/pages/App/dashboard/dashboard';
import { Orders } from '@/pages/App/orders/orders';
import { Plates } from '@/pages/App/Plates/plates';
import { SignIn } from '@/pages/Auth/sign-in';
import { SignUp } from '@/pages/Auth/sign-up';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
      { path: '/plates', element: <Plates /> },
    ],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
]);
