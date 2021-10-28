import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const NoteNew = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [globalContext, setGlobalContext] = useContext(GlobalContext);
  const [forms, setForms] = useState({ message: "" });

  const onChange = (event) => {
    const { name, value } = event.target;

    setForms({ ...forms, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = `${globalContext.domain}/notes`;
    const { message } = forms;

    if (message.length === 0) return;

    const body = {
      message,
      user_id: localStorage.getItem("token"),
    };

    fetch(url, {
      method: "POST",
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
      <h1>New Note</h1>

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

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default NoteNew;
