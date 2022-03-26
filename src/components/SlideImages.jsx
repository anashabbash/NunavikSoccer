import React from "react";
import { Fade } from "react-slideshow-image";
import img1 from "../pictures/pic1.jpg";
import img2 from "../pictures/pic2.jpg";
import img3 from "../pictures/pic3.jpg";
import { Link } from "react-router-dom";

import "./SlideImages.css";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  arrows: false,
  autoplay: true,
  indicators: true,
};

const Slideshow = () => {
  return (
    <div className="slideshow-card">
      <div className="slide-container">
        <Fade {...properties}>
          <div className="each-fade">
            <div>
              <img src={img1} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={img2} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={img3} />
            </div>
          </div>
        </Fade>
        <span>
          <Link to="/events">Events</Link>
        </span>
      </div>
    </div>
  );
};

export default Slideshow;
