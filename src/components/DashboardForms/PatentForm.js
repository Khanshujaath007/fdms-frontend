import React from "react";
import ReactDOM from "react-dom";
import "./Form.css";
const ModalOverlay = (props) => {
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
            <form>
              <div>
                <label>Enter Patent Name</label>
                <input type="text"></input>
              </div>
              <div>
                <label>Enter Patent date</label>
                <input type="date"></input>
              </div>
              <div>
                <label>Enter Patent Link</label>
                <input type="text"></input>
              </div>
            </form>
          </div>
          <div className="footer">
            <button onClick={() => props.closeModal(false)} id="cancelBtn">
              Cancel
            </button>
            <button>Submit</button>
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
