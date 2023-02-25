import { useState } from "react";
import { Card } from "react-bootstrap";
import NoteModal from "./NoteModal";

const MyNote = ({ noteId, tittle, body }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card className="my-card" onClick={handleShow}>
      <Card.Body>
        <Card.Title>{tittle}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
      <NoteModal
        handleClose={handleClose}
        show={show}
        id={noteId}
        tittle={tittle}
        body={body}
      />
    </Card>
  );
};

export default MyNote;
