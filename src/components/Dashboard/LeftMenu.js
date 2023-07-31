import React, { useState } from "react";
import "./LeftMenu.css";

const LeftMenu = ({ dashboardTitle, user, menuItems }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`left-menu ${isMenuOpen ? "open" : ""}`}>
        <div className={`burger-menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="menu-header">
          <h2>{dashboardTitle}</h2>
        </div>
        <div className="profile-info">
          <div className="profile-picture-container">
            {user.profilePicture ? (
              <img src={user.profilePicture} alt="Profile" className="profile-picture" />
            ) : (
              <div className="default-profile-picture"></div>
            )}
          </div>

          <div className="user-details">
            <h3 className="user-name">{user.name}</h3>
            <p className="user-email">{user.email}</p>
          </div>
        </div>
        <ul className="list">
          {menuItems.map((item) => (
            <li key={item}>
              <button>{item}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LeftMenu;
