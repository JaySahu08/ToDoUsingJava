import NavbarComponent from './NavbarComponent.jsx'

export default function HeaderComponent(){
    return(
        <header className="header">
            <div className="headerContent">
                <div className="brand">
                    <span className="brandMark">T</span>
                    <span>Todo Manager</span>
                </div>
                <NavbarComponent/>
            </div>
        </header>
    )
}
