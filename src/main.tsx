import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router'

import './index.css'

import Home from '@components/Home';
import Signup from '@components/Signup';
import NotFound from '@components/common/NotFound';

const router = createBrowserRouter([{
  path: "/",
  element: <Home />,
  errorElement: <NotFound />
}, {
  path: "/Signup",
  element: <Signup />
}
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}