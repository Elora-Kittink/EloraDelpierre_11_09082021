import React, {Component} from 'react'
import logo_white from '.././assets/logo.jpg'
import rights from '.././assets/rights.jpg'

class Footer extends React.Component {

render(){
    return(
        <div className="footer_wrapper">       
            <p>FOOTER</p>
            <img className="logo_white" src={logo_white} alt="Logo Kasa blanc"></img>
            <img className="rights" src={rights} alt="tout droits réservés"></img>
        </div>
    ) 
}


}

export default Footer;