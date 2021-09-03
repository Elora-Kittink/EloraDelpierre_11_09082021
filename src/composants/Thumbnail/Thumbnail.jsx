import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./thumbnail.css";

class Thumbnail extends Component {
  url = "/housing/" + this.props.details.id;

  render() {
    return (
      <div className="thumbnail">
        <Link className="thumbnail_link" to={this.url}>
          <img className="thumbnail_img" src={this.props.details.cover} alt="couverture du logement"></img>
          <div className="thumbnail_title">{this.props.details.title}</div>
        </Link>
      </div>
    );
  }
}

export default Thumbnail;
