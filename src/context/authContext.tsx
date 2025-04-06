import { createContext } from 'react'

type AuthContextType = {
  isAuthenticated: boolean
  isClient: boolean
  login: (id: number, isClient: boolean) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
