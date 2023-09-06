import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function AddToListModal({show, onClose, onSubmit, options = []}) {
    
    const [value, setValue] = useState(null);

    const changeValue = (value) => {
      setValue(value)
    }

    const closeModal = () => {
      setValue(null);
      onClose();
    }

    return (
          <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Adauga anunt in lista</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                  In ce lista vrei sa adaugi acest anunt?
                  <Form.Select aria-label="Default select example" defaultValue={false} onChange={e => changeValue(e.target.value)} >
                    <option value={false} disabled>Selecteaza</option>
                    {options.map((option) => {
                        return <option key={option._id} value={option._id}>{option.name}</option>
                    })}
                  </Form.Select>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Inchide
              </Button>
              <Button variant="primary" onClick={() => onSubmit(value)} disabled={!value}  >
                Adauga
              </Button>
            </Modal.Footer>
          </Modal>
      );
}

export default AddToListModal