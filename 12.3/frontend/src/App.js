import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Imports CSS for bootstrap
import { Container, Col, Row, Button } from "react-bootstrap"; // Imports bootstrap elements
import { useState } from "react"; // import state from React
import CreateCustomer from "./CreateCustomer";
import { useQuery, gql } from "@apollo/client";

const GET_CUSTOMERS_QUERY = gql`
  query getCustomers {
    getCustomers {
      id
      name
      address
      dateCreated
    }
  }
`;

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { loading, error, data } = useQuery(GET_CUSTOMERS_QUERY);

  return (
    <Container>
      <h2>Clients</h2>
      <Row>
        <Col xs={10}>
          {data &&
            data.getCustomers.map((client) => {
              return (
                <div className="client_border">
                  <p>
                    Name: <b>{client.name}</b>
                  </p>
                  <p>
                    Address: <b>{client.address}</b>
                  </p>
                  <p>
                    Date Created: <b>{client.dateCreated}</b>
                  </p>
                </div>
              );
            })}
        </Col>
        <Col>
          <Button variant="primary" onClick={() => setIsModalVisible(true)}>
            Create New
          </Button>
        </Col>
      </Row>
      <CreateCustomer
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </Container>
  );
}

export default App;
