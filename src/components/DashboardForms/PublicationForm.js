import React from "react";
import ReactDOM from "react-dom";
import "./Form.css";
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

  if (enteredNameIsValid && enteredDateIsValid && enteredLinkIsValid) {
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
  };
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => props.closeModal(false)}>X</button>
          </div>
          <div className="title">
            <h1>Fill Publication Details</h1>
          </div>
          <div className="body">
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
                  <p className="error-text">Name cannot be empty</p>
                )}

                <div>
                  <label>Enter Publication date</label>
                  <input
                    type="date"
                    id="date"
                    onChange={dateChangeHandler}
                    onBlur={dateBlurHandler}
                    value={enteredDate}
                  ></input>
                  {dateInputHasError && (
                    <p className="error-text">Date cannot be empty</p>
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
                    <p className="error-text">
                      Link should start with https://
                    </p>
                  )}
                </div>
                <div className="footer">
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
