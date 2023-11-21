import React, { Component } from "react";

class Image extends Component {
  render() {
    return <img src={this.props.item.image} alt="simpson"></img>;
  }
}

export default Image;
