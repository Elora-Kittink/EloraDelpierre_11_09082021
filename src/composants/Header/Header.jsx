import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import "./header.css"

class Header extends React.Component {
    render(){
        return (
            <header className="header">
                <Link to="/">
                <img className="header_logo" src={logo} alt="Logo Kasa" />
                </Link>
                <nav className="header_nav">
					<Link className="header_nav-accueil" to="/">Accueil</Link>
					<Link className="header_nav-about" to="/about">A propos</Link>
				</nav>
            </header>
        ) 
    }
}

export default Header;
