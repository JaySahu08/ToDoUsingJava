import './ToDoApp.css'
import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate, useParams , Link} from 'react-router-dom'

export default function ToDoApp(){
    return(
        <div className='ToDoApp'>
            <HeaderComponent/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
                    <Route path='/todos' element={<ListToDoComponent />}></Route>
                    <Route path='*' element={<ErrorComponent />}/>
                    <Route path='/logout' element={<LogoutComp/>}/>

                </Routes>
            </BrowserRouter>
            <FooterComponent/>
        </div>
    )
}

function LoginComponent(){

    const [username , setUsername] = useState('in28minutes')

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
            navigate(`/welcome/${username}`)
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

function WelcomeComponent(){
    const {username} = useParams()
    return(
        <div className="welcome">
            <h1>welcome {username}</h1>
            <h1>manage Your Todos = <Link to="/todos">hello! hello!</Link></h1>
        </div>
    )
}

function ErrorComponent(){
    return(
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>
                Apologies for error
            </div>
        </div>
    )
}

function ListToDoComponent(){
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth() , today.getDay())

    const todos = [
        {id: 1 , description : 'Succession' ,done: true , targetdate: targetDate },
        {id: 2 , description : 'SuperNatural' ,done: true , targetdate: targetDate}
    ]
    return(
        <div className="ListToDoComponent">
            <h1>Things You Want To Do!</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>is done</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>{
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetdate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function HeaderComponent(){
    return(
        <div className="header">
            header<hr/>
        </div>
    )
} 

function FooterComponent(){
    return(
        <div className="footer">
            <hr/>footer
        </div>
    )
}
 
function LogoutComp(){
    return(
        <div className="logoutComponent">
            <h1>YOU ARE LOGOUT</h1>
        </div>
    )
}
