import React, { Component } from "react";
import Quote from "./Quote";
import Image from "./Image";
import Name from "./Name";
import Likes from "./Likes";

class Characters extends Component {
  render() {
    return (
      <div className="characters-grid">
        {this.props.characters.map((item) => (
          <div key={item.quote} className="quote">
            <div>
              <Name item={item} />
            </div>
            {item.characterDirection === "Right" ? (
              <>
                <div>
                  <Quote item={item} />
                </div>
                <div>
                  <Image item={item} />
                </div>
              </>
            ) : (
              <>
                <div>
                  <Image item={item} />
                </div>
                <div>
                  <Quote item={item} />
                </div>
              </>
            )}
            <h2>
              <button onClick={() => this.props.removeCharacter(item.quote)}>
                Remove
              </button>
            </h2>
            <Likes item={item} addLiked={this.props.addLiked} />
          </div>
        ))}
      </div>
    );
  }
}

export default Characters;
