import React from "react";
import "./ProfileCard.css";
import image from "../../Assets/Image/blank-profile-picture.png";
function ProfileCard() {
  return (
    <>
      <div className="container">
        <div class="profile-picture">
          <img src={image} alt="Profile"></img>
        </div>
        <div className="card-name">Name</div>
        <div className="card-title">designation</div>
        <span className="social-buttons">
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
        <button className="profile-btn">View profile</button>
      </div>
    </>
  );
}

export default ProfileCard;
