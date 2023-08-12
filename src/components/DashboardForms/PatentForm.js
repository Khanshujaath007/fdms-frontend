import React from "react";
import ReactDOM from "react-dom";
import useInput from "../hooks/use-input";
import "./Form.css";
const ModalOverlay = (props) => {
  let formIsValid = true;
  //patent name
  const {
    value: enteredPatent,
    isValid: enteredPatentIsValid,
    hasError: patentInputHasError,
    valueChangeHandler: patentChangedHandler,
    inputBlurHandler: patentBlurHandler,
    reset: resetPatentInput,
  } = useInput((value) => value.trim() !== "");
  //patent link
  const {
    value: enteredPatentLink,
    isValid: enteredPatentlinkIsValid,
    hasError: patentlinkInputHasError,
    valueChangeHandler: patentlinkChangedHandler,
    inputBlurHandler: patentlinkBlurHandler,
    reset: resetPatentlinkInput,
  } = useInput((value) => value.includes("https://"));
  //patent date
  const {
    value: enteredPatentdate,
    isValid: enteredPatentdateIsValid,
    hasError: patentdateInputHasError,
    valueChangeHandler: patentdateChangedHandler,
    inputBlurHandler: patentdateBlurHandler,
    reset: resetPatentdateInput,
  } = useInput((value) => value.trim() !== "");

  const submissionHandler = (e) => {
    e.preventDefault();
    console.log(enteredPatent, enteredPatentLink, enteredPatentdate);
    resetPatentInput("");
    resetPatentdateInput("");
  };
  if (
    enteredPatentIsValid &&
    enteredPatentdateIsValid &&
    enteredPatentlinkIsValid
  )
    formIsValid = true;
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => props.closeModal(false)}>X</button>
          </div>
          <div className="title">
            <h1>Fill Patent Details</h1>
          </div>
          <div className="body">
            <form onSubmit={submissionHandler}>
              <div>
                <label>Enter Patent Name</label>
                <input
                  type="text"
                  value={enteredPatent}
                  onChange={patentChangedHandler}
                  onBlur={patentBlurHandler}
                ></input>
                {patentInputHasError && (
                  <p className="error-text">patent name cannot be empty</p>
                )}
              </div>
              <div>
                <label>Enter Patent date</label>
                <input
                  type="date"
                  value={enteredPatentdate}
                  onChange={patentdateChangedHandler}
                  onBlur={patentdateBlurHandler}
                ></input>
                {patentdateInputHasError && (
                  <p className="error-text">patent date cannot be empty</p>
                )}
              </div>
              <div>
                <label>Enter Patent Link</label>
                <input
                  type="text"
                  value={enteredPatentLink}
                  onChange={patentlinkChangedHandler}
                  onBlur={patentlinkBlurHandler}
                ></input>
              </div>
              {patentlinkInputHasError && (
                <p className="error-text">link should be valid</p>
              )}
              <div className="footer">
                <button onClick={() => props.closeModal(false)} id="cancelBtn">
                  Cancel
                </button>
                <button disabled={!formIsValid}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
const PatentForm = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay closeModal={props.closeModal} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default PatentForm;
