import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const NoteIndex = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [globalContext, setGlobalContext] = useContext(GlobalContext);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const url = `${globalContext.domain}/notes`;

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setNotes(response))
      .catch(() => props.history.push("/"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const noNotes = <div>No Notes yet.</div>;

  const notesJsx = notes.map((note) => {
    return (
      <div key={note.id}>
        <h3>Message: </h3>
        <p>{note.message}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>Note Index</h1>

      <div>{notes.length > 0 ? notesJsx : noNotes}</div>
    </div>
  );
};

export default NoteIndex;
