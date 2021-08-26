import React, { Component } from "react";
import { housings } from "../../housing-list";
import Tags from "../../composants/tags/Tags";
import Host from "../../composants/host/Host";
import "./housing.css";
import Rating from "../../composants/Rating/Rating";

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
        {/* <Carousel/> */}

        <div>
          <div>
            {housings[index].title}
            {housings[index].location}
            <Tags tags={housings[index].tags} />
          </div>
          <Host host={housings[index].host} />
          <Rating rate={housings[index].rating} />
        </div>
      </div>
    );
  }
}

export default Housing;
