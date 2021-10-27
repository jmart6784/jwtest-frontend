import React, { useState, useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const SignUp = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [globalContext, setGlobalContext] = useContext(GlobalContext);
  const [forms, setForms] = useState({
    username: "",
    password_digest: "",
    age: null,
  });

  const onChange = (event) => {
    const { name, value } = event.target;

    setForms({ ...forms, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = `${globalContext.domain}/users`;
    const { username, password_digest, age } = forms;

    if (username.length === 0 || password_digest.length === 0 || age === null)
      return;

    const body = {
      username,
      password_digest,
      age,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => props.history.push("/sign_in"))
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="username">
          <span>Username</span>
          <input
            type="text"
            name="username"
            id="username"
            required
            onChange={onChange}
          />
        </label>

        <br />
        <br />

        <label htmlFor="password_digest">
          <span>Password</span>
          <input
            type="password"
            id="password_digest"
            name="password_digest"
            required
            onChange={onChange}
          />
        </label>

        <br />
        <br />

        <label htmlFor="password_digest">
          <span>Age</span>
          <input
            type="number"
            id="age"
            name="age"
            required
            onChange={onChange}
          />
        </label>

        <br />
        <br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
