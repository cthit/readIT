import React, { Component } from "react";
import "../App.css";
import CourseItem from "../components/course-list/course-item";
import SearchBar from "../components/course-list/search-bar";
import CourseListHeader from "../components/course-list/header";

class CourseList extends Component {
  constructor() {
    super();
    this.state = {
      //courseList: []
      courseList: [
        {
          code: "TDA416",
          name: "Datastrukturer och algoritmer",
          coursePage: "https://chalmers.it",
          periods: ["LP3"],
          blocks: ["A"],
          type: "Year 2"
        },
        {
          code: "DAT255",
          name: "Datastrukturer och algoritmer",
          coursePage: "https://chalmers.it",
          periods: ["LP3"],
          blocks: ["A"],
          type: "Year 2"
        },
        {
          code: "TDA555",
          name: "Datastrukturer och algoritmer",
          coursePage: "https://chalmers.it",
          periods: ["LP3"],
          blocks: ["A"],
          type: "Year 2"
        }
      ]
    };
  }

  addListItems() {
    const list = this.state.courseList;
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
