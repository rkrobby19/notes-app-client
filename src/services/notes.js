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
    return resp;
  };
}

export default NoteServices;
