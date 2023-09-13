import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Logout.module.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login"); 
  };

  return (
    <div>
      <p style={{ fontSize: "30px" }}>Are you sure you want to logout?</p>
      <button className={styles["l-button"]} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
