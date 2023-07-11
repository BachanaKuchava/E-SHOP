import { type } from "os";
import { createContext } from "react";

export enum TAuthorizationStage {
    AUTHORIZED = 'authorized',
    UNAUTHORIZED= 'unauthorized'    
}

type AuthContextValue = {
    status: TAuthorizationStage;
    setStatus: React.Dispatch<React.SetStateAction<TAuthorizationStage>>;
}

export const AuthContext = createContext<AuthContextValue>({
    status: TAuthorizationStage.UNAUTHORIZED,
    setStatus: () => {}
});