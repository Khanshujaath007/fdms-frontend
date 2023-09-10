import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
// import './Home.css';
import styles from "./Home.module.css";
import homeImg from "../../Assets/Image/Vector_Art_for_excel.jpg";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div>
      <Header />
      <div className={styles["diagonal-bg"]}>
        <div className={`text-center ${styles["main-header"]}`}>
          <h1 className={`display-4 text-white${styles["title"]}`}>
            Welcome to Faculty Management
          </h1>
          <p className={styles["lead text-white"]}>
            Manage all your data in one platform and enjoy seamless storage and
            organization.
          </p>
          <div>
            <Button
              variant="primary"
              className={`me-3 ${styles["btn-1"]}`}
              onClick={handleSignup}
            >
              Sign In
            </Button>
            <Button variant="secondary" className={styles["btn-2"]} onClick={handleLogin}>
              Log In
            </Button>
          </div>
        </div>
      </div>
      <div className="body">
        <div className={styles["about-container"]} id="about">
          <div className={styles["about-content"]}>
            <h1 className={styles["display-4 about-title"]}>About</h1>
            <p className={styles["lead"]}>
              This web application will help Faculty to maintain their important
              data in one platform where they can easily access their data and
              update it whenever they want. The admin can get all the
              information about the faculty, and mainly, this platform will help
              provide data for the committee. The admin can generate all the
              data of the faculty in one Excel sheet dynamically and provide it
              to the committee with just one click.
            </p>
          </div>
          <div className={styles["about-image"]}>
            <img src={homeImg} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
