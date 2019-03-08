import React, { useState, useEffect } from "react";
import CourseItems, { SearchBar, CourseListHeader } from "../../components/CourseList";

const Courses = () => {
  const [query, setQuery] = useState("");
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

  const filteredSearchList = courses.filter(
    ({ code, name, type, periods }) => (
        code.toLowerCase().includes(query.toLowerCase()) +
        name.toLowerCase().includes(query.toLowerCase()) +
        type.toLowerCase().includes(query.toLowerCase()) +
        periods.includes(query.toUpperCase())
      )
  );

  return (
    <main className="course-list">
      <SearchBar setQuery={setQuery} value={query} />
      <CourseListHeader />
      <CourseItems courseList={filteredSearchList} />
    </main>
  );
};

export default Courses;
