import React, { useState, useEffect } from "react";
import Courses from "./Courses";

const Header = () => {
  return (
    <header id="header">
      <h1 id="header-title">readIT</h1>
    </header>
  );
};

const Layout = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    requestData();
  }, []);

  const requestData = () => {
    fetch("/courses")
      .then(response => response.json())
      .then(courses => {
        setCourses(courses);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="layout">
      <Header />
      <Courses courseList={courses} />
    </div>
  );
};

export default Layout;
