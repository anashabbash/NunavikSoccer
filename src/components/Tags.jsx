import React from "react";
import "./Tags.css";
const Tags = (props) => {
  return <div className="tag">{`${props.str.toUpperCase()}`}</div>;
};

export default Tags;
