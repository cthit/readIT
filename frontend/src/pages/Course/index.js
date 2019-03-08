import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import DisplayCourse from "../../components/DisplayCourse";

const Course = ({ match }) => {
  const [course, setCourse] = useState({});
  const fetchCourse = () => {
    fetch(`/course/${match.params.code}`)
      .then(response => response.json())
      .then(course => setCourse(course))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  const { name, code, course_page, periods, blocks } = course;
  return (
    <main>
      <DisplayCourse
        name={name}
        code={code}
        course_page={course_page}
        periods={periods}
        blocks={blocks}
      />
    </main>
  );
};

export default withRouter(Course);
