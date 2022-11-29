import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Favorites = ({ user }) => {
  useEffect(() => {
    if (!user?.id) return;
    axios
      .get(`http://localhost:8000/api/user/getFavorite/${user.id}`, {
        withCredentials: true,
      })
      .then((propiedades) => {
        console.log(propiedades);
      })
      .catch((error) => console.log(error));
  }, [user]);
  return <></>;
};

export default Favorites;
