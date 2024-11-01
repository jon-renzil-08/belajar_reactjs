import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/register';
import ErrorPage from './pages/404';

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
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
