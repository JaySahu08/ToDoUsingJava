import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Security/AuthContext.js'

export default function LogoutComponent(){
    const { logout } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        logout()
        navigate('/login', {replace: true})
    }, [logout, navigate])

    return(
        <div className="logoutComponent">
            <h1>YOU ARE LOGOUT</h1>
        </div>
    )
}
