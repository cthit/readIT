import React, { Component } from "react";
import "../../App.css";

class CourseListHeader extends Component {
  render() {
    return (
      <li className="course-list-header">
        <div className="code">Code</div>
        <div className="name">Name</div>
        <div className="course-page">Course Page</div>
        <div className="periods">Period(s)</div>
        <div className="blocks">Block(s)</div>
        <div className="type">Type</div>
      </li>
    );
  }
}

export default CourseListHeader;
