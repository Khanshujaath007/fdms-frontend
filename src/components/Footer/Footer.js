import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import './Footer.css';
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="footer bg-body-tertiary black-text">
      <div className={styles["footer-container"]} id="footer">
        <Container className="d-flex justify-content-center align-items-center">
          <p className="text-dark mb-0 footer-text">
            © 2023 FDMS. All rights reserved.
          </p>
          <div className="ms-auto">
            <a href="#fac" className="me-3 text-dark">
              <FaFacebook />
            </a>
            <a href="#tw" className="me-3 text-dark">
              <FaTwitter />
            </a>
            <a href="#ins" className="text-dark">
              <FaInstagram />
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
