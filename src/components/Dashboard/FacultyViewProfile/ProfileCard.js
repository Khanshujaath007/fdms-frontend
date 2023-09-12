import React from "react";

const ProfileCard = ({ title, details, publicationDate, publicationLink, orcidId, researcherId, scopusId, googleScholarId }) => {
    console.log(title);
    return (
        <div className="card">
            <table className="publication-table">
                <tbody>
                    <tr>
                        <td>Publication Title</td>
                        <td>{title}</td>
                    </tr>
                    <tr>
                        <td>Publication Details</td>
                        <td>{details}</td>
                    </tr>
                    <tr>
                        <td>Publication Date</td>
                        <td>
                            {new Date(publicationDate).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                            })}</td>
                    </tr>
                    <tr>
                        <td>Publication Link</td>
                        <td>{publicationLink}</td>
                    </tr>
                    <tr>
                        <td>Orcid Id</td>
                        <td>{orcidId}</td>
                    </tr>
                    <tr>
                        <td>Researcher Id</td>
                        <td>{researcherId}</td>
                    </tr>
                    <tr>
                        <td>Scopus Id</td>
                        <td>{scopusId}</td>
                    </tr>
                    <tr>
                        <td>GoogleScholar Id</td>
                        <td>{googleScholarId}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default ProfileCard;
