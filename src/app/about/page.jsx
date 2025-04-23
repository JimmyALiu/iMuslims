import styles from './page.module.css';
import React from "react";
import "../about-page.css";

export default function About() {
  return (
    <section>
      <img src="/public/team-image.png" className="teamPicture" />
      <div className="how">
        <h1>How It All Began?</h1>
      </div>
      <div className="beganContainer"></div>
      <div className="boardHeaderContainer">
        <img src="/smoothcorner.png" className="star star-top-left"></img>
        <img src="/smoothcorner.png" className="star star-bot-right"></img>
        <h1>Meet Our Board</h1>
      </div>
      <div className="boardGrid">
        <div className="boardCard">
          <div>
            <h2>Zareen Tasmin</h2>
            <h3>Co-President</h3>
            <h3>Informatics - Senior</h3>
          </div>
        </div>
        <div className="boardCard">
          <div>
            <h2>Safa Jamal</h2>
            <h3>Co-President</h3>
            <h3>Informatics - Senior</h3>
          </div>
        </div>
        <div className="boardCard">
          <div>
            <h2>Heena Vahora</h2>
            <h3>Director of Diverstiy Outreach</h3>
            <h3>Informatics - Senior</h3>
          </div>
        </div>
        <div className="boardCard">
          <div>
            <h2>Razan Mansour</h2>
            <h3>Director of Finance</h3>
            <h3>Informatics - Senior</h3>
          </div>
        </div>
        <div className="boardCard">
          <div>
            <h2>Minnah Tazmeen</h2>
            <h3>Creative Director</h3>
            <h3>Informatics - Senior</h3>
          </div>
        </div>
        <div className="boardCard">
          <div>
            <h2>Zakiyah Farooque</h2>
            <h3>Director of Organizational Affairs</h3>
            <h3>Informatics - Senior</h3>
          </div>
        </div>
        <div className="boardCard">
          <div>
            <h2>Faiza Imran</h2>
            <h3>Director of Professional Outreach</h3>
            <h3>Informatics - Senior</h3>
          </div>
        </div>
        <div className="boardCard">
          <div>
            <h2>Sarah Ghamadsi</h2>
            <h3>Director of PR</h3>
            <h3>Informatics - Senior</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
