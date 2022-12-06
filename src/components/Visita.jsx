import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const Visita = () => {

  return (
    <>
      <section id="homeList" className="mt-4 mb-4">
        <div className="container">
          <div className="row justify-content-md-center align-items-center ">
            <div className="col-md-6 pb-6">
              <h1>AGENDA UNA VISITA</h1>
            </div>
          </div>
        </div>

        <img
          className="calendario"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfA2TTg3LmYSZa_ckZ0eoLOYbgWOuE5qHVInTFe5KpYAkad4OtZqmlRb8__7VfEMb5E4&usqp=CAU"
          alt="calendario"
        />
      </section>
    </>
  );
};

export default Visita;
