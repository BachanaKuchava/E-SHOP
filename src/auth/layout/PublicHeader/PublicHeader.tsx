import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

function PublicHeader(props: Props) {
    const {} = props

    return (
        <>
        <header>
            <ul>
                <Link to="/">
                 <li>Home</li>
                </Link>
               
                <Link to='/login'>
                <li>Login</li>
                </Link>
                
                <li>Cart</li>
            </ul>
        </header>
        </>
    )
}

export default PublicHeader
