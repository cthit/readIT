import React from "react";
import './CourseList.scss';

export const SearchBar = ({ setQuery, value }) => (
  <input
    value={value}
    onChange={e => setQuery(e.target.value)}
    className="search-bar"
    type="search"
    placeholder="Search by code, name..."
  />
);

export const CourseListHeader = () => (
  <li className="course-list-header">
    <div className="code">Code</div>
    <div className="name">Name</div>
    <div className="course-page">Course Page</div>
    <div className="periods">Period(s)</div>
    <div className="blocks">Block(s)</div>
    <div className="type">Type</div>
  </li>
);

const CourseItem = ({
  info: { code, name, course_page, periods = [], blocks = [], type }
}) => {
  return (
    <li className="course-item">
      <div className="code">{code}</div>
      <div className="name">{name}</div>
      <div className="course-page">
        <a href={course_page} target="_blank" rel="noopener noreferrer">
          Visit page
        </a>
      </div>
      <div className="periods">{periods.join(", ")}</div>
      <div className="blocks">{blocks.join(", ")}</div>
      <div className="type">{type}</div>
    </li>
  );
};

const CourseItems = ({ courseList = [] }) => {
  const listItems = courseList.map(item => (
    <CourseItem key={item.code} info={item} />
  ));
  return <div className="course-items">{listItems}</div>;
};

export default CourseItems;
