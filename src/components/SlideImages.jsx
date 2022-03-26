import React from "react";
import { Fade } from "react-slideshow-image";
import img1 from "../pictures/pic1.jpg";
import img2 from "../pictures/pic2.jpg";
import img3 from "../pictures/pic3.jpg";
import { Card } from "@material-ui/core";

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
    <Card className="slideshow-card">
      <div className="slide-container">
        <Fade {...properties}>
          <div className="each-fade">
            <div>
              <img src={img1} />
            </div>
            <span>Event 1</span>
          </div>
          <div className="each-fade">
            <div>
              <img src={img2} />
            </div>
            <span>Event 2</span>
          </div>
          <div className="each-fade">
            <div>
              <img src={img3} />
            </div>
            <span>Event 3</span>
          </div>
        </Fade>
      </div>
    </Card>
  );
};

export default Slideshow;
