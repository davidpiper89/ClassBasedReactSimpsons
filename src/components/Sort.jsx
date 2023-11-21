import React, { Component } from "react";

class Sort extends Component {
  state = {
    options: [
      { id: 0, name: "Select..." },
      { id: 1, name: "Character Ascending" },
      { id: 2, name: "Character Descending" },
      { id: 3, name: "Quote Ascending" },
      { id: 4, name: "Quote Descending" },
    ],
  };

  render() {
    return (
      <>
        <label>Sort By..</label>
        <select name="sort" onInput={this.props.onInput}>
          {this.state.options.map((option) => (
            <option value={option.id}>{option.name} </option>
          ))}
        </select>
      </>
    );
  }
}

export default Sort;
