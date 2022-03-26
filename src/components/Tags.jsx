import React from "react";
import { Link } from "react-router-dom";
import "./Tags.css";
const Tags = (props) => {
  return (
    <div className="tag">
      <Link
        to={props.route}
        style={{ textDecoration: "none" }}
      >{`${props.tag.toUpperCase()}`}</Link>
    </div>
  );
};

export default Tags;
