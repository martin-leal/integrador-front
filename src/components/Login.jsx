import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MainNavbar from "./MainNavbar";

// HANDLER DEL SUBMIT DE FORMULARIOS

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  // SETTING DE ESTADOS LOGIN

  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");

  // SETTING DE ESTADOS REGISTRO
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // HANDLERS DE FORMULARIO LOGIN

  const handleChangeLogEmail = (e) => {
    setLogEmail(e.target.value);
  };

  const handleChangeLogPassword = (e) => {
    setLogPassword(e.target.value);
  };

  // HANDLERS DE FORMULARIO REGISTER

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

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/user/login",
        {
          email: logEmail,
          password: logPassword,
        },
        { withCredentials: true }
      )
      .then((res) => setUser(res.data))

      .catch((error) => console.log(error.response.data));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/user/add", {
        name,
        lastname,
        phone,
        email,
        password,
      })
      .then((res) => console.log("usuario creado correctamente"));
  };

  return (
    <>
      <section id="login">
        {/*FORMULARIO DE LOGIN*/}
        <div className="containter">
          <div className="row justify-content-center align-items-center">
            <div className="col col-12 col-md-6">
              <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-4">
                <form
                  id="loginForm"
                  className="form-login"
                  onSubmit={handleLoginSubmit}
                >
                  <h1 className="card-titulo">Tu nueva vivienda está aquí.</h1>
                  {/*INPUT DE EMAIL LOGIN*/}
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <input
                        value={logEmail}
                        onChange={handleChangeLogEmail}
                        id="loginEmail"
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  {/*INPUT DE PASSWORD LOGIN*/}
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <input
                        value={logPassword}
                        onChange={handleChangeLogPassword}
                        id="loginPassword"
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                      />
                      {/*BOTON DE SUBMIT DE LOGIN*/}
                      <button
                        type="submit"
                        className="btn bg-rojo centerButton"
                      >
                        Ingresar
                      </button>
                    </div>
                    <div className="form-group col-md-12"></div>
                  </div>
                </form>
              </div>
            </div>
            {/*FORMULARIO DE REGISTRO*/}
            <div className="col col-12 col-md-6">
              <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-4">
                <form
                  id="registerForm"
                  className="form-login"
                  onSubmit={handleRegisterSubmit}
                >
                  <h1 className="card-titulo">Registrate aquí</h1>
                  {/*INPUT DE NAME REGISTRO*/}
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <input
                        value={name}
                        onChange={handleChangeName}
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                      />
                    </div>
                    {/*INPUT DE LASTNAME REGISTRO*/}
                    <div className="form-group col-md-12">
                      <input
                        value={lastname}
                        onChange={handleChangeLastname}
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                      />
                    </div>
                  </div>
                  {/*INPUT DE PHONE REGISTRO*/}
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <input
                        value={phone}
                        onChange={handleChangePhone}
                        type="text"
                        className="form-control"
                        placeholder="Telefono"
                      />
                    </div>
                    {/*INPUT DE EMAIL REGISTRO*/}
                    <div className="form-group col-md-12">
                      <input
                        value={email}
                        onChange={handleChangeEmail}
                        id="registerEmail"
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    {/*INPUT DE PASSWORD REGISTRO*/}
                    <div className="form-group col-md-12">
                      <input
                        value={password}
                        onChange={handleChangePassword}
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                      />
                    </div>
                    {/*BOTON DE SUBMIT DE REGISTRO*/}
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
    </>
  );
};

export default Login;
