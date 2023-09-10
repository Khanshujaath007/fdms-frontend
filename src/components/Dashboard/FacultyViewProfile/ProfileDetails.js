import React, { useState } from "react";
import "./ProfileDetails.css";

const Profile = ({ userData, publicationData }) => {
    const [activeTab, setActiveTab] = useState("user-info");


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile">
            <div className="profile-tabs">
                <button
                    className={`tab-button ${activeTab === "user-info" ? "active" : ""}`}
                    onClick={() => handleTabClick("user-info")}
                >
                    User Information
                </button>
                <button
                    className={`tab-button ${activeTab === "publication-info" ? "active" : ""}`}
                    onClick={() => handleTabClick("publication-info")}
                >
                    Publication Information
                </button>
                <button
                    className={`tab-button ${activeTab === "patent-info" ? "active" : ""}`}
                    onClick={() => handleTabClick("patent-info")}
                >
                    Patent Information
                </button>
            </div>

            <div className={`profile-section ${activeTab !== "user-info" ? "hidden" : ""}`}>
                <h2>User Information</h2>
                <table className="profile-table">
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{userData.firstName} {userData.lastName}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{userData.email}</td>
                        </tr>
                        <tr>
                            <td>Age:</td>
                            <td>{userData.age}</td>
                        </tr>
                        <tr>
                            <td>Date of Birth:</td>
                            <td>{userData.dateOfBirth}</td>
                        </tr>
                        <tr>
                            <td>Username:</td>
                            <td>{userData.username}</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>{userData.fullAddress}, {userData.city}, {userData.state}</td>
                        </tr>
                        <tr>
                            <td>Contact:</td>
                            <td>{userData.contact}</td>
                        </tr>
                        <tr>
                            <td>University:</td>
                            <td>{userData.university}</td>
                        </tr>
                        <tr>
                            <td>University ID:</td>
                            <td>{userData.universityId}</td>
                        </tr>
                        <tr>
                            <td>Department:</td>
                            <td>{userData.department}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={`profile-section ${activeTab !== "publication-info" ? "hidden" : ""}`}>

                <h2>Publication Information</h2>
                <div className="card">
                    <p>WOS Subject ID: {publicationData.wosSubjectId}</p>
                    <p>WOS Subject: {publicationData.wosSubject}</p>
                    <p>Expertise ID: {publicationData.expertiseId}</p>
                    <p>Expertise: {publicationData.expertise}</p>
                    <p>Brief Expertise: {publicationData.briefExpertise}</p>
                    <p>Qualification: {publicationData.qualification}</p>
                    <p>Subject: {publicationData.subject}</p>
                    <p>Working From Month: {publicationData.workingFromMonth}</p>
                    <p>Working From Year: {publicationData.workingFromYear}</p>
                    <p>ORCID ID: {publicationData.orcidId}</p>
                    <p>Researcher ID: {publicationData.researcherId}</p>
                    <p>Scopus ID: {publicationData.scopusId}</p>
                    <p>Google Scholar ID: {publicationData.googleScholarId}</p>
                </div>
            </div>

            <div className={`profile-section ${activeTab !== "patent-info" ? "hidden" : ""}`}>
                <h2>Patent Information</h2>
                <div className="card">
                    <p>Patent Application ID: {publicationData.patentApplicationId}</p>
                    <p>Status of Patent: {publicationData.statusOfPatent}</p>
                    <p>Title of Patent: {publicationData.titleOfPatent}</p>
                    <p>Applicants Number: {publicationData.applicantsNumber}</p>
                    <p>Patent Filled Date: {publicationData.patentFilledDate}</p>
                    <p>Patent Published Date: {publicationData.patentPublishedDate}</p>
                    <p>Patent Granted Date: {publicationData.patentGrantedDate}</p>
                    <p>Patent Published Number: {publicationData.patentPublishedNumber}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
