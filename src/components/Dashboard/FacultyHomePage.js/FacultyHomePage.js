import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import LeftMenu from "../LeftMenu";
import { Link } from "react-router-dom";
import "./FacultyHomePage.css";
import menuItems from "../menuItems";
import PublicaitonForm from "../../DashboardForms/PublicationForm";
import PatentForm from "../../DashboardForms/PatentForm";
const FacultyHomePage = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openModalPatent, setOpenModalPatent] = useState(false);

  //test data
  const Data = [
    {
      id: 1,
      firstname: "Alex",
      lastname: "bob",
      phone: "909090909",
      googleid: "123",
      scoupusid: "123",
      publicaitonname: "abc",
      publicaitondate: "date",
      publicaitonurl: "https://google.com",
      patentname: "abc",
      patentdate: "date",
      patenturl: "https://google.com",
      //more fields...
    },
  ];

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        //fetch all details of user
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
    console.log(Data[0]);
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

        <button className="link" onClick={() => setOpenModal(true)}>
          Add Publications
        </button>
        {openModal && <PublicaitonForm closeModal={setOpenModal} />}

        <button className="link" onClick={() => setOpenModalPatent(true)}>
          Add Patent
        </button>
        {openModalPatent && <PatentForm closeModal={setOpenModalPatent} />}

        <Link className="link" to={`/faculty/edit-profile/${Data[0].id}`}>
          Edit Profile
        </Link>
        <Link className="link" to={`/share-profile/${Data.id}`}>
          Share Profile
        </Link>
        <h2>customise button</h2>
      </div>
    </div>
  );
};

export default FacultyHomePage;
