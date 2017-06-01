import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <h1 id="header-title">readIT</h1>
      </header>
    );
  }
}

// use React's <Link to=""> to navigate to course-list on click of header-title

export default Header;
