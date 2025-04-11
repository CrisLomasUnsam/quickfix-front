import { createBrowserRouter } from 'react-router'
import { ProtectedRoute } from './routes/protectedRoute'
import PerfilTop from '../views/components/perfilUser/perfileFrame'
import ProfileComponent from '../views/components/profileComponent'
import SerchProfessionalFrame from '../views/pages/professionalSearchPage'
import Login from '../views/pages/login'
import UserSelectionPage from '../views/pages/userSelectionPage'
import RegisterPage from '../views/pages/registerPage'
import Frame from '../views/pages/frame'
import DummyProfessional from '../views/pages/dummyProfessional'
import CustomerHome from '../views/pages/customerHome'
import PasswordRestore from '../views/pages/passwordRestore'
import RequestServicePage from '../views/pages/requestServicePage'
import NotFoundPage from '../views/pages/notFoundPage'

export const router = createBrowserRouter([
  {
    element: <Frame isClient={false} />,
    children: [
      { path: '/', element: <Login /> },
      { path: 'userSelect', element: <UserSelectionPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'passwordRestore', element: <PasswordRestore /> },
    ],
  },
  {
    path: '/client',
    element: <Frame isClient={true} />,
    children: [
      {
        element: <ProtectedRoute isClientRoute={true} />,
        children: [
          { path: 'home', element: <CustomerHome /> },
          { path: 'requestService/:label', element: <RequestServicePage /> },
          { path: 'serchProfessional', element: <SerchProfessionalFrame /> },
          { path: 'service', element: <div>DummyService</div> },
          {
            element: <PerfilTop />,
            children: [{ path: 'profile', element: <ProfileComponent /> }],
          },
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
        children: [
          { path: 'dashboard', element: <DummyProfessional /> },
          { path: 'service', element: <div>DummyService</div> },
          { path: 'balance', element: <div>DummyBalance</div> },
          {
            element: <PerfilTop />,
            children: [{ path: 'profile', element: <ProfileComponent /> }],
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
