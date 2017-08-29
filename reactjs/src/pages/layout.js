import React, { Component } from "react";
import Header from "../components/layout/header";
import CourseList from "./course-list";
import "../App.css";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <CourseList />
      </div>
    );
  }
}

export default Layout;
