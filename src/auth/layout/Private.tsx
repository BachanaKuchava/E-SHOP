import { Outlet } from "react-router-dom"
import { PrivateHeader } from "./PrivateHeader"

export function Private() {
   

    return (
        <>
        <PrivateHeader />
        <Outlet />
        </>
    )
}

