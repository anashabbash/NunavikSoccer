import React from "react";
import SlideImages from "./SlideImages";
import { Link } from "react-router-dom";
import flag from "../pictures/Flag_of_Nunavik.png";
import antiqueBall from "../pictures/OldBoys.jpg";
import mapNunavik from "../pictures/map_Nunavik.jpg";

import "./Home.css";

function Home() {
  return (
    <div>
      <SlideImages />
      <div className="content" id="homepage">
        <h1>Our Crest</h1>
        <p>
          The Nunavik Soccer crest was adapted from The Flag of Nunavik, a
          design developed by artist, designer and educator Thomassie Mangiok
          (Pirnoma Technologies) from the community of Ivujivik. The colours of
          the flag are drawn from the landscape of Nunavik and the number of
          feathers of the stylized bird represent the 14 communities of Nunavik
          (for more information, click&nbsp;
          <Link to="https://nunatsiaq.com/stories/article/65674nunavik_needs_a_flag_designer/">
            Here
          </Link>
          ). &nbsp;The addition of the antique leather football image is meant
          to represent the long tradition of ball games among Inuit as well as
          the centrality of the game of football in Canada as a whole. The
          graphic design of the crest was executed by graphic artist and author
          Izaqueu Alves (PhD Marketing & Design) in Rio de Janeiro, Brazil.
        </p>
        <div className="images-container">
          <img src={flag} alt="Nunavik Flag" />
          <img src={antiqueBall} alt="Antique Ball" />
        </div>
        <h1>Soccer in Nunavik</h1>
        <h2>The practice of soccer in Nunavik</h2>
        <p>
          Grassroots football in Nunavik is largely informal, with some
          institutional development in schools and participation of advanced
          athletes in the Arctic Summer Games and Nunavut Co-ed Futsal
          tournaments. Many players combine participation in soccer with
          participation in elite regional and / or recreational hockey, Inuit
          games, volleyball, badminton, basketball and baseball.
        </p>
        <br />
        <p>
          There is a high degree of mobility among Northerners, both within
          northern communities and between northern communities and major cities
          in Ontario and Quebec. Considering the variation in training and
          playing opportunities between communities, there is a need to
          streamline training methods to allow players to migrate from one
          community to another without interrupting their progress. It is also
          important to forge links with southern school soccer clubs and
          programs to enable the continued development of players and coaches.
        </p>
        <br />
        <p>
          Nunavimmiut players are also eligible to participate in the North
          American Indigenous Games (NAIG-JAAN) at the U16F and U19F levels
          (11v11 soccer), and Nunavik Soccer staff participated in training and
          recruitment activities around the PEN-EDN team covering players in
          Quebec and some parts of Ontario and the State of New York.
        </p>
        <br />
        <p>
          Despite the traditional practice of outdoor ball games among Inuit,
          the current practice of soccer is concentrated in indoor facilities in
          Nunavik. COVID-19 protocols have underscored the need to provide
          outdoor play opportunities, given varying restrictions on reopening
          public and school facilities to students and members of the public.
        </p>
        <br />
        <br />
        <div className="regional-profile">
          <div>
            <h2>Regional Profile</h2>
            <p>
              Regional population: Inuit and residents of the (sub)arctic North:
              (50,000 +)
            </p>
            <p>Population of Nunavik: 13,623 (2017)</p>
            <br />
            <ul>
              <li>0-14 years = 4338</li>
              <li>15-24 years = 2514</li>
              <li>25-44 years = 3883</li>
              <li>45-65 years = 2307</li>
              <li>65 + years = 581</li>
            </ul>
          </div>
          <img src={mapNunavik} alt="Antique Ball" />
        </div>
        <br />
        <h2>Soccer Participation and Facilities </h2>
        <p>
          Our main player group includes young people of school age, especially
          from 4 to 16 years old in three of the 14 communities of Nunavik.
          However, our model is community-based and inclusive.as adult players,
          parents or elders participate in local activities as referees,
          organizers and coaches. The latter group is considered to be secondary
          beneficiaries, but is essential to carry out the activities and
          mission of Nunavik Soccer. Our activities also include the full
          participation of adults and families as players, as well as training
          and recruitment activities for coaches, sports educators and
          referees.&nbsp;
          <Link to="/participation">read more...</Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
