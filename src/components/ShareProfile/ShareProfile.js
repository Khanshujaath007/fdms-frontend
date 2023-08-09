import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from "./Card";
import "./ShareProfile.css";

import { user, publication, patent } from "./dummy";

// const ShareProfile = ({ user, publication, patent, programDetails }) => {
const ShareProfile = () => {

    const [showPublications, setShowPublications] = useState(true);

    const toggleView = () => {
        setShowPublications(!showPublications);
    };

    const dataToShow = showPublications ? publication : patent;
    return (
        <div className="sbody">
            <div className="sprofile-title">
                <h1 className="smainHeading"> FDMS</h1>
                <h1 className="stitle">Faculty Information</h1>
            </div>
            <div className="sprofile-picture-container">
                <img src={user.profilePicture} alt="ProfilePicture"
                    className="sprofile-picture" />
            </div>
            <div className="sdetails">
                <h3 className="suser-name">{user.name}</h3>
                <h4 className="suser-email">{user.email}</h4>
                <h4 className="suser-phoneno">{user.contact}</h4>
                <h4 className="suser-city">{user.city}</h4>
            </div>

            <div className="sadditional-details">
                <Link to={publication.googleScholarId} className="googleScholarlink">GoogleScholarId</Link>
                <Link to={publication.scopusId} className="scopuslink">ScopusId</Link>
            </div>
            <div className="sdata-header">
                <div
                    className={`sdata-header-item ${showPublications ? "active" : ""}`}
                    onClick={() => toggleView("publications")}
                >
                    Publications
                </div>
                <div
                    className={`sdata-header-item ${!showPublications ? "active" : ""}`}
                    onClick={() => toggleView("patents")}
                >
                    Patents
                </div>
            </div>

            <div className="sdata-info">
                <Link  to={`/${showPublications ? "publication" : "patent"}/details`} className="sdata-link">
                {dataToShow.map((item, index) => (
                    <Card key={index} title={item.title} details={item.details} completeDetails={item} />
                ))}
                </Link>
            </div>

        </div>
    )
}

export default ShareProfile;

