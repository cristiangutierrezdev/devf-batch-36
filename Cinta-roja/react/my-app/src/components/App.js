import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Nav";
import axios from "axios";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  const [name, setName] = useState("Cristian");
  const [users, setUsers] = useState([]);

  const changeName = () => {
    setName(!name);
  };

  useEffect(() => {
    axios
      .get("https://nodejs-backend-666.herokuapp.com/api/v1/get/all/users")
      .then(result => {
        console.log(result.data)
        setUsers(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const showUsers = () => {
    return users.map(e => {
      return <li key={e._id}>{e.name}</li>;
    });
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/cristian" component={Nav} />
        <Link className="etiqueta" to="/cristian">
          Ir a Cristian
        </Link>
        <h1>Hello {name}</h1>
        <button onClick={changeName}>Cambiar nombre</button>
        {showUsers()}
      </div>
    </BrowserRouter>
  );
}

export default App;
