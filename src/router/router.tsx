import { createBrowserRouter } from 'react-router'
// import Login from '../views/pages/Login'
import { ProtectedRoute } from './routes/ProtectedRoute'
import DummyClient from '../views/pages/DummyClient'
import DummyProfessional from '../views/pages/DummyProfessional'
import RegisterPage from '../views/pages/RegisterPage'

export const router = createBrowserRouter([
  { path: '/', element: <RegisterPage /> },
  {
    //Routes for the client, remember remove dummy view!
    element: <ProtectedRoute isClientRoute={true} />,
    children: [{ path: '/dummyClient', element: <DummyClient /> },   
    ],
  },
  {
    //Routes for the professional,remember remove dummy view!
    element: <ProtectedRoute isClientRoute={false} />,
    children: [{ path: '/dummyProfessional', element: <DummyProfessional /> }],
  },
])
