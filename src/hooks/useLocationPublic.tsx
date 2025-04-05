import { useLocation } from 'react-router'

function useLocationPublic() {
  const location = useLocation()
  const isPublicRoute =
    location.pathname === '/' ||
    location.pathname === '/userSelect' ||
    location.pathname === '/register' ||
    location.pathname === '/recovery-password'
  return { isPublicRoute }
}

export default useLocationPublic
