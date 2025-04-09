import React from "react";
import teamImage from "../../public/team-image.png";
export default function About() {
  return (
    <section>
      <img src={teamImage} className="teamPicture" />
      <div className="how">
        <h1>How It All Began?</h1>
      </div>
      <div className="begainContainer"></div>
      <div className="boardContainer">
        <h1>Meet Our Board</h1>
      </div>
      <div className="beganContainer">
        <div></div>
      </div>
    </section>
  );
}
