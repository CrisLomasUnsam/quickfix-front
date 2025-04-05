import { createBrowserRouter } from 'react-router'
import RegisterPage from '../views/pages/RegisterPage'
import { ProtectedRoute } from './routes/ProtectedRoute'
import Frame from '../views/pages/Frame'
import DummyClient from '../views/pages/DummyClient'
import DummyProfessional from '../views/pages/DummyProfessional'
import UserSelectionPage from '../views/pages/UserSelectionPage'
import Login from '../views/pages/Login'
import PerfilTop from '../views/components/perfilUser/perfileFrame'

export const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path:'/perfilFrame', element:<PerfilTop/> },
/*
  {path:'/perfilFrame',
    element: <Frame isClient={false} />,
    children: [
      { path: 'userSelect', element: <UserSelectionPage /> },
      { path:'perfilFrame', element:<PerfilTop/> },
      { path: 'register', element: <RegisterPage /> },
    ],

  },*/
  {
    path: '/',
    element: <Frame isClient={false} />,
    children: [
      { path: 'userSelect', element: <UserSelectionPage /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },
  {
    path: '/client',
    element: <Frame isClient={true} />,
    children: [
      {
        element: <ProtectedRoute isClientRoute={true} />,
        children: [{ path: 'home', element: <DummyClient /> }],
      },
    ],
  },
  {
    path: '/pro',
    element: <Frame isClient={false} />,
    children: [
      {
        element: <ProtectedRoute isClientRoute={false} />,
        children: [{ path: 'dashboard', element: <DummyProfessional /> }],
      },
    ],
  },
])
