import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Multistepbar from "./Multistepbar.js";
import Multistepform from "./Multistepform.js";
import questions from "../../Questions.js";
function Signup() {
  const [index, setIndex] = useState(1);
  const [pagesAnswers, setPagesAnswers] = useState({});
  const totalpagecount = questions.length;
  const onPagesAnswerUpdate = (step, answerObj) => {
    setPagesAnswers({ ...pagesAnswers, [step]: answerObj });
  };
  const prevButton = () => {
    if (index > 1) setIndex((prevIndex) => prevIndex - 1);
  };
  const nextButton = () => {
    if (index < 3) setIndex((prevIndex) => prevIndex + 1);
    else {
      console.log(pagesAnswers)
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
    </>
  );
}

export default Signup;
