import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault(); // Prevenir la recarga de la página

    const response = await fetch(
      "https://didactic-space-spork-6xx766vrqq5c46qp-3001.app.github.dev/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    if (response.ok) {
      const json = await response.json();
      localStorage.setItem("token", json.token);
      navigate(); // Redirigir a la página protegida
    } else {
      console.error("Error en el login");
    }
  };

  const fetchUsers = async () => {
    const response = await fetch(
      "https://didactic-space-spork-6xx766vrqq5c46qp-3001.app.github.dev/api/users",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      }
    );
    const json = await response.json();
    console.log(json);
  };
  return (
    <div className="container">
      <ul className="list-group">
        <div className="container vh-100 mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6 bg-in">
              <div className="card bg-dark bg-opacity-50">
                <div className="card-body">
                  <h2 className="card-title text-center my-5 text-info">
                    Login
                  </h2>
                  <form>
                    <div className="mb-5">
                      <input
                        type="email"
                        className="form-control py-3"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <div className="input-group">
                        <input
                          type="password"
                          className="form-control py-3"
                          id="password"
                          name="password"
                          placeholder="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required                        
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        onSubmit={login}
                        className="btn btn-info w-60 fw-bold px-5 py-2"
                      >
                        LOGIN
                      </button>
                    </div>
                  </form>
                  <div className="my-4 text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};
