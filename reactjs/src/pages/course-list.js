import React, { Component } from "react";
import request from "superagent";
import "../App.css";
import CourseItem from "../components/course-list/course-item";
import SearchBar from "../components/course-list/search-bar";
import CourseListHeader from "../components/course-list/header";

class CourseList extends Component {
  constructor() {
    super();
    this.state = {
      courseList: []
    };
  }

  request() {
    request
      .get(process.env.REACT_APP_API_HOST + "/courses")
      .accept("json")
      .end((err, res) => {
        if (res) {
          res = JSON.parse(res.text);
          this.setState({
            courseList: res.courses
          });
        }
      });
  }

  addListItems() {
    const list = this.state.courseList;
    if (list) {
      return list.map(item => <CourseItem key={item.code} info={item} />);
    }
  }

  componentWillMount() {
    this.request();
  }

  componentDidMount() {
    window.setInterval(
      function() {
        this.request();
      }.bind(this),
      50000
    );
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
