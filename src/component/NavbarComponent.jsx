import { NavLink } from 'react-router-dom'
import { useAuth } from './Security/AuthContext.js'

export default function NavbarComponent(){
    const authContext = useAuth()

    return(
        <nav className="navbar" aria-label="Main navigation">
            {authContext.isAuthenticated && <NavLink to="/home">Home</NavLink>}
            {!authContext.isAuthenticated && <NavLink to="/login">Login</NavLink>}
            {authContext.isAuthenticated && <NavLink to="/todos">Todos</NavLink>}
            {authContext.isAuthenticated && <NavLink to="/logout">Logout</NavLink>}
        </nav>
    )
}
