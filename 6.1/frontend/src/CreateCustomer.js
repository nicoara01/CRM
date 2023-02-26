import { Button, Modal } from "react-bootstrap"; // Imports bootstrap elements

function CreateCustomer(props: { isModalVisible }) {
  return <Modal
    show={props.isModalVisible}
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
}

export default CreateCustomer