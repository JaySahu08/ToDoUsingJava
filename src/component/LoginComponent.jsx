import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginComponent(){

    const [username , setUsername] = useState('')

    const [password , setPassword] = useState('')

    const [showSuccessMessage , setSuccessMessage] = useState(false)

    const [showErrorMessage , setErrorMessage] = useState(false)

    const navigate = useNavigate()
    
    function handelPassword(event){
        setPassword(event.target.value)
    }

    function handelUserNameChange(event){
        setUsername(event.target.value)
    }

    function handelSubmit(){
        if(username === 'jay' && password === 'dummy'){
            setSuccessMessage(true)
            setErrorMessage(false)
            navigate(`/home/${username}`)
        }else{
            setSuccessMessage(false)
            setErrorMessage(true)
        }
    }

    return(
        <div className="Login">
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authenticated Failed</div>}

            <div className="loginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handelUserNameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handelPassword}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handelSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}
