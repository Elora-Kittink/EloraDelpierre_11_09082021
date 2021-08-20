import React from 'react'
import { Link } from 'react-router-dom'
import logo from '.././assets/logo.jpg'

class Header extends React.Component {
    render(){
        return (
            <header>
                <Link to="/">
                <img className="logo" src={logo} alt="Logo Kasa" />
                </Link>
                <nav>
					<Link to="/">Accueil</Link>
					<Link to="/about">A propos</Link>
				</nav>
            </header>
        ) 
    }
}

export default Header;
