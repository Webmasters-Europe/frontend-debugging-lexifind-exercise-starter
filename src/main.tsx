import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Root from './pages/root.tsx';
import Favorites from './pages/favorites.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
