import React, { Component } from "react";
import "../../App.css";

function appendListItems(list) {
  if (!list) {
    return "empty*";
  }
  let text = "";
  for (var i = 0; i < list.length; i++) {
    text += list[i];
    if (i !== list.length - 1) {
      text += ", ";
    }
  }
  return text;
}

class CourseItem extends Component {
  render() {
    const { code, name, coursePage, periods, blocks, type } = this.props.info;
    return (
      <li className="course-item">
        <div className="code">
          {code}
        </div>
        <div className="name">
          {name}
        </div>
        <div className="course-page">
          <a href={coursePage} target="_blank" rel="noopener noreferrer">
            Visit page
          </a>
        </div>
        <div className="periods">
          {appendListItems(periods)}
        </div>
        <div className="blocks">
          {appendListItems(blocks)}
        </div>
        <div className="type">
          {type}
        </div>
      </li>
    );
  }
}

export default CourseItem;
