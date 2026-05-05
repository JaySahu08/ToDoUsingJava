import { NavLink } from 'react-router-dom'

export default function NavbarComponent(){
    return(
        <nav className="navbar" aria-label="Main navigation">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/todos">Todos</NavLink>
            <NavLink to="/logout">Logout</NavLink>
        </nav>
    )
}
