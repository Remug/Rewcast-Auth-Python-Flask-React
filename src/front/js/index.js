//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));


// instalar extension thunderclient y pegar la direccion del backend para crear usuario
// crear usuario en la ruta api/auth/signup
// logarse en la pagina de login

