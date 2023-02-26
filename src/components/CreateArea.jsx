import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import NoteServices from "../services/notes";

const CreateArea = () => {
  const [tittle, setTittle] = useState();
  const [body, setBody] = useState();

  const tittleChangeHandler = (event) => {
    setTittle(event.target.value);
  };
  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const resetState = () => {
    setTittle();
    setBody();
  };

  const submitHandler = async () => {
    const resp = await NoteServices.addNotes(tittle, body);

    if (resp.data.id) {
      resetState();
    } else {
      alert(`Failed to add note`);
      resetState();
    }
  };

  return (
    <Form className="create-area">
      <Form.Group className="mb-3" controlId="tittle">
        <Form.Control
          type="text"
          placeholder="Tittle"
          onChange={tittleChangeHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="body">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Your notes ..."
          onChange={bodyChangeHandler}
        />
      </Form.Group>
      <Button onClick={submitHandler}>Add</Button>
    </Form>
  );
};

export default CreateArea;
