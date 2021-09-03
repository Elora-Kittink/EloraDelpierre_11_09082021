import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./error404.css";

class E404 extends Component {
  render() {
    return (
      <div className="error-div">
        <p className="number">404</p>
        <p className="oups">Oups! La page que vous demandez n'éxiste pas.</p>
        <Link className="link" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    );
  }
}

export default E404;
