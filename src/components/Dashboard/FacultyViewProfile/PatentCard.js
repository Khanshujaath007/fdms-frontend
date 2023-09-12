import React from "react";

const PatentCard = ({ title, details, patentApplicationId, patentLink, patentDate, statusOfPatent,patentFilledDate, patentPublishedDate, patentGrantedDate, patentPublishedNumber }) => {
        console.log(title);
        return(
            <div className="card">
                <table className="publication-table">
                    <tbody>
                        <tr>
                            <td>Patent Title</td>
                            <td>{title}</td>
                        </tr>

                        <tr>
                            <td>Patent Details</td>
                            <td>{details}</td>
                        </tr>

                        <tr>
                            <td>Patent Application Id</td>
                            <td>{patentApplicationId}</td>
                        </tr>

                        <tr>
                            <td>Patent Link</td>
                            <td>{patentLink}</td>
                        </tr>

                        <tr>    
                            <td>Patent Date</td>
                            <td>
                            {new Date(patentDate).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                            })}</td>
                        </tr>

                        <tr>
                            <td>Status of Patent</td>
                            <td>{statusOfPatent}</td>
                        </tr>

                        <tr>
                            <td>Patent Filled Date</td>
                            <td>
                            {new Date(patentFilledDate).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                            })}</td>
                        </tr>

                        <tr>
                            <td>Patent Published Date</td>
                            <td>
                            {new Date(patentPublishedDate).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                            })}</td>  
                        </tr>

                        <tr>
                            <td>Patent Granted Date</td>
                            <td>
                            {new Date(patentGrantedDate).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                            })}</td>
                        </tr>

                        <tr>
                            <td>Patent Published Number</td>
                            <td>
                            {new Date(patentPublishedNumber).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                            })}</td>    
                        </tr>
                    </tbody>
                </table>
            </div>

        )
}

export default PatentCard;