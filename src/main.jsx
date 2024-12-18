import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/register';
import ErrorPage from './pages/404';
import Products from './pages/products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hellow World</div>,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/products',
    element: <Products />
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
