import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

const ProfileCard = ({ title, details, publicationDate, publicationLink, orcidId, researcherId, scopusId, googleScholarId, publicationId, onDelete }) => {
    console.log(title);

    const { userId } = useParams();
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:5500/delete-publication-info/${userId}/${publicationId}`, {
                method: "POST",

            });
            console.log(response);
            console.log(publicationId);
            console.log(userId);
            // onDelete();
            if (response.ok) {
                onDelete(publicationId);
                
            } else {
                console.log("Error deleting publication info");
            }
        } catch (error) {
            console.error("Error deleting publication info:", error);
        }
    };
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
            <button onClick={handleDelete} className="delete-button">
                Delete
            </button>
        </div>
    );
};

export default ProfileCard;
