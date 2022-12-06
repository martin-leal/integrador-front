import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainNavbar from "./MainNavbar";
import useInput from "../hooks/useInput";
import axios from "axios";
import {Link} from "react-router-dom";


const Visita = () => {

  const image = useInput();
  const address = useInput();
  const price = useInput();
  const city = useInput();
  const neigh = useInput();
  const type = useInput();
  const bedrooms = useInput();
  const description = useInput();
  const code = useInput();
  
  const addPropertyHandler = (e) => {
    e.preventDefault();
    var data = { 
      image: image.value,
      address: address.value,
      price: price.value,
      city:city.value, 
      neigh:neigh.value,
      type:type.value,
      description:description.value,
      bedrooms:bedrooms.value,
      code: code.value
    };

    axios.post("http://localhost:8000/api/property/add", data).then((res) => {
      console.warn(res.data);
      return res.data;
    });
  };


  return (
    <>
    <section id="addProperty" className="backgroun-marca-agua">
          <div className="containter">
            <div className="row justify-content-center align-items-center">
                <div className="col col-12 col-md-8">               
                        <form id="addPropertyForm" className="form-appraisals" onSubmit={addPropertyHandler}>
                          <p>Agregar una propiedad</p>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input  type="text" className="form-control" placeholder="Código de referencia" {...code} />
                                </div>
                            </div>

                            <div className="form-row">
                          
                                <div className="form-group col-12 col-md-4">                            
                                    <input type="text" className="form-control" placeholder="Domicilio" {...address} />
                                </div>
                                <div className="form-group col-12 col-md-4">
                                    <input type="text" className="form-control" placeholder="Ciudad" {...city} />
                                </div>                        
                                <div className="form-group col-12 col-md-4">
                                        <input type="text" className="form-control" placeholder="Barrio"  {...neigh} />
                                </div>
                            </div> 
            
                            <div className="">
                                <input type="text" className="form-control" placeholder="Tipo de Propiedad" {...type} />
                            </div>

                            <div className="pt-3">
                                <input type="text" className="form-control" placeholder="Ambientes" {...bedrooms} />
                            </div>

                            <div className="pt-3">
                                <input type="text" className="form-control" placeholder="Imagen" {...image} />
                            </div>                                              
                            
                            <div className="pt-3">
                                <textarea className="form-control" placeholder="Descripción" rows="3" {...description} ></textarea>
                            </div>
                            
                            <div className="pt-3">
                                <input type="text" className="form-control" placeholder="Precio" {...price} />
                            </div>

                            {/* <div className="pt-3">
                                <select className="custom-select mr-sm-2" placeholder="Categoría" {...category}>
                                <option value="">Seleccione una categoría</option>
                                {categories.map ((info) => (
                                    <option value={info.id}>{info.name}</option>
                                ))};
                                  
                                </select>                            
                            </div> */}

                            <div className="pt-3">
                                <Link to="/enventa">
                                  <button type="submit" className="btn centerButton">Agregar Propiedad</button>
                                </Link>
                                  
                            </div>

                        </form>

            
            </div>
          </div>
        </div> 
              

    </section>

      
    </>
  );
};

export default Visita;
