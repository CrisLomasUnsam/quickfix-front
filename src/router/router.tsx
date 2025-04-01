import { createBrowserRouter } from 'react-router'
import { ProtectedRoute } from './routes/ProtectedRoute'
import DummyClient from '../views/pages/DummyClient'
import DummyProfessional from '../views/pages/DummyProfessional'
import Login from '../views/pages/Login'

export const router = createBrowserRouter([
  { path: '/', element: <Login /> },
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
