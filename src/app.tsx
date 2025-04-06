import { RouterProvider } from 'react-router'
import './styles/globals.css'
import { router } from './router/router'
import { AuthGuard } from './router/guards/authGuard'
import { ToastContainer } from 'react-toastify'

function App() {
  //Router
  return (
    <>
      <AuthGuard>
          <RouterProvider router={router} />
          <ToastContainer />
      </AuthGuard>
    </>
  )
}

export default App
