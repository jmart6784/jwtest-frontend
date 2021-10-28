import React, { useEffect, useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const UserShow = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [globalContext, setGlobalContext] = useContext(GlobalContext);
  const [user, setUser] = useState({
    id: "",
    username: "",
    age: "",
    created_at: "",
    updated_at: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token") === null) props.history.push("/sign_in");

    const url = `${globalContext.domain}/users/${props.match.params.id}`;

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
      .then((response) => setUser(response))
      .catch(() => props.history.push("/"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>User Show</h1>
      <p>Username: {user.username}</p>
      <p>age: {user.age}</p>
    </div>
  );
};

export default UserShow;
