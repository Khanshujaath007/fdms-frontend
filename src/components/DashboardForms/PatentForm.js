import React from "react";
import ReactDOM from "react-dom";
import styles from "./Form.module.css";
import useInput from "../hooks/use-input";
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
  // patentApplicationId:
  const {
    value: patentApplicationId,
    isValid: patentApplicationIdIsValid,
    hasError: patentApplicationIdInputHasError,
    valueChangeHandler: patentApplicationIdChangedHandler,
    inputBlurHandler: patentApplicationIdBlurHandler,
    reset: resetpatentApplicationIdInput,
  } = useInput((value) => value.trim() !== "");

  // statusOfPatent:
  const {
    value: statusOfPatent,
    isValid: statusOfPatentIsValid,
    hasError: statusOfPatentInputHasError,
    valueChangeHandler: statusOfPatentChangedHandler,
    inputBlurHandler: statusOfPatentBlurHandler,
    reset: resetstatusOfPatentInput,
  } = useInput((value) => value.trim() !== "");

  // patentFilledDate:
  const {
    value: patentFilledDate,
    isValid: patentFilledDateIsValid,
    hasError: patentFilledDateHasError,
    valueChangeHandler: patentFilledDateChangedHandler,
    inputBlurHandler: patentFilledDateBlurHandler,
    reset: resetpatentFilledDateInput,
  } = useInput((value) => value.trim() !== "");

  // patentPublishedDate:
  const {
    value: patentPublishedDate,
    isValid: patentPublishedDateIsValid,
    hasError: patentPublishedDateHasError,
    valueChangeHandler: patentPublishedDateChangedHandler,
    inputBlurHandler: patentPublishedDateBlurHandler,
    reset: resetpatentPublishedDateInput,
  } = useInput((value) => value.trim() !== "");

  // patentGrantedDate:
  const {
    value: patentGrantedDate,
    isValid: patentGrantedDateIsValid,
    hasError: patentGrantedDateHasError,
    valueChangeHandler: patentGrantedDateChangedHandler,
    inputBlurHandler: patentGrantedDateBlurHandler,
    reset: resetpatentGrantedDateInput,
  } = useInput((value) => value.trim() !== "");

  // patentPublishedNumber:
  const {
    value: patentPublishedNumber,
    isValid: patentPublishedNumberIsValid,
    hasError: patentPublishedNumberHasError,
    valueChangeHandler: patentPublishedNumberChangedHandler,
    inputBlurHandler: patentPublishedNumberBlurHandler,
    reset: resetpatentPublishedNumberInput,
  } = useInput((value) => value.trim() !== "");

  const submissionHandler = (e) => {
    e.preventDefault();
    console.log(enteredPatent, enteredPatentLink, enteredPatentdate);
    resetPatentInput("");
    resetPatentdateInput("");
    resetpatentApplicationIdInput("");
    resetstatusOfPatentInput("");
    resetpatentFilledDateInput("");
    resetpatentPublishedDateInput("");
    resetpatentGrantedDateInput("");
    resetpatentPublishedNumberInput("");
  };
  if (
    enteredPatentIsValid &&
    enteredPatentdateIsValid &&
    enteredPatentlinkIsValid &&
    patentApplicationIdIsValid &&
    statusOfPatentIsValid &&
    patentFilledDateIsValid &&
    patentPublishedDateIsValid &&
    patentGrantedDateIsValid &&
    patentPublishedNumberIsValid
  )
    formIsValid = true;
  return (
    <>
      <div className={styles["modalBackground"]}>
        <div className={styles["modalContainer"]}>
          <div className={styles["titleCloseBtn"]}>
            <button onClick={() => props.closeModal(false)}>X</button>
          </div>
          <div className={styles["title"]}>
            <h1>Fill Patent Details</h1>
          </div>
          <div className={styles["body"]}>
            <form onSubmit={submissionHandler}>
              <div>
                <label>Enter Patent Title</label>
                <input
                  type="text"
                  value={enteredPatent}
                  onChange={patentChangedHandler}
                  onBlur={patentBlurHandler}
                ></input>
                {patentInputHasError && (
                  <p className={styles["error-text"]}>
                    patent name cannot be empty
                  </p>
                )}
              </div>
              <div>
                <label>Enter Patent date</label>
                <input
                  type="date"
                  max={new Date().toISOString().split('T')[0]}
                  value={enteredPatentdate}
                  onChange={patentdateChangedHandler}
                  onBlur={patentdateBlurHandler}
                ></input>
                {patentdateInputHasError && (
                  <p className={styles["error-text"]}>
                    patent date cannot be empty
                  </p>
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
                <p className={styles["error-text"]}>link should be valid</p>
              )}
              <div>
                <label>Enter patentApplicationId</label>
                <input
                  type="text"
                  value={patentApplicationId}
                  onChange={patentApplicationIdChangedHandler}
                  onBlur={patentApplicationIdBlurHandler}
                ></input>
              </div>
              {patentApplicationIdInputHasError && (
                <p className={styles["error-text"]}>ID should be valid</p>
              )}
              <div>
                <label>Enter status of Patent </label>
                <input
                  type="text"
                  value={statusOfPatent}
                  onChange={statusOfPatentChangedHandler}
                  onBlur={statusOfPatentBlurHandler}
                ></input>
              </div>
              {statusOfPatentInputHasError && (
                <p className={styles["error-text"]}>
                  status of Patent Input should be valid
                </p>
              )}
              <div>
                <label>Enter patent Filled Date </label>
                <input
                  type="date"
                  value={patentFilledDate}
                  max={new Date().toISOString().split('T')[0]}
                  onChange={patentFilledDateChangedHandler}
                  onBlur={patentFilledDateBlurHandler}
                ></input>
                {patentFilledDateHasError && (
                  <p className={styles["error-text"]}>
                    patent Filled Date cannot be empty
                  </p>
                )}
              </div>
              <div>
                <label>Enter patent published date </label>
                <input
                  type="date"
                  max={new Date().toISOString().split('T')[0]}
                  value={patentPublishedDate}
                  onChange={patentPublishedDateChangedHandler}
                  onBlur={patentPublishedDateBlurHandler}
                ></input>
                {patentPublishedDateHasError && (
                  <p className={styles["error-text"]}>
                    patent published Date cannot be empty
                  </p>
                )}
              </div>
              <div>
                <label>Enter patent Granted Date </label>
                <input
                  type="date"
                  max={new Date().toISOString().split('T')[0]}
                  value={patentGrantedDate}
                  onChange={patentGrantedDateChangedHandler}
                  onBlur={patentGrantedDateBlurHandler}
                ></input>
                {patentGrantedDateHasError && (
                  <p className={styles["error-text"]}>
                    patent granted date cannot be empty
                  </p>
                )}
              </div>
              <div>
                <label>Enter patent Published Number </label>
                <input
                  type="text"
                  value={patentPublishedNumber}
                  onChange={patentPublishedNumberChangedHandler}
                  onBlur={patentPublishedNumberBlurHandler}
                ></input>
                {patentPublishedNumberHasError && (
                  <p className={styles["error-text"]}>
                    patent Published Number cannot be empty
                  </p>
                )}
              </div>
              {/*footer */}
              <div className={styles["footer"]}>
                <button
                  onClick={() => props.closeModal(false)}
                  id={styles["cancelBtnF"]}
                >
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
