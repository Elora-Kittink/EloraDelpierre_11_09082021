import React, { Component } from "react";
import "./thumbnail.css";

class Thumbnail extends Component {
  url = "/housing/" + this.props.details.id;

  render() {
    return (
      <div className="thumbnail">
        <a href={this.url}>
          <img className="thumbnail_img" src={this.props.details.cover} alt="couverture du logement"></img>
          <div className="thumbnail_title">{this.props.details.title}</div>
        </a>
      </div>
    );
  }
}

export default Thumbnail;
