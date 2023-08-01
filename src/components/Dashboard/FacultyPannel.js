import LeftMenu from "./LeftMenu";
import React, { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import SelectFields from "./SelectFields";
import "./FacultyPannel.css";
import ProfileDetails from "./ProfileDetails";
const FacultyPannel = () => {

  const menuItems = [
    { label: "Home", component: null },
    { label: "Add Publication or Patent", component: null },
    { label: "Edit/Update Profile", component: SelectFields },
    { label: "Logout", component: null },
  ];

  const { userId } = useParams();

  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [userData, setUserData] = useState({});
  const [publicationData, setPublicationData] = useState({});
  const [email,setEmail] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`http://localhost:5500/profile/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setFirstName(data.userData.firstName)
          setLastName(data.userData.lastName)
          setEmail(data.userData.email)
          setUserData(data.userData);
          setPublicationData(data.publicationInfoData);
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

  const SelectedComponent = menuItems.find((item) => item.label === selectedMenuItem)?.component || null;

  return (
    <>
      <div className="side-content">
        <LeftMenu dashboardTitle="My Dashboard" user={{name: `${firstName} ${lastName}`, email}} menuItems={menuItems.map((item) => item.label)} onItemClick={handleMenuItemClick} />
        <div className="main-content">
          {SelectedComponent && <SelectedComponent />}
          <ProfileDetails userData={ userData }
            publicationData={ publicationData } />
        </div>
      </div>
    </>
  );
};
export default FacultyPannel;
