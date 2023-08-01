import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Multistepbar from "./Multistepbar.js";
import Multistepform from "./Multistepform.js";
import questions from "../../Questions.js";
function Signup() {
  const [index, setIndex] = useState(1);
  const [pagesAnswers, setPagesAnswers] = useState({});
  const totalpagecount = questions.length;

  const navigate = useNavigate();

  const onPagesAnswerUpdate = (step, answerObj) => {
    setPagesAnswers({ ...pagesAnswers, [step]: answerObj });
  };

  const prevButton = () => {
    if (index > 1) setIndex((prevIndex) => prevIndex - 1);
  };

  const nextButton = async () => {
    if (index < totalpagecount) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      try {
        const response = await fetch('http://localhost:5500/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(pagesAnswers),
        });

        if (response.ok) {
          console.log('Registration successful!');
          navigate('/faculty-dashboard');
        } else {
          console.log('Registration failed!');
          // console.log(pagesAnswers[1].firstName)
        }
      } catch (error) {
        console.error('Error registering user:', error);
      }
    }
  };

  return (
    <>
      <Container className="h-100">
        <Row className="m-5">
          <Col className="align-self-center">
            <Multistepbar step={index} />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Card className="m-0">
            <Card.Body>
              <Multistepform
                step={index}
                list={questions}
                onPageUpdate={onPagesAnswerUpdate}
                pagesAnswers={pagesAnswers}
              />
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between ">
              <Button onClick={prevButton} disabled={index === 1} className="prev">
                Previous
              </Button>
              <Button onClick={nextButton} className="next">
                {totalpagecount === index ? "Submit" : "Next"}
              </Button>
            </Card.Footer>
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default Signup;
