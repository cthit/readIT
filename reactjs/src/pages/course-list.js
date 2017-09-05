import React, { Component } from "react";
import "../App.css";
import CourseItem from "../components/course-list/course-item";
import SearchBar from "../components/course-list/search-bar";
import CourseListHeader from "../components/course-list/header";

class CourseList extends Component {
  addListItems() {
    const list = this.props.courseList;
    if (list) {
      return list.map(item => <CourseItem key={item.code} info={item} />);
    }
  }

  render() {
    return (
      <main className="course-list">
        <SearchBar />
        <CourseListHeader />
        {this.addListItems()}
      </main>
    );
  }
}

export default CourseList;
