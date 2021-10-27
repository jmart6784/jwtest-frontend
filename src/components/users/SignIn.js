import React, { useState } from "react";

const SignIn = (props) => {
  const [forms, setForms] = useState({
    username: "",
    password_digest: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;

    setForms({ ...forms, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:3000/login";
    const { username, password_digest } = forms;

    if (username.length === 0 || password_digest.length === 0) return;

    const body = {
      username,
      password_digest,
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
      .then((response) => {
        localStorage.setItem("token", response.token);
        props.history.push("/notes");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <h1>Sign In</h1>

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

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
