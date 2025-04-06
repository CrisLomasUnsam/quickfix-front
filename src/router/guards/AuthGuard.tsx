import { ReactNode, useState } from "react";
import { AuthContext } from "../../context/authContext";

export const AuthGuard = ({children}: {children: ReactNode}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const [isClient, setIsClient] = useState<boolean |null>(null)

    // Persistir el estado de autenticación en el sessionStorage?
    // useEffect(() => {
    //     const storedUserId = sessionStorage.getItem("userId")
    //     const storedIsClient = sessionStorage.getItem("isClient")
    
    //     if (storedUserId && storedIsClient !== null) {
    //       setIsAuthenticated(true);
    //       setIsClient(storedIsClient === "true")
    //     }
    //   }, [])

    const login = (id: number, isClient: boolean) => {
        setIsAuthenticated(true)
        setIsClient(isClient)
        sessionStorage.setItem('userId', id.toString())
        sessionStorage.setItem('isClient', isClient.toString())
    }

    const logout = () => {
        setIsAuthenticated(false)
        setIsClient(null)
        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('isClient')
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, isClient: isClient ?? false, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}