import React from "react";
import PlansTabs from "./PlansTabs";
import "./AboutUs.css";
function AboutUs() {
  return (
    <div className="content" id="aboutus">
      <h1>Our Services</h1>
      <h2>Nunavik Soccer services and activites</h2>
      <ul>
        <li>
          Organization and implementation of training activities for local and
          regional players
        </li>
        <li>
          Organization of competitive leagues and / or local and regional
          friendship games{" "}
        </li>
        <li>
          Organization of recreational futsal activities for children (4-16
          years ) and recreational futsal for adults
        </li>
        <li>
          Information sharing and research for coach and player training
          programs online or shared on local servers
        </li>
        <li>
          Contribution to the development and improvement of playing facilities
          in Nunavik
        </li>
        <li>
          Development of sports and cultural partnerships in Canada, Inuit
          Nunagat and the circumpolar region.
        </li>
      </ul>
      <h1>Our Plan: ARSANIIT 2026 </h1>
      <h2>Priorties for 2022-2025</h2>
      <ul>
        <li>Increase participation in grassroots football programs</li>
        <li>Improve training and match equipment</li>
        <li>
          Provide facilities for training senior players (15+), and for training
          parents and teachers to become coaches, educators, and referees
        </li>
        <li>
          Connect and build relationships between players in the region,
          including organizing tournaments and participating in tournaments in
          neighboring communities
        </li>
        <li>
          Support the development of a legitimate organizational structure for
          the development of football and futsal
        </li>
      </ul>
      <br />
      <br />
      <p>
        Nunavik Soccer's medium-term development framework is based on several
        axes:
      </p>
      <br />
      <ol>
        <li>
          Inclusion of families through low-cost activities which are suitable
          for children and seniors and promoting physical literacy, including
          for people with physical, mental or civil disabilities, and alignment
          with the Aboriginal LTAD Pathway and the Canadian Soccer Association
          LTAD.
        </li>
        <br />
        <li>
          Alignment with physical education, STEAM (Science, Technology,
          Engineering, Arts and Mathematics), entrepreneurial training and
          social studies curriculum for children, youth and adult learners and
          promotion of careers and entrepreneurship in sport.
        </li>
        <br />
        <li>
          Development of international and regional connections through online
          content and learning, and travel opportunities in circumpolar and
          other indigenous communities for players and coaches.
        </li>
        <br />
        <li>
          Integrated monitoring and evaluation activities that measure the
          efficiency and effectiveness of the management and implementation of
          Nunavik Soccer programs as well as the integration of its activities
          with other sectors of sport, education, football entrepreneurship and
          sustainable tourism.
        </li>
        <br />
        <li>
          Development of tools that help promote the language and culture of the
          Inuit, Cree and other Aboriginal peoples through soccer.
        </li>
        <br />
        <li>Development of recreational and sports facilities.</li>
      </ol>
      <br />
      <br />
      <h2>
        Basic activities for the development of the Nunavik Soccer program
        (2022-2025)
      </h2>
      <ol>
        <li>
          Training, recruitment, retention of coaches, facilitators and referees
        </li>
        <li>Player recruitment and talent development</li>
        <li>
          Curriculum: physical preparation, cultural and intellectual,
          psychological, social and emotional activities, tactics and techniques
          (Four Corners, Four Circles)
        </li>
        <li>Facilities, materials, fundraising and security</li>
        <li>Governance, Institutional and Media Relations</li>
      </ol>
      <PlansTabs />
    </div>
  );
}

export default AboutUs;
