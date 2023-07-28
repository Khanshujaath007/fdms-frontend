import "./App.css";
<<<<<<< HEAD
import Signup from "./components/SignupForm/Signup";
=======
import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Multistepbar from "./components/Multistepbar.js";
import Multistepform from "./components/Multistepform.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import HomePage from "./components/HomePage/Home.js";

import questions from "./Questions.js"
// import Loginform from "./components/LoginForm/Loginform.js";
>>>>>>> af44885b10fd34c63f0309b713bd11bcbb6ea753
function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Signup></Signup>
=======
      {/* <Header />
      <HomePage />  
      <Footer /> */}
      <Container className="h-100">
        <Row className="m-5">
          <Col className="align-self-center">
            <Multistepbar step={index} />
          </Col>
        </Row>
        <Row>
          <Card>
            <Card.Body>
              <Multistepform step={index} list={questions} />
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between ">
              <Button onClick={prevButton} disabled={index === 1}>
                Previous
              </Button>
              <Button onClick={nextButton}>
                {totalpagecount === index ? "Submit" : "Next"}
              </Button>
            </Card.Footer>
          </Card>
        </Row>
      </Container>
>>>>>>> af44885b10fd34c63f0309b713bd11bcbb6ea753
    </div>
  );
}

export default App;
