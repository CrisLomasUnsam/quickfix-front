import { createBrowserRouter } from 'react-router'
import { ProtectedRoute } from './routes/protectedRoute'
import PerfilTop from '../views/components/perfilUser/perfileFrame'
import SerchProfessionalFrame from '../views/pages/professionalSearchPage'
import Login from '../views/pages/login'
import UserSelectionPage from '../views/pages/userSelectionPage'
import RegisterPage from '../views/pages/registerPage'
import Frame from '../views/pages/frame'
import DummyClient from '../views/pages/dummyClient'
import DummyProfessional from '../views/pages/dummyProfessional'

export const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path:'/perfilFrame', element:<PerfilTop/> },
  
  {
    element: <Frame isClient={false} />,
    children: [
      { path: '/', element: <Login /> },
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
        children: [{ path: 'home', element: <DummyClient /> },
          { path:'serchProfessional', element:<SerchProfessionalFrame/>},
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
