import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

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
          <div className="body"></div>
          {/* render content from props below */}
          <form>
            <label for="name">Enter Publication Name</label>
            <input type="text" id="name"></input>
            <label for="date">Enter Publication date</label>
            <input type="text" id="date"></input>
            <label for="ID">Enter Publication ID</label>
            <input type="number" id="ID"></input>
          </form>
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
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay closeModal={props.closeModal} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
