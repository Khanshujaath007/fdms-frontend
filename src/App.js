import "./App.css";
import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Multistepbar from "./components/Multistepbar.js";
import Multistepform from "./components/Multistepform.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import HomePage from "./components/HomePage/Home.js";

import questions from "./Questions.js"
// import Loginform from "./components/LoginForm/Loginform.js";
function App() {
  const [index, setIndex] = useState(1);
  const totalpagecount = questions.length;
  const prevButton = () => {
    if (index > 1) setIndex((prevIndex) => prevIndex - 1);
  };
  const nextButton = () => {
    if (index < 3) setIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
