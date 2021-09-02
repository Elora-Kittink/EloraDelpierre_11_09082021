import React, { Component } from "react";
import logo_white from "../../assets/logo_white.png";
import rights from "../../assets/rights.png";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <img className="logo_white" src={logo_white} alt="Logo Kasa blanc"></img>
        </div>
        <div>
          <img className="rights" src={rights} alt="tout droits réservés"></img>
        </div>
      </div>
    );
  }
}

export default Footer;
