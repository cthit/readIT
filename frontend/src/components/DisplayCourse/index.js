import React from "react";

const DisplayCourse = ({
  name,
  code,
  course_page,
  periods = [],
  blocks = []
}) => (
  <div className="display-course">
    <h2>
      {name} ({code})
    </h2>
    <a href={course_page} target="_blank">
      Visit course page
    </a>
    <div>Periods: {periods.join(", ")}</div>
    <div>Blocks: {blocks.join(", ")}</div>
  </div>
);

export default DisplayCourse;
