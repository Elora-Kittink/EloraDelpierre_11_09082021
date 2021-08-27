import React, { Component } from "react";
import "./carousel.css";

class Carousel extends Component {
  state = {
    picturesArray: this.props.pictures,

    currentIndex: 0,
  };

  handleClickRight = () => {
    /* si on est sur le dernier element du tableau alors on revient au premier */
    console.log("Index avant clic : " + this.state.currentIndex);
    console.log("longueur de tableau : ");
    console.log(this.state.picturesArray);
    if (this.state.currentIndex === this.state.picturesArray.length - 1) {
      this.setState({ currentIndex: 0 });
      console.log(this.state.picturesArray[this.state.currentIndex]);
      console.log(this.state.currentIndex);
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
      console.log(this.state.picturesArray[this.state.currentIndex]);
      console.log(this.state.currentIndex);
    }
  };

  handleClickLeft = () => {
    console.log("Index avant clic : " + this.state.currentIndex);
    console.log("longueur de tableau : ");
    console.log(this.state.picturesArray.length);
    if (this.state.currentIndex === 0) {
      this.setState({ currentIndex: this.state.picturesArray.length - 1 });
      console.log(this.state.picturesArray[this.state.currentIndex]);
      console.log(this.state.currentIndex);
    } else {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
      console.log(this.state.picturesArray[this.state.currentIndex]);
      console.log(this.state.currentIndex);
    }
  };

  render() {
    return (
      <div>
        <button>
          <i className="fas fa-chevron-left" onClick={this.handleClickLeft} aria-label="previous image"></i>
        </button>
        <img src={this.state.picturesArray[this.state.currentIndex]} alt="photos du logement"></img>
        <button>
          <i className="fas fa-chevron-right" onClick={this.handleClickRight} aria-label="next image"></i>
        </button>
      </div>
    );
  }
}

export default Carousel;
