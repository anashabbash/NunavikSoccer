import React from "react";
import ResourcesTabs from "./ResourcesTabs";
import "./Resources.css";

function Resources() {
  return (
    <div className="content" id="resources" style={{ textJustify: "center" }}>
      <h1>Resources</h1>
      <ResourcesTabs />
    </div>
  );
}

export default Resources;
