import { createBrowserRouter } from 'react-router'
import { ProtectedRoute } from './routes/protectedRoute'
import PerfilTop from '../views/components/perfilUser/perfileFrame'
import ProfileComponent from '../views/components/profileComponent'
import SerchProfessionalFrame from '../views/pages/professionalSearchPage'
import Login from '../views/pages/login'
import UserSelectionPage from '../views/pages/userSelectionPage'
import RegisterPage from '../views/pages/registerPage'
import Frame from '../views/pages/frame'
import DummyClient from '../views/pages/dummyClient'
import DummyProfessional from '../views/pages/dummyProfessional'

export const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  {
    path: '/perfilFrame',
    element: <PerfilTop />,
    children: [{ path: 'profile', element: <ProfileComponent /> }],
  },
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
        children: [
          { path: 'home', element: <DummyClient /> },
          { path: 'serchProfessional', element: <SerchProfessionalFrame /> },
        ],
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
