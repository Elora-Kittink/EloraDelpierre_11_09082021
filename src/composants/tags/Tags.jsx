import React, { Component } from "react";
import { housings } from "../../housing-list";
import "./tags.css";

class Tags extends Component {
  render() {
    return (
      <div>
        {this.props.tags.map((tag) => {
          return <div className="tag">{tag}</div>;
        })}
      </div>
    );
  }
}

export default Tags;
