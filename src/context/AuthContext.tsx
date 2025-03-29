import { createContext } from 'react'

type authContextType = {
  isAuthenticated: boolean
  isClient: boolean
  login: (id: number, isClient: boolean) => void
  logout: () => void
}

export const AuthContext = createContext<authContextType | undefined>(undefined)
