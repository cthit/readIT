import React, { Component } from "react";
import "../../App.css";

class SearchBar extends Component {
  render() {
    const { setQuery } = this.props;
    return (
      <input
        onChange={e => setQuery(e.target.value)}
        className="search-bar"
        type="search"
        placeholder="Search by code, name..."
      />
    );
  }
}

export default SearchBar;
