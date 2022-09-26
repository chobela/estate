import React, { Children } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Properties from "./components/properties";
import Contactus from "./components/contactus";
import Login from "./components/login";
import Register from "./components/register";
import Forgot from "./components/forgot";
import Myprofile from "./components/myprofile";
import Myproperties from "./components/myproperties";
import Submitproperty from "./components/submitproperty";
import UserContext from "./context/userContext";

function App() {
  return (
    <UserContext>
      <BrowserRouter>
        <div className="page_loader"></div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/myprofile" element={<Myprofile />} />
          <Route path="/myproperties" element={<Myproperties />} />
          <Route path="/submitproperty" element={<Submitproperty />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
