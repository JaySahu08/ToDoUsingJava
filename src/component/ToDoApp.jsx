import './ToDoApp.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LoginComponent from './LoginComponent.jsx'
import HomeComponent from './HomeComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ListToDoComponent from './ListToDoComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import AuthProvider, { useAuth } from './Security/AuthContext.js'

function AuthenticatedRoute({children}){
    const authContext = useAuth()

    if(authContext.isAuthenticated){
        return children
    }

    return <Navigate to="/login" replace />
}

export default function ToDoApp(){
    return(
        <div className='ToDoApp'>
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <main className="mainContent">
                        <Routes>
                            <Route path='/' element={<LoginComponent />}></Route>
                            <Route path='/login' element={<LoginComponent />}></Route>
                            <Route path='/home' element={
                                <AuthenticatedRoute>
                                    <HomeComponent />
                                </AuthenticatedRoute>
                            }></Route>
                            <Route path='/home/:username' element={
                                <AuthenticatedRoute>
                                    <HomeComponent />
                                </AuthenticatedRoute>
                            }></Route>
                            <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
                            <Route path='/todos' element={
                                <AuthenticatedRoute>
                                    <ListToDoComponent />
                                </AuthenticatedRoute>
                            }></Route>
                            <Route path='/logout' element={<LogoutComponent/>}/>
                            <Route path='*' element={<ErrorComponent />}/>
                        </Routes>
                    </main>
                    <FooterComponent/>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}
