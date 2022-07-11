import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Work from "./pages/work";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
