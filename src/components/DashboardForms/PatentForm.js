import React from "react";
import ReactDOM from "react-dom";
import styles from "./Form.module.css";
import useInput from "../hooks/use-input";
import { useParams } from "react-router";

const ModalOverlay = (props) => {
  let formIsValid = true;
  const { userId } = useParams();
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

  const submissionHandler = async(e) => {
    e.preventDefault();
    console.log(enteredPatent, enteredPatentLink, enteredPatentdate);
    resetPatentInput("");
    resetPatentdateInput("");
    resetPatentlinkInput("");
    resetpatentApplicationIdInput("");
    resetstatusOfPatentInput("");
    resetpatentFilledDateInput("");
    resetpatentPublishedDateInput("");
    resetpatentGrantedDateInput("");
    resetpatentPublishedNumberInput("");

    try{
        const response = await fetch(`http://localhost:5500/patent-details/${userId}`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            patentName: enteredPatent,
            patentDate: enteredPatentdate,
            patentLink: enteredPatentLink,
            patentApplicationId: patentApplicationId,
            statusOfPatent: statusOfPatent,
            patentFilledDate: patentFilledDate,
            patentPublishedDate: patentPublishedDate,
            patentGrantedDate: patentGrantedDate,
            patentPublishedNumber: patentPublishedNumber,
          }),
        })
        if (response.ok) {
          console.log('Patent info saved successfully');
          alert("Patent info saved successfully");
        } else {
          console.error('Error saving Patent info');
        }
    }catch(error){
      console.log(error);
    }
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
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label className={styles["label-txt"]}>Enter Patent Title</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={enteredPatent}
                          onChange={patentChangedHandler}
                          onBlur={patentBlurHandler}
                        />
                        {patentInputHasError && (
                          <p className={styles["error-text"]}>patent name cannot be empty</p>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className={styles["label-txt"]}>Enter Patent date</label>
                      </td>
                      <td>
                        <input
                          type="date"
                          max={new Date().toISOString().split('T')[0]}
                          value={enteredPatentdate}
                          onChange={patentdateChangedHandler}
                          onBlur={patentdateBlurHandler}
                        />
                        {patentdateInputHasError && (
                          <p className={styles["error-text"]}>patent date cannot be empty</p>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className={styles["label-txt"]}>Enter Patent Link</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={enteredPatentLink}
                          onChange={patentlinkChangedHandler}
                          onBlur={patentlinkBlurHandler}
                        />
                      </td>
                    </tr>
                    {patentlinkInputHasError && (
                      <tr>
                        <td></td>
                        <td>
                          <p className={styles["error-text"]}>link should be valid</p>
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td>
                        <label className={styles["label-txt"]}>Enter patentApplicationId</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={patentApplicationId}
                          onChange={patentApplicationIdChangedHandler}
                          onBlur={patentApplicationIdBlurHandler}
                        />
                      </td>
                    </tr>
                    {patentApplicationIdInputHasError && (
                      <tr>
                        <td></td>
                        <td>
                          <p className={styles["error-text"]}>ID should be valid</p>
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td>
                        <label className={styles["label-txt"]}>Enter status of Patent </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={statusOfPatent}
                          onChange={statusOfPatentChangedHandler}
                          onBlur={statusOfPatentBlurHandler}
                        />
                      </td>
                    </tr>
                    {statusOfPatentInputHasError && (
                      <tr>
                        <td></td>
                        <td>
                          <p className={styles["error-text"]}>status of Patent Input should be valid</p>
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td>
                        <label className={styles["label-txt"]}>Enter patent Filled Date </label>
                      </td>
                      <td>
                        <input
                          type="date"
                          value={patentFilledDate}
                          max={new Date().toISOString().split('T')[0]}
                          onChange={patentFilledDateChangedHandler}
                          onBlur={patentFilledDateBlurHandler}
                        />
                        {patentFilledDateHasError && (
                          <p className={styles["error-text"]}>patent Filled Date cannot be empty</p>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className={styles["label-txt"]}>Enter patent published date </label>
                      </td>
                      <td>
                        <input
                          type="date"
                          max={new Date().toISOString().split('T')[0]}
                          value={patentPublishedDate}
                          onChange={patentPublishedDateChangedHandler}
                          onBlur={patentPublishedDateBlurHandler}
                        />
                        {patentPublishedDateHasError && (
                          <p className={styles["error-text"]}>patent published Date cannot be empty</p>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className={styles["label-txt"]}>Enter patent Granted Date </label>
                      </td>
                      <td>
                        <input
                          type="date"
                          max={new Date().toISOString().split('T')[0]}
                          value={patentGrantedDate}
                          onChange={patentGrantedDateChangedHandler}
                          onBlur={patentGrantedDateBlurHandler}
                        />
                        {patentGrantedDateHasError && (
                          <p className={styles["error-text"]}>patent granted date cannot be empty</p>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className={styles["label-txt"]}>Enter patent Published Number </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={patentPublishedNumber}
                          onChange={patentPublishedNumberChangedHandler}
                          onBlur={patentPublishedNumberBlurHandler}
                        />
                        {patentPublishedNumberHasError && (
                          <p className={styles["error-text"]}>patent Published Number cannot be empty</p>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>

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
