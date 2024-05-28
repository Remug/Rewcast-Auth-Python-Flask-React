import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const fetchUsers = async () => {
	  const response = await fetch(
		"https://fictional-telegram-xggq66r97r4cvwq4-3000.app.github.dev/api/users"
	  );
	  const json = await response.json();
	  console.log(json);
  };
	
  const login = async () => {
    const response = await fetch(
      "https://fictional-telegram-xggq66r97r4cvwq4-3000.app.github.dev/api/auth/login",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          password: "testtest1",
          email: "test1@test.com",
        }),
      }
    );
    const json = await response.json();
    console.log(json.token);
  };

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      <p>
        <img src={rigoImageUrl} />
      </p>
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://start.4geeksacademy.com/starters/react-flask">
          Read documentation
        </a>
      </p>
      <button onClick={fetchUsers}>Obtener Usuarios</button>
      <button onClick={login}>login</button>
    </div>
  );
};
