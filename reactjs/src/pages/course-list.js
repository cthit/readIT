import React, { Component } from "react";
import "../App.css";
import CourseItems from "../components/course-list/course-items";
import SearchBar from "../components/course-list/search-bar";
import CourseListHeader from "../components/course-list/header";

class CourseList extends Component {
  state = {
    query: ""
  };

  setQuery = query => {
    this.setState({ query });
  };

  render() {
    const { courseList } = this.props;
    const { query } = this.state;

    const filteredSearchList = courseList.filter(c => {
      return (
        c.code.toLowerCase().includes(query.toLowerCase()) +
        c.name.toLowerCase().includes(query.toLowerCase()) +
        c.type.toLowerCase().includes(query.toLowerCase()) +
        c.periods.includes(query.toUpperCase())
      );
    });

    return (
      <main className="course-list">
        <SearchBar setQuery={this.setQuery} value={query} />
        <CourseListHeader />
        <CourseItems courseList={filteredSearchList} />
      </main>
    );
  }
}

export default CourseList;
