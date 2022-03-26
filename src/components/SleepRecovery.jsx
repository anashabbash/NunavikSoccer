import React from "react";
import sleepRecoveryDoc from "../pdf/Sleep-Recovery.pdf";
import useWindowDimensions from "./useWindowDimensions";

const SleepRecovery = () => {
  return (
    <div>
      <h1>Sleep Recovery</h1>
      <p>
        Post-exercise recovery and regeneration (PERR) is as important as the
        training regimen to the complex adaptive process of increasing athletic
        performance.1 The foundation of PERR is sleep. Sleep constitutes the
        passive recovery, regeneration and rest process.
      </p>
      <br />
      <p>
        The effect of sleep on athletic performance has become a topic of great
        interest due to the growing body of scientific evidence that has
        demonstrated a relationship between critical sleep factors (sleep
        length, sleep quality and circadian sleep phase) and human performance.
      </p>
      <br />
      <p>
        <a href={sleepRecoveryDoc} target="_blank">
          read more...
        </a>
      </p>
      <br />
    </div>
  );
};

export default SleepRecovery;
