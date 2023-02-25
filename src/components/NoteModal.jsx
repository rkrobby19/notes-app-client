import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NoteServices from "../services/notes";

const NoteModal = ({ show, handleClose, id, tittle, body }) => {
  const [newTittle, setTittle] = useState(tittle);
  const [newBody, setBody] = useState(body);

  const tittleChangeHandler = (event) => {
    setTittle(event.target.value);
  };
  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const updateHandler = async (id, tittle, body) => {
    const resp = await NoteServices.updateNoteByIdHandler(id, tittle, body);
    const data = await resp.json();

    console.log(data);
  };

  const deleteHandler = (noteId) => {
    NoteServices.deleteNoteByIdHandler(noteId)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="tittle">
            <Form.Control
              type="text"
              defaultValue={tittle}
              onChange={tittleChangeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="body">
            <Form.Control
              as="textarea"
              rows={3}
              defaultValue={body}
              onChange={bodyChangeHandler}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Discard
        </Button>
        <Button
          variant="primary"
          onClick={() => updateHandler(id, newTittle, newBody)}
        >
          Update
        </Button>
        <Button variant="danger" onClick={() => deleteHandler(id)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NoteModal;
