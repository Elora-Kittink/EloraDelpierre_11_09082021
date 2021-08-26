import React, { Component } from "react";
import "./tags.css";

class Tags extends Component {
  render() {
    return (
      <div>
        {this.props.tags.map((tag) => {
          return (
            <div key={tag.index} className="tag">
              {tag}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Tags;
