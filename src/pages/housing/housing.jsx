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
    console.log(housings[index].tags);
    return (
      <div>
        <Carousel pictures={housings[index].pictures} />

        <div>
          <div>
            {housings[index].title}
            {housings[index].location}
            <Tags tags={housings[index].tags} />
          </div>
          <Host host={housings[index].host} />
          <Rating rate={housings[index].rating} />
        </div>
        <div>
          <Dropdown title="Description" content={housings[index].description} />
          <Dropdown title="Equipements" content={housings[index].equipments} />
        </div>
      </div>
    );
  }
}

export default Housing;
