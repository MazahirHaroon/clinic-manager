import { createBrowserRouter } from 'react-router';
import { Welcome, NotFound, SignUp, Login, Profile, Dashboard } from '@pages';
import { Layout } from '@clinic-ui';

export const router = createBrowserRouter([
  {
    path: '/welcome',
    element: <Welcome />,
    errorElement: <NotFound />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);
