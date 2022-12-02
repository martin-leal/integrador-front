import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainNavbar from "./MainNavbar";
import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [inmuebles, setInmuebles] = useState([]);
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState("");

  // FUNCION DE CUADRO DE INPUT
  const handleNameChange = (e) => {
    setSearch(e.target.value);
  };

  // FUNCION QUE EJECUTA EL CHECKBOX
  const handleCheckbox = (e) => {
    console.log(e.target.value);
    setCheck(e.target.value);
    //console.log(check); //DEVUELVE VACIO EL CONSOLE.LOG, DADO QUE ES ASINCRONO
  };

  // FUNCION DE ENVIO DEL BUTTON

  const handleSubmit = () => {
    console.log(check);
    if (check === "barrio") {
      axios
        .post(`http://localhost:8000/api/property/search/neigh/${search}`, {
          withCredentials: true,
        })
        .then(
          (propiedades) => {
            setInmuebles(propiedades);
            console.log(propiedades);
          }

          //console.log(inmuebles); // POR QUE ME IMPRIME OBJETO VACIO ACA??
        )
        //.then(() => console.log(inmuebles))
        .catch((error) => console.log(error));
    } else if (check === "ciudad") {
      axios
        .post(`http://localhost:8000/api/property/search/city/${search}`, {
          withCredentials: true,
        })
        .then(
          (propiedades) => {
            setInmuebles(propiedades);
            console.log(propiedades);
          }

          //console.log(inmuebles); // POR QUE ME IMPRIME OBJETO VACIO ACA??
        )
        //.then(() => console.log(inmuebles))
        .catch((error) => console.log(error));
    } else if (check === "precio") {
      axios
        .post(`http://localhost:8000/api/property/search/price/${search}`, {
          withCredentials: true,
        })
        .then(
          (propiedades) => {
            setInmuebles(propiedades);
            console.log(propiedades);
          }

          //console.log(inmuebles); // POR QUE ME IMPRIME OBJETO VACIO ACA??
        )
        //.then(() => console.log(inmuebles))
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div>
        <label>Formulario de busqueda</label>
        <input onChange={handleNameChange}></input>
      </div>
      <div>
        <button className="btn bg-rojo centerButton" onClick={handleSubmit}>
          Enviar
        </button>
      </div>
      <br></br>
      <p>
        Seleccione debajo el criterio de busqueda y haga click en "Enviar" luego
        de llenar el formulario.
      </p>
      <div onChange={handleCheckbox}>
        Barrio <input type="radio" name="busqueda" value="barrio" />
        <br></br>
        Ciudad <input type="radio" name="busqueda" value="ciudad" />
        <br></br>
        Precio "inferior a"{" "}
        <input type="radio" name="busqueda" value="precio" />
      </div>

      {/* <input
        onClick={searcher}
        type="text"
        placeholder="Search"
        className="form-control"
      ></input>
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>;
          })}
        </tbody>
      </table> */}
    </>
  );
};

export default Search;

//   const showData = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     setUsers(data);
//     console.log(users);
//   };

//const url = "https://jsonplaceholder.typicode.com/users";
