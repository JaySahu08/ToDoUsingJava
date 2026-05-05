import { Link, useParams } from 'react-router-dom'

export default function WelcomeComponent(){
    const {username} = useParams()
    return(
        <div className="welcome">
            <h1>welcome {username}</h1>
            <h1>manage Your Todos = <Link to="/todos">hello! hello!</Link></h1>
        </div>
    )
}
