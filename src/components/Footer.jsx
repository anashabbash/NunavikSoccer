import React from "react";
import Tags from "./Tags";
import "./Footer.css";

function Footer1() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="columns">
          <div className="column">
            <h1>ABOUT US</h1>
            <p>
              Quis eiusmod laboris reprehenderit magna magna magna. Pariatur
              Lorem nostrud aliquip enim veniam. Do enim tempor dolore consequat
              aute fugiat. Mollit commodo sint enim nisi voluptate excepteur.
            </p>
          </div>

          <div className="column">
            <h1>LATEST NEWS</h1>
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </div>

          <div className="column">
            <h1>TAGS</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Tags str="goals" />
              <Tags str="matches" />
              <Tags str="match results" />
              <Tags str="news" />
              <Tags str="players" />
              <Tags str="post format" />
              <Tags str="results" />
              <Tags str="soccer" />
              <Tags str="sponsers" />
              <Tags str="store" />
              <Tags str="teams" />
              <Tags str="tournaments" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">Made with ❤️ by Bilal Al-Muhtadi</div>
    </div>
  );
}

export default Footer1;
