import React, { useState } from "react";
import CourseItems, { SearchBar, CourseListHeader } from "../../components/CourseList";

const Courses = ({ courseList }) => {
  const [query, setQuery] = useState("");

  const filteredSearchList = courseList.filter(
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
