import React from "react";
import mentalFitnessDoc from "../pdf/Mental-Fitness.pdf";

const MentalFitness = () => {
  return (
    <div>
      <h1>Mental Fitness For Long-Term Athlete Development</h1>
      <p>
        Sport places both physical and mental demands on the athlete. In
        training and competition, the body is asked to push physical limits of
        endurance, power, speed, and strength. Similarly, the mind is asked to
        push mental barriers, such as focus, composure, and determination. Being
        a top performer in any sport requires a combination of physical fitness,
        technical skills, tactical readiness, and mental fitness.
      </p>
      <br />
      <p>
        Throughout an athlete's lifespan, there is a heavy focus on physical and
        technical development; however, when pressure mounts, it is often the
        mental fitness factor that can have the biggest impact on performance
        outcomes. Williams (2006) asserts that most athletes and coaches
        acknowledge that 40 to 90 per cent of success in highperformance sports
        is accounted for by mental factors, especially at elite levels of
        competition. Consequently, an athlete should develop and strengthen
        mental fitness throughout his or her long-term development.
      </p>
      <br />
      <p>
        <a href={mentalFitnessDoc} target="_blank">
          read more...
        </a>
      </p>
      <br />
    </div>
  );
};

export default MentalFitness;
