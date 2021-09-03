import React, { Component } from "react";
import Banner from "../../composants/Banner/Banner";
import Dropdown from "../../composants/Dropdown/Dropdown";
import about from "../../assets/about.jpg";
import "./about.css";

class About extends Component {
  fiability =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
  respect =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  service =
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
  security =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  render() {
    return (
      <div>
        <Banner className="about_banner" image={about} />
        <div className="dropdown_box">
          <Dropdown title="Fiabilité" content={this.fiability} />
          <Dropdown title="Respect" content={this.respect} />
          <Dropdown title="Service" content={this.service} />
          <Dropdown title="Sécurité" content={this.security} />
        </div>
      </div>
    );
  }
}

export default About;
