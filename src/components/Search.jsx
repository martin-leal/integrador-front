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
            setInmuebles([propiedades.data]);
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
            setInmuebles([propiedades.data]);
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
            setInmuebles([propiedades.data]);
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
      <section className="background-marca-agua">
        <div className="containter">
          <div className="formulario-search">
          
          <label className="formulario-titulo">Formulario de busqueda</label>
          
          <p className="formulario-filtrar">
            Filtar por:
          </p>

          <div onChange={handleCheckbox}>
              <li className="seleccion">
                Barrio <input type="radio" name="busqueda" value="barrio" />
              </li>
            
              <li className="seleccion">
                Ciudad <input type="radio" name="busqueda" value="ciudad" />
              </li>
            
              <li className="seleccion">
                Precio "inferior a"{" "}
                <input type="radio" name="busqueda" value="precio" />
              </li>            
          </div>
          
          <input className="input" onChange={handleNameChange}></input>

          <div>
          <button className="btn bg-rojo centerButton" onClick={handleSubmit}>
            Enviar
          </button>
        </div>

        </div>
               
        </div>

        {inmuebles.map((property)=><div className="col-md-3 pb-3 mt-40">
          <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                <img
                  className="card-img-top btn"
                  src={property.image}
                  alt="casa"
                />
                <div className="card-body mb-2 text-muted text-center">
                  <div className="card-title border border-primary">
                    <h4> {property.bedrooms} </h4>
                  </div>
                  <div className="card-subtitle mb-2 border border-primary">
                    <h5 className="pb-2">{property.city}</h5>
                  </div>
                  <div className="card-text mb-2 border border-primary">
                    <h5>{property.neigh}</h5>
                  </div>
                  <div className="card-text mb-2 border border-primary">
                    <h5>{property.type}</h5>
                  </div>
                  <div className="card-text mb-2 border border-primary">
                    <h5>{property.bedrooms}</h5>
                  </div>
                  <div className="card-text mb-2 border border-primary">
                    <h5>{property.description}</h5>
                  </div>
                  <div className="card-text  mb-4 border border-primary">
                    <h5>{property.price}</h5>
                  </div>
                 
                </div>
              </div>
               
                </div>)}
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
      </section>
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
