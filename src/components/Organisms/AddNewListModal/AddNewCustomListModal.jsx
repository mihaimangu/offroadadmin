import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function AddNewCustomListModal({show, onClose, onSubmit}) {
    
    const [value, setValue] = useState(null);

    return (
          <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
              <Modal.Title>Adauga anunt in lista</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                 Cum se numeste noua lista?
                  <Form.Control type="text" placeholder="Nume lista" onChange={e => setValue(e.target.value)}  >
                    
                  </Form.Control>
              </div>
            </Modal.Body>
            <Modal.Footer>
           
              <Button variant="primary" onClick={() => onSubmit(value)}>
                Save changes
              </Button>
            </Modal.Footer>
          </Modal>
      );
}

export default AddNewCustomListModal