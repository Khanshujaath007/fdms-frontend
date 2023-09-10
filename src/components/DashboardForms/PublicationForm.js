import React from "react";
import ReactDOM from "react-dom";
import styles from "./Form.module.css";
import useInput from "../hooks/use-input";
const ModalOverlay = (props) => {
  let formIsValid = false;
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
    enteredLinkIsValid &&
    enteredorcidIdIsValid &&
    enteredresearcherIdIsValid &&
    enteredscopusIdIsValid &&
    enteredgoogleScholarIdIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;
    console.log(enteredName);
    console.log(enteredDate);
    console.log(enteredLink);
    resetNameInput("");
    resetDateInput("");
    resetLinkInput("");
    resetorcidIdInput("");
    resetresearcherIdInput("");
    resetscopusIdInput("");
    resetgoogleScholarIdInput('')
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
                <label>Enter Publication Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={nameChangedHandler}
                  onBlur={nameBlurHandler}
                  value={enteredName}
                ></input>
                {nameInputHasError && (
                  <p className={styles["error-text"]}>Name cannot be empty</p>
                )}

                <div>
                  <label>Enter Publication date</label>
                  <input
                    type="date"
                    max={new Date().toISOString().split('T')[0]}
                    id="date"
                    onChange={dateChangeHandler}
                    onBlur={dateBlurHandler}
                    value={enteredDate}
                  ></input>
                  {dateInputHasError && (
                    <p className={styles["error-text"]}>Date cannot be empty</p>
                  )}
                </div>
                <div>
                  <label>Enter Publication Link</label>
                  <input
                    type="text"
                    onChange={linkChangeHandler}
                    onBlur={linkBlurHandler}
                    value={enteredLink}
                  ></input>
                  {linkInputHasError && (
                    <p className={styles["error-text"]}>
                      Link should start with https://
                    </p>
                  )}
                </div>
                <div>
                  <label>Enter orcidId: </label>
                  <input
                    type="text"
                    onChange={orcidIdChangeHandler}
                    onBlur={orcidIdBlurHandler}
                    value={enteredorcidId}
                  ></input>
                  {orcidIdHasError && (
                    <p className={styles["error-text"]}>Enter valid ID</p>
                  )}
                </div>
                <div>
                  <label>Enter researcherId: </label>
                  <input
                    type="text"
                    onChange={researcherIdChangeHandler}
                    onBlur={researcherIdBlurHandler}
                    value={enteredresearcherId}
                  ></input>
                  {researcherIdHasError && (
                    <p className={styles["error-text"]}>Enter valid ID</p>
                  )}
                </div>
                <div>
                  <label>Enter scopusId: </label>
                  <input
                    type="text"
                    onChange={scopusIdChangeHandler}
                    onBlur={scopusIdBlurHandler}
                    value={enteredscopusId}
                  ></input>
                  {scopusIdHasError && (
                    <p className={styles["error-text"]}>Enter valid ID</p>
                  )}
                </div>
                <div>
                  <label>Enter googleScholarId: </label>
                  <input
                    type="text"
                    onChange={googleScholarIdChangeHandler}
                    onBlur={googleScholarIdBlurHandler}
                    value={enteredgoogleScholarId}
                  ></input>
                  {googleScholarIdHasError && (
                    <p className={styles["error-text"]}>Enter valid ID</p>
                  )}
                </div>
                {/* footer */}
                <div className={styles["footer"]}>
                  <button
                    onClick={() => props.closeModal(false)}
                    id="cancelBtn"
                  >
                    Cancel
                  </button>
                  <button disabled={!formIsValid}>Submit</button>
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
