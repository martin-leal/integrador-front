/* import React from "react";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import logo from '../assets/logoHOD.svg'
import {Link} from "react-router-dom";



const Detail = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    var id=searchParams.get("id");
    var propertyID="property_" + id;
    var property;
    axios.get("http://localhost:8000/api/property" + id).then(({data}) => setValue(data)),
    [];

    console.log(value);


  return (
    <> 
   

      <section id="homeList" className="mt-4 mb-4">
       


    <div className="container">
        <div className="row justify-content-md-center align-items-center ">
              <div className="col-md-4 pb-4">               
                    <img src={logo} alt="PROPIEDADES"/>
             </div> 
        </div>   
    </div>
    <div className="row justify-content-center align-items-center">
        <div className="col col-12 col-md-4">    
                <img className="card-img px-2" src= {property.image} alt= {property.address}/>
        </div>               
                    
    <div className="col col-12 col-md-3">
                <div className="card-detail">
                            <h4>{property.type} - Venta</h4>
                </div>
                <div className="card-detail">
                            <h4>{property.bedrooms} ambientes</h4>
                </div>
                <div className="card-detail">
                    <h4>{property.address}</h4>
                </div>
                <div className="card-detail">
                    <h4>$ {property.price}</h4>
                </div>
                <div className="card-detail-subtitle">
                    <h6  className="pb-2">{property.city} | {property.neigh}</h6>
                </div>
               
                
                <div className="card-detail-descrip">
                   <p>{property.description}</p>
                </div>
                <div>
                  <h4 className="card-detail text-muted">Para más información, programá una cita</h4>
                  <Link to="/visita">
                    <button type="submit" className="btn btn-primary centerButton" href="" >Solicitar una cita</button>  
                  </Link>
                  
                </div>
               
            </div>
            
 
  
   </div>
</section>

    </>
  );
};
  export default Detail; */