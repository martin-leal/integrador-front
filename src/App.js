import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import OnBoarding from "./components/OnBoarding";
import Login from "./components/Login";
import EnVenta from "./components/EnVenta";
import Alquiler from "./components/Alquiler";
import Visita from "./components/Visita";
import Nosotros from "./components/Nosotros";
import { useEffect, useState } from "react";
import axios from "axios";
import MainNavbar from "./components/MainNavbar";
import Logout from "./components/Logout";
import Favorites from "./components/Favorites";
import Search from "./components/Search";


function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/me", { withCredentials: true })
      .then((usuario) => {
        setUser(usuario.data);
        console.log(usuario);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <MainNavbar user={user} />

      <Routes>
        <Route path="/" element={<OnBoarding data-target="#onBoarding" />} />
        <Route
          path="/main"
          element={<Main data-target="#main" user={user} />}
        />
        <Route
          path="/login"
          element={<Login data-target="#login" setUser={setUser} />}
        />
        <Route path="/enventa" element={<EnVenta data-target="#enventa" />} />
        <Route
          path="/alquiler"
          element={<Alquiler data-target="#alquiler" />}
        />
        <Route path="/visita" element={<Visita data-target="#visita" />} />
        <Route
          path="/nosotros"
          element={<Nosotros data-target="#nosotros" />}
        />
        <Route
          path="/logout"
          element={<Logout data-target="#logout" setUser={setUser} />}
        />
        <Route
          path="/favorites"
          element={<Favorites data-target="#nosotros" user={user} />}
        />
        <Route path="/search" element={<Search data-target="#search" />} />
      </Routes>
    </>
  );
}

export default App;
