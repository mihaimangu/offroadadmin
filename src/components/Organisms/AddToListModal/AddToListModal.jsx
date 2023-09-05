import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function AddToListModal({show, onClose, onExecute, options = []}) {
    
    const [value, setValue] = useState(null);

    return (
          <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
              <Modal.Title>Adauga anunt in lista</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                  In ce lista vrei sa adaugi acest anunt?
                  <Form.Select aria-label="Default select example" defaultValue={0} onChange={(e) => setValue(e.target.value)}>
                    <option value={0} disabled>Selecteaza</option>
                    {options.map((option) => {
                        return <option key={option._id} value={option._id}>{option.name}</option>
                    })}
                  </Form.Select>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onClose}>
                Close
              </Button>
              <Button variant="primary" onClick={() => onExecute(value)}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
      );
}

export default AddToListModal