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
      .then((data) => setNotes(data.notes))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <MyHeader />
      <Container>
        <CreateArea />
        <Container className="notes-area">
          {notes &&
            notes.map((note) => (
              <MyNote
                key={note._id}
                tittle={note.tittle}
                body={note.note}
                noteId={note.id}
              />
            ))}
        </Container>
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
