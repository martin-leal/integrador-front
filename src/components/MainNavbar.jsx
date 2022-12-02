import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import logo from "../assets/logoHOD.svg";

const MainNavbar = ({ user }) => {
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <nav
        id="header"
        className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top"
      >
        <div className="container">
          <a className="navbar-brand" href="/main">
            <img
              src={logo}
              alt="House of Dev logo"
              width="65"
              height="45"
              className="d-inline-block align-text-top"
            />
          </a>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/enventa">
                  En venta
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/alquiler">
                  Alquiler
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/visita">
                  Agendá tu visita
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/nosotros">
                  Nosotros
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="/login">
                  Ingresar / Registrarse
                </a>
              </li>
              <li>
                <h2>{user?.name ? "Hola " + user?.name : null}</h2>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="/logout">
                  Logout
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="/search">
                  Buscador
                </a>
              </li>
            </ul>

            {/* {!user ? (
            <>
               */}
            {/* <li className="nav-item ">
              <a className="nav-link " href="/login">
                Ingresar/Registrarse
              </a>
            </li>*/}
            {/*  </>
      ) : user.role === "admin"? (
              <>
              <li className="form-inline my-2 my-lg-0">
            <a className="nav-link" href="admin" >Administrar página</a>
            </li>
            <li className="form-inline my-2 my-lg-0">
            <a className="nav-link"  >Hola {user.name.toUpperCase()}</a>
            </li>
            <li className="form-inline my-2 my-lg-0">
            <a className="nav-link" href="logout" onClick={logoutHandler}>Salir</a>
            </li>
            </>
      ) : (
              <>
            <li className="form-inline my-2 my-lg-0">
            <a className="nav-link " href={"profile"} >Hola {user.name.toUpperCase()}</a>
            </li>
            <li className="form-inline my-2 my-lg-0">
            <a className="nav-link " href={"profile"} >Mi perfil</a>
            </li>
            <li className="form-inline my-2 my-lg-0">
            <a className="nav-link" href="logout" onClick={logoutHandler}>Salir</a>
            </li>
            </>
          )} */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
