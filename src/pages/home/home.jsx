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
        <Banner image={home} title={"chez vous, partout et ailleurs"} />
        <div className="thumbnails">
          {housings.map((housing) => (
            <Thumbnail details={housing} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
