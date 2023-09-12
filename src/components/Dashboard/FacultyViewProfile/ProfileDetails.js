import React, { useState } from "react";
import "./ProfileDetails.css";
import ProfileCard from "./ProfileCard";
import PatentCard from "./PatentCard";

const Profile = ({ userData, publicationData, patentData }) => {
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
                            <td>
                                {new Date(userData.dateOfBirth).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                })}
                            </td>
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
                    {Array.isArray(publicationData) ? (
                        publicationData.map((item, index) => (
                            <ProfileCard
                                key={index}
                                title={item.publicationTitle}
                                details={item.publicationDescription}
                                publicationDate={item.publicationDate}
                                publicationLink={item.publicationLink}
                                orcidId={item.orcidId}
                                researcherId={item.researcherId}
                                scopusId={item.scopusId}
                                googleScholarId={item.googleScholarId}
                            />
                        ))
                    ) : Object.keys(publicationData).length > 0 ? (
                        <ProfileCard
                            title={publicationData.publicationTitle}
                            details={publicationData.publicationDescription}
                            publicationDate={publicationData.publicationDate}
                            publicationLink={publicationData.publicationLink}
                            orcidId={publicationData.orcidId}
                            researcherId={publicationData.researcherId}
                            scopusId={publicationData.scopusId}
                            googleScholarId={publicationData.googleScholarId}
                        />
                    ) : (
                        <p>No publication data available.</p>
                    )}
                </div>
            </div>

            <div className={`profile-section ${activeTab !== "patent-info" ? "hidden" : ""}`}>
                <h2>Patent Information</h2>
                <div className="card">
                    {Array.isArray(patentData) ? (
                        patentData.map((item, index) => (
                            <PatentCard
                                key={index}
                                title={item.titleOfPatent}
                                details={item.statusOfPatent}
                                patentApplicationId={item.patentApplicationId}
                                patentLink={item.patentLink}
                                patentDate={item.patentDate}
                                statusOfPatent={item.statusOfPatent}
                                patentFilledDate={item.patentFilledDate}
                                patentPublishedDate={item.patentPublishedDate}
                                patentGrantedDate={item.patentGrantedDate}
                                patentPublishedNumber={item.patentPublishedNumber}
                            />
                        ))
                    ) : Object.keys(patentData).length > 0 ? (
                        <PatentCard
                            title={patentData.titleOfPatent}
                            details={patentData.statusOfPatent}
                            patentApplicationId={patentData.patentApplicationId}
                            patentLink={patentData.patentLink}
                            patentDate={patentData.patentDate}
                            statusOfPatent={patentData.statusOfPatent}
                            patentFilledDate={patentData.patentFilledDate}
                            patentPublishedDate={patentData.patentPublishedDate}
                            patentGrantedDate={patentData.patentGrantedDate}
                            patentPublishedNumber={patentData.patentPublishedNumber}
                        />
                    ) : (
                        <p>No patent data available.</p>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Profile;
