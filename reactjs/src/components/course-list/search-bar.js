import React, { Component } from "react";
import "../../App.css";

class SearchBar extends Component {
  render() {
    return (
      <input
        className="search-bar"
        type="search"
        placeholder="Search by code, name..."
      />
    );
  }
}

export default SearchBar;
