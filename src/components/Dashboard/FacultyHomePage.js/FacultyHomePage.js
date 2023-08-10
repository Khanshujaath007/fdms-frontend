import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import LeftMenu from "../LeftMenu";
import { Link } from "react-router-dom";
import "./FacultyHomePage.css";
import menuItems from "../menuItems";
import Modal from "../../Modal/Modal";
const FacultyHomePage = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`http://localhost:5500/profile/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setFirstName(data.userData.firstName);
          setUserData(data.userData);
        } else {
          console.log("Error fetching user profile data");
        }
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };
    fetchUserProfile();
  }, [userId]);

  return (
    <div className="faculty-home-page">
      <LeftMenu
        dashboardTitle="My Dashboard"
        user={{ name: firstName, email: userData.email }}
        menuItems={menuItems}
      />
      <div className="home-content">
        <h1 className="home-title">Welcome, {firstName}!</h1>
        <p className="home-details">
          Click on "Add Publication or Patent" to add your publication. You can
          edit or delete your publications using the "Edit/Delete" button. You
          can also share your profile with others.
        </p>
        {/* <Link className="link" to="/faculty/add-publication">
          Add Publication
        </Link> */}
        <button className="link" onClick={() => setOpenModal(true)}>
          Add Publications
        </button>
        {openModal && <Modal closeModal={setOpenModal} />}
        <Link className="link" to="/faculty/add-patent">
          Add Patent
        </Link>
        <Link className="link" to={`/faculty/edit-profile/${userId}`}>
          Edit Profile
        </Link>
        <Link className="link" to={`/share-profile/${userId}`}>
          Share Profile
        </Link>
        <h2>customise button</h2>
      </div>
    </div>
  );
};

export default FacultyHomePage;
