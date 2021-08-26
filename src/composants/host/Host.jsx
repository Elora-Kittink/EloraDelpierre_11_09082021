import React, { Component } from "react";

class Host extends Component {
  render() {
    return (
      <div>
        <p>{this.props.host.name}</p>
        <img src={this.props.host.picture} alt="propriétaire"></img>
      </div>
    );
  }
}

export default Host;
