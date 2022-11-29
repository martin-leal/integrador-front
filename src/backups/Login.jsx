import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Setting de Estados
const [name, setName] = useState("");
const [lastname, setLastname] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

// Handlers de formulario

const handleChangeName = (e) => {
  setName(e.target.value);
};

const handleChangeLastname = (e) => {
  setLastname(e.target.value);
};

const handleChangePhone = (e) => {
  setPhone(e.target.value);
};

const handleChangeEmail = (e) => {
  setEmail(e.target.value);
};

const handleChangePassword = (e) => {
  setPassword(e.target.value);
};

const Login = () => {
  return (
    <section id="login">
      <div className="containter">
        <div className="row justify-content-center align-items-center">
          <div className="col col-12 col-md-6">
            <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-4">
              <form id="loginForm" className="form-login">
                <h1 className="card-titulo">Tu nueva vivienda está aquí.</h1>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <input
                      id="loginEmail"
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <input
                      id="loginPassword"
                      type="password"
                      className="form-control"
                      placeholder="Contraseña"
                    />
                    <button type="submit" className="btn bg-rojo centerButton">
                      Ingresar
                    </button>
                  </div>
                  <div className="form-group col-md-12"></div>
                </div>
              </form>
            </div>
          </div>

          <div className="col col-12 col-md-6">
            <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-4">
              <form id="registerForm" className="form-login">
                <h1 className="card-titulo">Registrate aquí</h1>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apellido"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Telefono"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      id="registerEmail"
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>

                  <div className="form-group col-md-12">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Contraseña"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <button
                      type="submit"
                      className="btn bg-rojo centerButton"
                      href="#loginModal"
                    >
                      Registrarme
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
