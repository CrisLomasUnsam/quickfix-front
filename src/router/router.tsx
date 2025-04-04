import { createBrowserRouter } from 'react-router'
import RegisterPage from '../views/pages/RegisterPage'
import { ProtectedRoute } from './routes/ProtectedRoute'
import Frame from '../views/pages/Frame'
import DummyClient from '../views/pages/DummyClient'
import DummyProfessional from '../views/pages/DummyProfessional'
import SeleccionUsuarioPage from '../views/pages/UserSelectionPage'

export const router = createBrowserRouter([
  { path: '/userPage', element: <SeleccionUsuarioPage /> },
  {
    path: '/',
    element: <Frame isClient={false} />,
    children: [{ path: 'register', element: <RegisterPage /> }],
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
