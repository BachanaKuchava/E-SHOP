import { AuthContext, TAuthorizationStage } from "../context/AuthContext"
import { PropsWithChildren, useEffect, useState } from "react"
import { TLocalStorage } from "../types/LocalStorage";
import jwt_decode from "jwt-decode";
export function AuthProvider({children}: PropsWithChildren) {
        const [status, setStatus] = useState<TAuthorizationStage>(TAuthorizationStage.UNAUTHORIZED)
    useEffect(() => {
        const token = localStorage.getItem("ACCESSTOKEN")
      if(token) {
        const decodedToken  = jwt_decode(token)
        setStatus(TAuthorizationStage.AUTHORIZED);
      }
        
    }, [])
    // console.log(status);
    
    
    return <AuthContext.Provider value={{status , setStatus}}>
                {children}
        </AuthContext.Provider>
}