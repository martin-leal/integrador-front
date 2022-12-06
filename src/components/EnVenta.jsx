import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Search from "./Search";
import { useEffect, useState } from "react";
import axios from "axios"
import {Link} from "react-router-dom"; 


const EnVenta = () => {
  
  const [value, setValue] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8000/api/property").then(({data})=>setValue(data))
  }, []);
   console.log(value);

  return (
    <>
      <section id="homeList" className="mt-4 mb-4">
        <div className="container">
          <div className="row justify-content-md-center align-items-center ">
            <div className="col-md-6 pb-6">
              <h1>PROPIEDADES EN VENTA</h1>
            </div>
          </div>
        </div>

        <img
          className="banner"
          src="https://www.vivaemsousas.com.br/wp-content/uploads/2018/07/banner-casas.jpg"
          alt="casa"
        />

        <div className="backgroun-grey">
          <div className="row px-5">
            {value.map((property)=><div className="col-md-4 pb-4">
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
                  <Link to="/detail">
                      <button className="btn btn-primary">VER MÁS</button>  
                  </Link>
                </div>
              </div>
              </div>
              )}
            
            </div>
            </div>    
      </section>
    </>
  );
};

export default EnVenta;
