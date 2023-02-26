import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Imports CSS for bootstrap
import { Container, Col, Row, Button, Modal } from "react-bootstrap"; // Imports bootstrap elements
import { useState } from "react"; // import state from React

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Container>
      <h2>Clients</h2>
      <Row>
        <Col xs={10}>
          <div className="client_border">
            <p>
              Name: <b>Client1</b>
            </p>
            <p>
              Address: <b>Park Avenue 71</b>
            </p>
            <p>
              Date Created: <b>01-Dec-2022</b>
            </p>
          </div>
        </Col>
        <Col>
          <Button variant="primary" onClick={() => setIsModalVisible(true)}>
            Create New
          </Button>
        </Col>
      </Row>

      <Modal
        show={isModalVisible}
        onHide={() => {
          // we simply call the setter with the new value as a parameter
          setIsModalVisible(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New Customer</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setIsModalVisible(false);
            }}
          >
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
