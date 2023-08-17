import React from "react";
// import "./ProfileCard.css";
import styles from "./ProfileCard.module.css";
import image from "../../Assets/Image/blank-profile-picture.png";
function ProfileCard() {
  return (
    <>
      <div className={styles.container}>
        <div class={styles.profile_picture}>
          <img src={image} alt="Profile"></img>
        </div>
        <div className={styles.card_name}>Name</div>
        <div className={styles.card_title}>designation</div>
        <span className={styles.social_buttons}>
          <a className="social-button" link="#">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
          </a>
          <a className="social-button">
            <img
              width="58"
              height="58"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Scopus_logo.svg/618px-Scopus_logo.svg.png"
              alt="scopus-logo"
            />
          </a>
        </span>
        <button className={styles.profile_btn}>View profile</button>
      </div>
    </>
  );
}

export default ProfileCard;
