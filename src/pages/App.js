import React, { useState, useEffect } from "react";
import "../styles/app.css";
import MyHeader from "../components/Header";
import { Container } from "react-bootstrap";
import MyFooter from "../components/Footer";
import MyNote from "../components/Note";
import CreateArea from "../components/CreateArea";
import NoteServices from "../services/notes";

function App() {
  const [notes, setNotes] = useState();

  useEffect(() => {
    NoteServices.getAllNotes()
      .then((resp) => resp.json())
      .then((data) => setNotes(data.notes))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <MyHeader />
      <Container>
        <CreateArea />
        <Container className="notes-area">
          {notes.map((note) => (
            <MyNote tittle={note.tittle} body={note.body} />
          ))}
        </Container>
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
