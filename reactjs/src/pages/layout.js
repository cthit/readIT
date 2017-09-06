import React, { Component } from "react";
import Header from "../components/layout/header";
import CourseList from "./course-list";
import request from "superagent";
import "../App.css";

class Layout extends Component {
  state = {
    courseList: []
  };

  componentWillMount() {
    this.requestData();
  }

  requestData = () => {
    request
      .get(process.env.REACT_APP_API_HOST + "/courses")
      .accept("json")
      .end((err, res) => {
        if (res) {
          this.setState({
            courseList: JSON.parse(res.text).courses
          });
        }
      });
  };

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
