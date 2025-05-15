import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ name, position, major, picture }) => {
  return (
    <>
      <div className={styles.pictureContainer}>
        <img src={picture} alt="head shot" />
        <div className={styles.pictureInfoContainer}>
          <h2>{name}</h2>
          <h3>{position}</h3>
          <h3>{major}</h3>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
