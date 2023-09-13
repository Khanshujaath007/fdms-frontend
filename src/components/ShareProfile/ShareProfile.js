import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./ShareProfile.css";
import maleProfilePhoto from "../../Assets/Image/male_pic.png";
import femaleProfilePhoto from "../../Assets/Image/female_pic.png"

const ShareProfile = () => {
    const { userId } = useParams();

    const [user, setUser] = useState({});
    const [publication, setPublication] = useState([]);
    const [patent, setPatent] = useState([]);
    const [showPublications, setShowPublications] = useState(true);

    useEffect(() => {
        const fetchSharedProfile = async () => {
            try {
                const response = await fetch(`http://localhost:5500/share-profile/${userId}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setUser(data.sharedProfile);
                    // console.log(data.publicationInfoData);
                    // console.log(data.patentInfoData);
                    setPublication(data.publicationInfoData);
                    setPatent(data.patentInfoData);
                } else {
                    console.log("Error fetching shared profile data");
                }
            } catch (error) {
                console.error("Error fetching shared profile data:", error);
            }
        };

        fetchSharedProfile();
    }, [userId]);

    const toggleView = () => {
        setShowPublications(!showPublications);
    };

    return (
        <div className="sbody">
            <div className="sprofile-title">
                <h1 className="smainHeading"> FDMS</h1>
                <h1 className="stitle">Faculty Information</h1>
            </div>
            <div className="sprofile-picture-container">
            {user.profilePicture ? (
              <img src={user.profilePicture} alt="Profile" className="profile-picture" />
            ) : (
              <img
                src={user.gender === 'male' || user.gender === 'Male' ? maleProfilePhoto : femaleProfilePhoto}
                alt="Default Profile"
                className="default-profile-picture"
              />
            )}
            </div>
            <div className="sdetails">
                <h3 className="suser-name">{user.name}</h3>
                <h4 className="suser-email">{user.email}</h4>
                <h4 className="suser-phoneno">{user.contact}</h4>
                <h4 className="suser-city">{user.city}</h4>
            </div>

            <div className="sadditional-details">
                <Link to={`https://scholar.google.com/citations?user=${user.googleScholarIdLink}&hl=en`} className="googleScholarlink">
                    Google Scholar ID
                </Link>
                <Link to={user.scopusIdLink} className="scopuslink">
                    Scopus ID
                </Link>
            </div>

            {/* Display publication or patent details */}
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
                {showPublications
                    ? (
                        Array.isArray(publication)
                            ? publication.map((item, index) => (
                                <Card key={index} title={item.publicationTitle} details={item.publicationDescription} completeDetails={item} />
                            ))
                            : (
                                Object.keys(publication).length > 0
                                    ? (
                                        <Card
                                            title={publication.publicationTitle}
                                            details={publication.publicationDescription}
                                            completeDetails={publication}
                                        />
                                    )
                                    : <p>No publication data available.</p>
                            )
                    )
                    : (
                        Array.isArray(patent)
                            ? patent.map((item, index) => (
                                <Card key={index} title={item.titleOfPatent} details={item.statusOfPatent} completeDetails={item} />
                            ))
                            : (
                                Object.keys(patent).length > 0
                                    ? (
                                        <Card
                                            title={patent.titleOfPatent}
                                            details={patent.statusOfPatent}
                                            completeDetails={patent}
                                        />
                                    )
                                    : <p>No patent data available.</p>
                            )
                    )}
            </div>
        </div>
    );
};

export default ShareProfile;
