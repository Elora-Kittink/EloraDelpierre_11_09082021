import React, { Component } from "react";
import "./carousel.css";

class Carousel extends Component {
  state = {
    picturesArray: this.props.pictures,

    currentIndex: 0,
  };

  handleClickRight = () => {
    /* si on est sur le dernier element du tableau alors on revient au premier */
    if (this.state.currentIndex === this.state.picturesArray.length - 1) {
      this.setState({ currentIndex: 0 });
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  };

  handleClickLeft = () => {
    if (this.state.currentIndex === 0) {
      this.setState({ currentIndex: this.state.picturesArray.length - 1 });
    } else {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    }
  };

  render() {
    return (
      <div className="carousel">
        <button className="left_btn">
          <i className="fas fa-chevron-left" onClick={this.handleClickLeft} aria-label="previous image"></i>
        </button>
        <img
          className="carousel_img"
          src={this.state.picturesArray[this.state.currentIndex]}
          alt="photos du logement"
        ></img>
        <button className="right_btn">
          <i className="fas fa-chevron-right" onClick={this.handleClickRight} aria-label="next image"></i>
        </button>
      </div>
    );
  }
}

export default Carousel;
