import React from "react";
import ReactDOM from "react-dom";
import styles from "./Form.module.css";
import useInput from "../hooks/use-input";
import { useParams } from "react-router";
import { useState } from "react";

const ModalOverlay = (props) => {
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const { userId } = useParams();
  let formIsValid = false;

  const showSuccessMessage = () => {
    setIsSuccessMessageVisible(true);
    setTimeout(() => {
      setIsSuccessMessageVisible(false);
    }, 5000);
  };

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredDate,
    isValid: enteredDateIsValid,
    hasError: dateInputHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDateInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredDetails,
    isValid: enteredDetailsIsValid,
    hasError: detailsInputHasError,
    valueChangeHandler: detailsChangedHandler,
    inputBlurHandler: detailsBlurHandler,
    reset: resetDetailsInput,
  } = useInput((value) => value.trim() !== "");


  const {
    value: enteredLink,
    isValid: enteredLinkIsValid,
    hasError: linkInputHasError,
    valueChangeHandler: linkChangeHandler,
    inputBlurHandler: linkBlurHandler,
    reset: resetLinkInput,
  } = useInput((value) => value.includes("https://"));

  // orcidId:
  const {
    value: enteredorcidId,
    isValid: enteredorcidIdIsValid,
    hasError: orcidIdHasError,
    valueChangeHandler: orcidIdChangeHandler,
    inputBlurHandler: orcidIdBlurHandler,
    reset: resetorcidIdInput,
  } = useInput((value) => value.trim() !== "");
  // researcherId
  const {
    value: enteredresearcherId,
    isValid: enteredresearcherIdIsValid,
    hasError: researcherIdHasError,
    valueChangeHandler: researcherIdChangeHandler,
    inputBlurHandler: researcherIdBlurHandler,
    reset: resetresearcherIdInput,
  } = useInput((value) => value.trim() !== "");
  // scopusId:
  const {
    value: enteredscopusId,
    isValid: enteredscopusIdIsValid,
    hasError: scopusIdHasError,
    valueChangeHandler: scopusIdChangeHandler,
    inputBlurHandler: scopusIdBlurHandler,
    reset: resetscopusIdInput,
  } = useInput((value) => value.trim() !== "");
  // googleScholarId:
  const {
    value: enteredgoogleScholarId,
    isValid: enteredgoogleScholarIdIsValid,
    hasError: googleScholarIdHasError,
    valueChangeHandler: googleScholarIdChangeHandler,
    inputBlurHandler: googleScholarIdBlurHandler,
    reset: resetgoogleScholarIdInput,
  } = useInput((value) => value.trim() !== "");


  if (
    enteredNameIsValid &&
    enteredDateIsValid &&
    enteredDetailsIsValid &&
    enteredLinkIsValid &&
    enteredorcidIdIsValid &&
    enteredresearcherIdIsValid &&
    enteredscopusIdIsValid &&
    enteredgoogleScholarIdIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    if (!formIsValid) return;
    console.log(enteredName);
    console.log(enteredDate);
    console.log(enteredLink);
    resetNameInput("");
    resetDateInput("");
    resetDetailsInput("");
    resetLinkInput("");
    resetorcidIdInput("");
    resetresearcherIdInput("");
    resetscopusIdInput("");
    resetgoogleScholarIdInput('')
    try {
      const response = await fetch(`http://localhost:5500/publication-details/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          publicationTitle: enteredName,
          publicationDate: enteredDate,
          publicationDescription: enteredDetails,
          publicationLink: enteredLink,
          orcidId: enteredorcidId,
          researcherId: enteredresearcherId,
          scopusId: enteredscopusId,
          googleScholarId: enteredgoogleScholarId,
        }),
      });

      if (response.ok) {
        console.log('Publication info saved successfully');
        alert("Publication info saved successfully");
        showSuccessMessage();
      } else {
        console.error('Error saving publication info');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <div className={styles["modalBackground"]}>
        <div className={styles["modalContainer"]}>
          <div className={styles["titleCloseBtn"]}>
            <button onClick={() => props.closeModal(false)}>X</button>
          </div>
          <div className={styles["title"]}>
            <h1>Fill Publication Details</h1>
          </div>
          <div className={styles["body"]}>
            <div>
              <form onSubmit={formSubmissionHandler}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label className={styles["label-txt"]}>Enter Publication Name</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="name"
                          onChange={nameChangedHandler}
                          onBlur={nameBlurHandler}
                          value={enteredName}
                        />
                        {nameInputHasError && (
                          <p className={styles["error-text"]}>Name cannot be empty</p>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className={styles["label-txt"]}>Enter Publication Details</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="details"
                          onChange={detailsChangedHandler}
                          onBlur={detailsBlurHandler}
                          value={enteredDetails}
                        />
                        {detailsInputHasError && (
                          <p className={styles["error-text"]}>Details cannot be empty</p>
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <label className={styles["label-txt"]}>Enter Publication date</label>
                      </td>
                      <td>
                        <input
                          type="date"
                          max={new Date().toISOString().split("T")[0]}
                          id="date"
                          onChange={dateChangeHandler}
                          onBlur={dateBlurHandler}
                          value={enteredDate}
                        />
                        {dateInputHasError && (
                          <p className={styles["error-text"]}>Date cannot be empty</p>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className={styles["label-txt"]}>Enter Publication Link</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          onChange={linkChangeHandler}
                          onBlur={linkBlurHandler}
                          value={enteredLink}
                        />
                        {linkInputHasError && (
                          <p className={styles["error-text"]}>
                            Link should start with https://
                          </p>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className={styles["label-txt"]}>Enter orcidId:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          onChange={orcidIdChangeHandler}
                          onBlur={orcidIdBlurHandler}
                          value={enteredorcidId}
                        />
                        {orcidIdHasError && (
                          <p className={styles["error-text"]}>Enter a valid ID</p>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className={styles["label-txt"]}>Enter researcherId:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          onChange={researcherIdChangeHandler}
                          onBlur={researcherIdBlurHandler}
                          value={enteredresearcherId}
                        />
                        {researcherIdHasError && (
                          <p className={styles["error-text"]}>Enter a valid ID</p>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className={styles["label-txt"]}>Enter scopusId:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          onChange={scopusIdChangeHandler}
                          onBlur={scopusIdBlurHandler}
                          value={enteredscopusId}
                        />
                        {scopusIdHasError && (
                          <p className={styles["error-text"]}>Enter a valid ID</p>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className={styles["label-txt"]}>Enter googleScholarId:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          onChange={googleScholarIdChangeHandler}
                          onBlur={googleScholarIdBlurHandler}
                          value={enteredgoogleScholarId}
                        />
                        {googleScholarIdHasError && (
                          <p className={styles["error-text"]}>Enter a valid ID</p>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles["footer"]}>
                  <button onClick={() => props.closeModal(false)} id="cancelBtn">
                    Cancel
                  </button>
                  <button disabled={!formIsValid}>Submit</button>
                  {isSuccessMessageVisible && (
                    <div className={styles["success-message"]}>Publication info saved successfully!</div>
                  )}

                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const PublicaitonForm = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay closeModal={props.closeModal} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default PublicaitonForm;
