import React, { Component } from "react";

class Likes extends Component {
  state = {};
  render() {
    return (
      <h2>
        <button
          onClick={() => this.props.addLiked(this.props.item.quote)}
          className="likes-button"
        >
          {this.props.item.liked ? "Liked" : "Like"}
        </button>
      </h2>
    );
  }
}

export default Likes;
