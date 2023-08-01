import LeftMenu from "./LeftMenu";
import React, { useState } from "react";
import SelectFields from "./SelectFields";
import "./FacultyPannel.css";
import ProfileDetails from "./ProfileDetails";
const FacultyPannel = () => {
  const user = {
    name: "Tejas",
    email: "tejas@example.com",
    profilePicture: null,
  }

  const userData = {
    firstName: "Tejas",
    lastName: "Patel",
    email: "tejas.patel@example.com",
    password: "tejasPass456",
    "age": 25,
    dateOfBirth: "1998-10-05",
    username: "tejasp",
    address: {
      fullAddress: "789 Elm Street",
      city: "Chicago",
      state: "Illinois"
    },
    contact: 5678901234,
    university: "University of Illinois at Chicago",
    universityId: "UIC789",
    department: "Electrical Engineering"
  }

  const publicationData = {
    wosSubjectId: "WS002",
    wosSubject: "Physics",
    expertiseId: "EI002",
    expertise: "Quantum Mechanics",
    briefExpertise: "Quantum Computing",
    qualification: "PhD in Physics",
    subject: "Physics",
    organization: "Example University",
    organizationType: "University",
    organizationURL: "https://example.com/university",
    workingFromMonth: "March",
    workingFromYear: "2015",
    orcidId: "ORCID002",
    researcherId: "RID002",
    scopusId: "SCOPUS002",
    googleScholarId: "GSCHOLAR002",
    patentApplicationId: "patentapp456",
    statusOfPatent: "Granted",
    inventorsName: "Alice Johnson",
    titleOfPatent: "Improved Heat Exchanger Design",
    applicantsNumber: "1",
    patentFilledDate: "2022-11-20",
    patentPublishedDate: "2023-05-10",
    patentGrantedDate: "2023-06-25",
    patentPublishedNumber: "US20230000002",
    patentGrantedNumber: "US10203040506",
    assigneeName: "XYZ Engineering Solutions",
    mediaFile: null
  }

  const menuItems = [
    { label: "Home", component: null },
    { label: "Profile", component: null },
    { label: "Edit/Update profile", component: SelectFields },
    { label: "Logout", component: null },
  ];

  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  const SelectedComponent = menuItems.find((item) => item.label === selectedMenuItem)?.component || null;

  return (
    <>
      <div className="side-content">
        <LeftMenu dashboardTitle="My Dashboard" user={user} menuItems={menuItems.map((item) => item.label)} onItemClick={handleMenuItemClick} />
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
