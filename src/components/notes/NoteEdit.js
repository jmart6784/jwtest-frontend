import React, { useState, useContext, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";

const NoteEdit = (props) => {
  const [forms, setForms] = useState({ message: "" });
  // eslint-disable-next-line no-unused-vars
  const [globalContext, setGlobalContext] = useContext(GlobalContext);

  useEffect(() => {
    if (localStorage.getItem("token") === null) props.history.push("/sign_in");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (event) => {
    const { name, value } = event.target;

    setForms({ ...forms, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = `${globalContext.domain}/notes/${props.match.params.id}`;
    const { message } = forms;

    if (message.length === 0) return;

    const body = {
      message,
      user_id: localStorage.getItem("token"),
    };

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => props.history.push("/notes"))
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <h1>Note Edit</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="message">
          <span>Message:</span>
          <br />
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            onChange={onChange}
          />
        </label>

        <br />
        <br />

        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default NoteEdit;
