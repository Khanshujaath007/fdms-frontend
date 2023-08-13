import React from "react";
import "./ProfileDetails.css";

const Profile = ({ userData, publicationData }) => {
    if (!userData) {
        return <div>Loading...</div>;
    }
    return (
        <div className="profile">
            <div className="profile-section">
                <h2>User Information</h2>
                <p>Name: {userData.firstName} {userData.lastName}</p>
                <p>Email: {userData.email}</p>
                <p>Age: {userData.age}</p>
                <p>Date of Birth: {userData.dateOfBirth}</p>
                <p>Username: {userData.username}</p>
                <p>Address: {userData.fullAddress}, {userData.city}, {userData.state}</p>
                <p>Contact: {userData.contact}</p>
                <p>University: {userData.university}</p>
                <p>University ID: {userData.universityId}</p>
                <p>Department: {userData.department}</p>
            </div>

            <div className="profile-section">
                <h2>Publication Information</h2>
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

            <div className="profile-section">
                <h2>Patent Information</h2>
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
    );
};

export default Profile;
