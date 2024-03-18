import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NewPage from "../pages/NewPage"

function MyVerticallyCenteredModal(props) {

  console.log(props)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <NewPage/>
          
        
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={props.createNew}>Crear</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal