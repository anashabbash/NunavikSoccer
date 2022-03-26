import React from "react";
import PDFPage from "./PDFPage";
import movementPrepDoc from "../pdf/Physical Literacy Movement Preparation Guide_Web.pdf";
import movementPreparation_7_8 from "../pdf/PL Movement Prep 7-8.pdf";
import movementPreparation_9_10 from "../pdf/PL Movement Prep 9-10.pdf";
import movementPreparation_11 from "../pdf/PL Movement Prep 11+.pdf";

import useWindowDimensions from "./useWindowDimensions";

import "./MovementPrep.css";

const MovementPrep = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div>
      <h1>Physical Literacy Movement Preperation</h1>
      <p>
        Typically, a warm-up only engages muscles and prepares your body for
        activity. But you can do more when preparing for movement…
      </p>
      <br />
      <p>
        The “Physical Literacy Movement Preparation Session” not only prepares
        the body for movement, it also improves the way you move, which reduces
        the risk of injury during physical activity. It also teaches skills that
        will benefit participation in unfamiliar activities.
      </p>
      <br />
      <p>
        Movement preparation that's geared towards physical literacy – focusing
        on the techniques that improve and incorporate fundamental movement
        skills and fundamental sport skills – can also foster a more physically
        active and healthy lifestyle.
      </p>
      <br />
      <p>
        Those who participate in the movement preparation session will increase
        their aptitude for all activities regardless of environment.
      </p>
      <br />
      <p>
        <a href={movementPrepDoc} target="_blank">
          read more...
        </a>
      </p>
      <br />
      <div>
        <PDFPage pdf={movementPreparation_7_8} width={width - width / 5} />
        <PDFPage pdf={movementPreparation_9_10} width={width - width / 5} />
        <PDFPage pdf={movementPreparation_11} width={width - width / 5} />
      </div>
    </div>
  );
};

export default MovementPrep;
