import React, { Component } from "react";
import "./dropdown.css";

class Dropdown extends Component {
  state = { showContent: false };

  handleClick = (e) => {
    e.preventDefault();

    this.setState({ showContent: !this.state.showContent });
  };

  render() {
    const { title, content } = this.props;
    const className = this.state.showContent ? "show" : "hide";
    const antiClassName = this.state.showContent ? "hide" : "show";
    return (
      <div className="dropdown">
        <button className="dropdown_btn" onClick={this.handleClick}>
          {title}
          <i className={"fas fa-chevron-down " + antiClassName}></i>
          <i className={"fas fa-chevron-up " + className}></i>
        </button>
        <div className={"dropdown_content " + className}>
          {Array.isArray(content) ? (
            <ul>
              {content.map((element) => (
                <li>{element}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    );
  }
}

export default Dropdown;
