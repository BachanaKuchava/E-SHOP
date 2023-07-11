import { useContext } from 'react';
import { AuthContext, TAuthorizationStage } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { TLocalStorage } from '../types/LocalStorage';
interface Props {}

export function PrivateHeader(props: Props) {
    const {setStatus} = useContext(AuthContext);
    const handleLogout = () => {
        localStorage.removeItem(TLocalStorage.ACCESSTOKEN)
        setStatus(TAuthorizationStage.UNAUTHORIZED)
    }

    return (
        <>
        <header>
            <ul>
                <Link to="/">
                 <li>Home</li>
                </Link>
               
                <Link to='/login' onClick={() => handleLogout()}>
                <li>Logout</li>
                </Link>
                
                <li>Cart</li>
            </ul>
        </header>
        </>
    )
}

