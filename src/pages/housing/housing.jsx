import React, { Component } from "react";
import { housings } from "../../housing-list";
import Tags from "../../composants/tags/Tags";
import Host from "../../composants/host/Host";
import Carousel from "../../composants/carousel/Carousel";
import Rating from "../../composants/Rating/Rating";
import Dropdown from "../../composants/Dropdown/Dropdown";
import "./housing.css";

class Housing extends Component {
  // state = {
  //     housing: {housings.map((housing) => () }
  // }

  render() {
    const urlSplited = window.location.pathname.split("/");
    const id = urlSplited[2];
    const index = housings.findIndex((housing) => {
      return housing.id === id;
    });
    return (
      <div>
        <Carousel pictures={housings[index].pictures} />

        <div className="housing_info">
          <div className="title-location-tags">
            <p className="housing_title">{housings[index].title}</p>
            <p className="housing_location">{housings[index].location}</p>
            <Tags tags={housings[index].tags} />
          </div>
          <div className="host-rating">
            <Host host={housings[index].host} />
            <Rating rate={housings[index].rating} />
          </div>
        </div>
        <div className="housing_dropdown">
          <Dropdown title="Description" content={housings[index].description} />
          <Dropdown title="Equipements" content={housings[index].equipments} />
        </div>
      </div>
    );
  }
}

export default Housing;
