import React, {Component} from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import "./error404.css"

class E404 extends React.Component {
    render(){
        return <div>
            <p className="number">404</p>
            <p className="oups">Oups! La page que vous demandez n'éxiste pas.</p>
            <a className="link" href="*">Retourner sur la page d'accueil</a>
        </div>
    }
}

export default E404;