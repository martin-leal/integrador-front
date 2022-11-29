import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainNavbar from "./MainNavbar";

const Nosotros = () => {
  return (
    <>
      <section id="homeList" className="mt-4 mb-4">
        <div className="container">
          <div className="row justify-content-md-center align-items-center ">
            <div className="col-md-6 pb-6">
              <h1>NOSOTROS</h1>
            </div>
          </div>
        </div>

        <img
          className="nosotros"
          src="https://mountx.io/wp-content/uploads/2022/02/nosotros-mountx-quienes.webp"
          alt="nosotros"
        />
      </section>
    </>
  );
};

export default Nosotros;
