import React, { Component } from "react";
import Banner from "../../composants/Banner/Banner";
import Thumbnail from "../../composants/Thumbnail/Thumbnail";
import { housings } from "../../housing-list";
import home from "../../assets/home.jpg";

import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Banner className="home_banner" image={home} title={"chez vous, partout et ailleurs"} />
        <div className="thumbnails">
          {housings.map((housing, index) => (
            <Thumbnail details={housing} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
