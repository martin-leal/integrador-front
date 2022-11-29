import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Logout = ({ setUser }) => {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/logout", { withCredentials: true })
      .then(() => {
        setUser({});
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <section id="homeList" className="mt-4 mb-4">
        <div className="container">
          <div className="row justify-content-md-center align-items-center ">
            <div className="col-md-6 pb-6">
              <h1>Usuario deslogueado correctamente</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Logout;
