import React from "react";
import Tags from "./Tags";
import { NavLink } from "react-router-dom";
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
            <h1>SECTIONS</h1>
            <ul>
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/resources">RESOURCES</NavLink>
              </li>
              <li>
                <NavLink to="/events">EVENTS</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">ABOUT US</NavLink>
              </li>
              <li>
                <NavLink to="/contactus">CONTACT US</NavLink>
              </li>
            </ul>
          </div>

          <div className="column">
            <h1>TAGS</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Tags tag="Movment Preparation" route="/resources" />
              <Tags tag="Mental fitness" route="/resources" />
              <Tags tag="sleep recovery" route="/resources" />
              <Tags tag="news" route="/events" />
              <Tags tag="Terms" route="/resources" />
              <Tags tag="plans" route="/aboutus" />
              <Tags tag="contact us" route="/contactus" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">Made with ❤️ by Bilal Al-Muhtadi</div>
    </div>
  );
}

export default Footer1;
