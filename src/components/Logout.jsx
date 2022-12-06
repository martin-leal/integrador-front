import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Logout = ({ setUser }) => {
  const navigate = useNavigate() 

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/logout", { withCredentials: true })
      .then(() => {
        setUser({});
        navigate("/main")
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    </>
  );
};

export default Logout;
