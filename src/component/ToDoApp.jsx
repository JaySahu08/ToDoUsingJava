import './ToDoApp.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LoginComponent from './LoginComponent.jsx'
import HomeComponent from './HomeComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ListToDoComponent from './ListToDoComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'

export default function ToDoApp(){
    return(
        <div className='ToDoApp'>
            <BrowserRouter>
                <HeaderComponent/>
                <main className="mainContent">
                    <Routes>
                        <Route path='/' element={<LoginComponent />}></Route>
                        <Route path='/login' element={<LoginComponent />}></Route>
                        <Route path='/home' element={<HomeComponent />}></Route>
                        <Route path='/home/:username' element={<HomeComponent />}></Route>
                        <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
                        <Route path='/todos' element={<ListToDoComponent />}></Route>
                        <Route path='*' element={<ErrorComponent />}/>
                        <Route path='/logout' element={<LogoutComponent/>}/>

                    </Routes>
                </main>
                <FooterComponent/>
            </BrowserRouter>
        </div>
    )
}
