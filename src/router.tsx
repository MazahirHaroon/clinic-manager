import { createBrowserRouter } from 'react-router';
import { Home, NotFound, SignUp } from '@pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);
