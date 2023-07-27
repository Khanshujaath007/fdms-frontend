import "./App.css";
import Loginform from "./components/Loginform";
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