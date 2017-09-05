import React, { Component } from "react";
import Header from "../components/layout/header";
import CourseList from "./course-list";
import request from "superagent";
import "../App.css";

class Layout extends Component {
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

  componentWillMount() {
    this.request();
  }

  render() {
    const { courseList: COURSELIST } = this.state;
    return (
      <div className="layout">
        <Header />
        <CourseList courseList={COURSELIST} />
      </div>
    );
  }
}

export default Layout;
