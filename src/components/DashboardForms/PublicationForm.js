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
            <h1>Fill Publication Details</h1>
          </div>
          <div className="body">
            <form>
              <div>
                <label>Enter Publication Name</label>
                <input type="text"></input>
              </div>
              <div>
                <label>Enter Publication date</label>
                <input type="date"></input>
              </div>
              <div>
                <label>Enter Publication Link</label>
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
