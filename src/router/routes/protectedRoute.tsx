import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../../hooks/useAuth'

export const ProtectedRoute = ({isClientRoute}: {isClientRoute: boolean}) => {
  const { isAuthenticated, isClient } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  if (isClient !== isClientRoute) {
    return <Navigate to={isClient ? "/dummyClient" : "/dummyProfessional"} replace />
  }

  return (
    <>
      <Outlet />
    </>
  )
}
