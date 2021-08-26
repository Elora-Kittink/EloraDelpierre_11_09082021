import React, { Component } from "react";
import "./rating.css";

class Rating extends Component {
  //   whichRate = () => {
  //     switch (this.props.rate) {
  //       case 0:
  //         return (
  //           <div>
  //             {" "}
  //             <i class="fas fa-star blank"></i>
  //             <i class="fas fa-star blank"></i>
  //             <i class="fas fa-star blank"></i>
  //             <i class="fas fa-star blank"></i>
  //             <i class="fas fa-star blank"></i>
  //           </div>
  //         );
  //       case 1:
  //         return (
  //           <div>
  //             <i class="fas fa-star full"></i>
  //             <i class="fas fa-star blank"></i>
  //             <i class="fas fa-star blank"></i>
  //             <i class="fas fa-star blank"></i>
  //             <i class="fas fa-star blank"></i>
  //           </div>
  //         );
  //       case 2:
  //         return (
  //           <div>
  //             <i class="fas fa-star full"></i>
  //             <i class="fas fa-star full"></i>
  //             <i class="fas fa-star blank"></i>
  //             <i class="fas fa-star blank"></i>
  //             <i class="fas fa-star blank"></i>
  //           </div>
  //         );
  //       case 3:
  //         return (
  //           <div>
  //             <i class="fas fa-star full"></i>
  //             <i class="fas fa-star full"></i>
  //             <i class="fas fa-star full"></i>
  //             <i class="fas fa-star blank"></i>
  //             <i class="fas fa-star blank"></i>
  //           </div>
  //         );
  //       case 4:
  //         return (
  //           <div>
  //             <i class="fas fa-star full"></i>
  //             <i class="fas fa-star full"></i>
  //             <i class="fas fa-star full"></i>
  //             <i class="fas fa-star full"></i>
  //             <i class="fas fa-star blank"></i>
  //           </div>
  //         );
  //       case 5:
  //         return (
  //           <div>
  //             <i class="fas fa-star full"></i>
  //             <i class="fas fa-star full"></i>
  //             <i class="fas fa-star full"></i>
  //             <i class="fas fa-star full"></i>
  //             <i class="fas fa-star full"></i>
  //           </div>
  //         );
  //       default:
  //         return (
  //           <div>
  //             <i class="fas fa-star blank"></i>
  //           </div>
  //         );
  //     }
  //   };

  render() {
    console.log(this.props.rate);
    return (
      <div>
        {(() => {
          switch (this.props.rate) {
            case "0":
              return (
                <div>
                  {" "}
                  <i className="fas fa-star blank"></i>
                  <i className="fas fa-star blank"></i>
                  <i className="fas fa-star blank"></i>
                  <i className="fas fa-star blank"></i>
                  <i className="fas fa-star blank"></i>
                </div>
              );

            case "1":
              return (
                <div>
                  <i className="fas fa-star full"></i>
                  <i className="fas fa-star blank"></i>
                  <i className="fas fa-star blank"></i>
                  <i className="fas fa-star blank"></i>
                  <i className="fas fa-star blank"></i>
                </div>
              );

            case "2":
              return (
                <div>
                  <i className="fas fa-star full"></i>
                  <i className="fas fa-star full"></i>
                  <i className="fas fa-star blank"></i>
                  <i className="fas fa-star blank"></i>
                  <i className="fas fa-star blank"></i>
                </div>
              );

            case "3":
              return (
                <div>
                  <i className="fas fa-star full"></i>
                  <i className="fas fa-star full"></i>
                  <i className="fas fa-star full"></i>
                  <i className="fas fa-star blank"></i>
                  <i className="fas fa-star blank"></i>
                </div>
              );

            case "4":
              return (
                <div>
                  <i className="fas fa-star full"></i>
                  <i className="fas fa-star full"></i>
                  <i className="fas fa-star full"></i>
                  <i className="fas fa-star full"></i>
                  <i className="fas fa-star blank"></i>
                </div>
              );

            case "5":
              return (
                <div>
                  <i className="fas fa-star full"></i>
                  <i className="fas fa-star full"></i>
                  <i className="fas fa-star full"></i>
                  <i className="fas fa-star full"></i>
                  <i className="fas fa-star full"></i>
                </div>
              );

            default:
              return (
                <div>
                  <i className="fas fa-star blank"></i>
                </div>
              );
          }
        })()}
      </div>
    );
  }
}

export default Rating;
