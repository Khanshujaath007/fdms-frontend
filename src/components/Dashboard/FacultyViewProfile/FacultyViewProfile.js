import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./FacultyViewProfile.css";
import ProfileDetails from "./ProfileDetails";
import LeftMenu from "../LeftMenu";
import menuItems from "../menuItems";

const FacultyViewProfile = () => {
  const [userData, setUserData] = useState({});
  const [publicationData, setPublicationData] = useState({});
  const [patentData, setPatentData] = useState({});
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const SelectedComponent =
    menuItems.find((item) => item.label === selectedMenuItem)?.component || null;

  const { userId } = useParams();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`http://localhost:5500/profile/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setFirstName(data.userData.firstName);
          setLastName(data.userData.lastName);
          setEmail(data.userData.email);
          setUserData(data.userData);
          setPublicationData(data.publicationInfoData);
          setPatentData(data.patentInfoData);
          console.log(data.patentInfoData )
          console.log(data.publicationInfoData)
        } else {
          console.log("Error fetching user profile data");
        }
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };
    fetchUserProfile();
  }, [userId]);

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  return (
    <div className="faculty-view-profile side-content">
        <LeftMenu
          dashboardTitle="My Dashboard"
          user={{ name: `${firstName} ${lastName}`, email }}
          menuItems={menuItems}
          onItemClick={handleMenuItemClick}
        />
      <div className="profile-main-content main-content">
        {SelectedComponent && <SelectedComponent />}
        <ProfileDetails userData={userData} publicationData={publicationData} patentData={patentData} />
      </div>
    </div>
  );
};

export default FacultyViewProfile;
