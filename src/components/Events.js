import React from "react";
import EventCard from "./EventCard";
import "./Events.css";

function Events() {
  return (
    <div className="content" id="resources" style={{ textJustify: "center" }}>
      <div className="events-container">
        <EventCard
          title="Event 1"
          date="1/1/2022"
          description="blah blah blah"
        />
        <EventCard
          title="Event 2"
          date="1/1/2022"
          description="blah blah blah"
        />
        <EventCard
          title="Event 3"
          date="1/1/2022"
          description="blah blah blah"
        />
        <EventCard
          title="Event 4"
          date="1/1/2022"
          description="blah blah blah"
        />
        <EventCard
          title="Event 5"
          date="1/1/2022"
          description="blah blah blah"
        />
      </div>
    </div>
  );
}

export default Events;
