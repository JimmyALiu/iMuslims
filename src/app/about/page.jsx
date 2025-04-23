import styles from './page.module.css';
import React from "react";

export default function About() {
  return (
    <section>
      <img src="/team-image.png" className={styles.teamPicture} />
      <div className={styles.how}>
        <h1>How It All Began?</h1>
      </div>
      <div className={styles.beganContainer}></div>
      <div className={styles.boardHeaderContainer}>
        <img src="/smoothcorner.png" className={"star " + styles.starTopLeft}></img>
        <img src="/smoothcorner.png" className={"star " + styles.starBotRight}></img>
        <h1>Meet Our Board</h1>
      </div>
      <div className={styles.boardGrid}>
        <div className={styles.boardCard}>
          <div>
            <h2>Zareen Tasmin</h2>
            <h3>Co-President</h3>
            <h3>Informatics - Senior</h3>
          </div>
        </div>
        <div className={styles.boardCard}>
          <div>
            <h2>Safa Jamal</h2>
            <h3>Co-President</h3>
            <h3>Informatics - Senior</h3>
          </div>
        </div>
        <div className={styles.boardCard}>
          <div>
            <h2>Heena Vahora</h2>
            <h3>Director of Diverstiy Outreach</h3>
            <h3>Informatics - Senior</h3>
          </div>
        </div>
        <div className={styles.boardCard}>
          <div>
            <h2>Razan Mansour</h2>
            <h3>Director of Finance</h3>
            <h3>Informatics - Senior</h3>
          </div>
        </div>
        <div className={styles.boardCard}>
          <div>
            <h2>Minnah Tazmeen</h2>
            <h3>Creative Director</h3>
            <h3>Informatics - Senior</h3>
          </div>
        </div>
        <div className={styles.boardCard}>
          <div>
            <h2>Zakiyah Farooque</h2>
            <h3>Director of Organizational Affairs</h3>
            <h3>Informatics - Senior</h3>
          </div>
        </div>
        <div className={styles.boardCard}>
          <div>
            <h2>Faiza Imran</h2>
            <h3>Director of Professional Outreach</h3>
            <h3>Informatics - Senior</h3>
          </div>
        </div>
        <div className={styles.boardCard}>
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
