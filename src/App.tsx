import { RouterProvider } from 'react-router'
import './styles/globals.css'
import { router } from './router/router'
import { AuthGuard } from './router/guards/AuthGuard'

function App() {
  //Router
  return (
    <>
      <AuthGuard>
        <RouterProvider router={router} />
      </AuthGuard>
    </>
  )
}

export default App
