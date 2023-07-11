import React from 'react'
import { Outlet } from 'react-router-dom';
import PublicHeader from './PublicHeader/PublicHeader';
interface Props {}

 export function Public(props: Props) {
    const {} = props

    return (
        <div>
          <PublicHeader />
          <Outlet />  
        </div>
        
        
    )
}

  
