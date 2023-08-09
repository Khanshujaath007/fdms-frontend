import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./ShareProfile.css";

const ShareProfile = ({ user, publication, patent, programDetails }) => {

    return (
        <>
            <div className="sprofile-title">
                <h1> FDMS</h1>
                <h1>Faculty Information</h1>
            </div>
            <div className="profile-picture-container">
                <img src={user.profilePicture} alt="ProfilePicture"
                    className="profile-picture" />
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

            <div className="spublication-info">
                {publication.map((item) => (
                    <>
                    <h1 className="spublication-title">{item.title}</h1>
                    <h3 className="spublication-details">{item.details}</h3>
                    </>
                ))}
            </div>

            <div className="spatent-info">
                {patent.map((item) => (
                    <>
                    <h1 className="spatent-title">{item.title}</h1>
                    <h3 className="spatent-details">{item.details}</h3>
                    </>
                ))}
            </div>


        </>
    )
}

export default ShareProfile;

