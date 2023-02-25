const URI = "https://simple-notes-app.fly.dev/api/notes";

class NoteServices {
  static addNotes = async (tittle, body) => {
    const resp = await fetch(URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tittle, body }),
    });
    return resp;
  };

  static getAllNotes = async () => {
    const resp = await fetch(URI);
    const data = await resp.json();
    return data;
  };

  static updateNoteByIdHandler = async (id, tittle, body) => {
    const resp = await fetch(URI + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tittle, body }),
    });

    return resp;
  };

  static deleteNoteByIdHandler = async (id) => {
    const resp = await fetch(URI + "/" + id, { method: "DELETE" });

    return resp;
  };
}

export default NoteServices;
