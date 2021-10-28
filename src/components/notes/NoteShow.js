import React, { useEffect, useState, useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const NoteShow = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [globalContext, setGlobalContext] = useContext(GlobalContext);
  const [note, setNote] = useState({ message: "" });

  useEffect(() => {
    if (localStorage.getItem("token") === null) props.history.push("/sign_in");

    const url = `${globalContext.domain}/notes/${props.match.params.id}`;

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
      .then((response) => setNote(response))
      .catch(() => props.history.push("/"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Note Show</h1>
      <p>Message {note.message}</p>
    </div>
  );
};

export default NoteShow;
