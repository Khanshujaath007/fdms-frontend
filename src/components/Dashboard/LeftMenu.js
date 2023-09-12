import React, { useState } from "react";
import { Link } from "react-router-dom";
import maleProfilePhoto from "../../Assets/Image/male_pic.png";
import femaleProfilePhoto from "../../Assets/Image/female_pic.png";
import "./LeftMenu.css";

const LeftMenu = ({ dashboardTitle, user, menuItems, onItemClick }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);


  const handleMenuItemClick = (item) => {
    onItemClick(item);
    setMenuOpen(false);
  };

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
              <img
                src={user.gender === 'male' || user.gender === 'Male' ? maleProfilePhoto : femaleProfilePhoto}
                alt="Default Profile"
                className="default-profile-picture"
              />
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
              <Link to={item.to} onClick={() => handleMenuItemClick(item.label)}>
                <button>
                  {item.label}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LeftMenu;
