import React, { Component } from "react";
import Quote from "./Quote";
import Image from "./Image";
import Name from "./Name";
import Likes from "./Likes";

class Characters extends Component {

  render() {

    


    return this.props.characters.map((item) => {
      return (
        <div key={item.quote} className="quote">
          <div>
            <Name item={item} />
          </div>
          <div>
            <Image item={item} />
          </div>
          <div>
            <Quote item={item} />
          </div>
          <h2>
            <button onClick={() => this.props.removeCharacter(item.quote)}>
              Remove
            </button>
          </h2>
          <Likes item={item} key={item.quote} addLiked={this.props.addLiked} />
        </div>
      );
    });
  }
}

export default Characters;
