import React, { Component } from "react";
import "../../App.css";
import CourseItem from "./course-item";

class CourseItems extends Component {
  addListItems() {
    const list = this.props.courseList;
    if (list) {
      return list.map(item => <CourseItem key={item.code} info={item} />);
    }
  }

  render() {
    return (
      <div className="course-items">
        {this.addListItems()}
      </div>
    );
  }
}

export default CourseItems;
