import React from "react";
import teamImage from "../../public/team-image.png";
import star from "../../public/smoothcorner.png";

export default function About() {
  return (
    <section>
      <img src={teamImage} className="teamPicture" />
      <div className="how">
        <img className="star" src={star}></img>
        <h1>How It All Began?</h1>
      </div>
      <div className="begainContainer"></div>
      <div className="boardContainer">
        <h1>Meet Our Board</h1>
      </div>
      <div className="boardGrid">
        <div className="boardInnerContainer"></div>
        <div className="boardInnerContainer"></div>
        <div className="boardInnerContainer"></div>
        <div className="boardInnerContainer"></div>
        <div className="boardInnerContainer"></div>
        <div className="boardInnerContainer"></div>
      </div>
    </section>
  );
}
