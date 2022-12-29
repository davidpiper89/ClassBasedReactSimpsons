import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Characters from "./components/Characters";
import Sort from "./components/Sort";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );
    this.setState({ data });
  }

  onInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  sortInput = (e) => {
    this.setState({ [e.target.name]: Number(e.target.value) });
  };

  addCharacter = () => {
    const indexOf = this.state.data.findIndex(
      (item) => item.quote === this.state.quote
    );

    if (indexOf > -1) {
      return;
    }

    const copy = { ...this.state };
    copy.data.unshift({
      quote: this.state.quote,
      character: this.state.character,
      image: "",
      characerDirection: "Left",
    });
    this.setState({ ...copy, character: "", quote: "" });
  };

  addLiked = (quote) => {
    const indexOf = this.state.data.findIndex((index) => index.quote === quote);

    const copy = { ...this.state };
    copy.data[indexOf].liked = !copy.data[indexOf].liked;
    this.setState({ ...copy });
  };

  removeCharacter = (quote) => {
    const indexOf = this.state.data.findIndex((item) => {
      return item.quote === quote;
    });
    const copy = { ...this.state };
    copy.data.splice(indexOf, 1);
    this.setState({ ...copy });
  };

  render() {
    const characters = this.state.data;
    if (!characters) return <p>loading</p>;

    let total = 0;
    let copy = [...characters];

    copy.forEach((item) => {
      if (item.liked) total += 1;
    });

    if (this.state.search) {
      copy = copy.filter((item) => {
        return item.character
          .toLowerCase()
          .includes(this.state.search.toLowerCase().trim());
      });
    }

    switch (this.state.sort) {
      case 1:
        copy.sort((a, b) => {
          if (a.character > b.character) return 1;
          if (a.character < b.character) return -1;
          return 0;
        });
        break;
      case 2:
        copy.sort((a, b) => {
          if (a.character < b.character) return 1;
          if (a.character > b.character) return -1;
          return 0;
        });
        break;
      case 3:
        copy.sort((a, b) => {
          if (a.quote > b.quote) return 1;
          if (a.quote < b.quote) return -1;
          return 0;
        });
        break;
      case 4:
        copy.sort((a, b) => {
          if (a.quote < b.quote) return 1;
          if (a.quote > b.quote) return -1;
          return 0;
        });
        break;

      default:
        break;
    }

    return (
      <>
        <h1>Simpsons quotes</h1>
        <p>Total No. of Likes: {total}</p>
        <h2 onInput={this.onInput}>
          Add Character:
          <input
            value={this.state.character}
            type="text"
            name="character"
          ></input>
          and quote:
          <input value={this.state.quote} type="text" name="quote"></input>
          <button onClick={this.addCharacter}>Add</button>
        </h2>

        <h2 onInput={this.onInput}>
          Search: <input type="text" name="search"></input>
        </h2>
        <Sort onInput={this.sortInput} />
        {
          <Characters
            characters={copy}
            removeCharacter={this.removeCharacter}
            addLiked={this.addLiked}
          />
        }
      </>
    );
  }
}

export default App;
