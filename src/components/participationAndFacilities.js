import React from "react";
import CommunityTable from "./CommunityTable";
import "./participationAndFacilities.css";

const participationAndFacilities = () => {
  return (
    <div className="content" id="participation-page">
      <h2>Soccer Participation and Facilities </h2>
      <p>
        Our main player group includes young people of school age, especially
        from 4 to 16 years old in three of the 14 communities of Nunavik.
        However, our model is community-based and inclusive.as adult players,
        parents or elders participate in local activities as referees,
        organizers and coaches. The latter group is considered to be secondary
        beneficiaries, but is essential to carry out the activities and mission
        of Nunavik Soccer. Our activities also include the full participation of
        adults and families as players, as well as training and recruitment
        activities for coaches, sports educators and referees.
      </p>
      <br />
      <p>
        <strong>Number of players now (4-16 years):</strong> 180 -200, of which
        35-40 are female players
      </p>
      <p>
        <strong>Number of adult players and participants now (16+): </strong>
        60 , including 10 players with fluctuations due to the transitory work
        of many non-Inuit residents.
      </p>
      <p>
        <strong>Frequency of extra-curricular play:</strong> 1 to 3 times a week
      </p>
      <br />
      <p>
        A demographically young population suggests the considerable expansion
        of the region's needs in terms of physical activity and sport
        opportunities for young people. All Nunavik communities have access to
        at least two (2) fully equipped indoor gymnasiums: a local school and
        another at the community forum. Community forum facilities are generally
        used more often for non-school sports and recreation as well as for
        community events.
      </p>
      <br />
      <CommunityTable />
    </div>
  );
};

export default participationAndFacilities;
