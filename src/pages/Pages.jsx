import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "../pages/Searched";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Recipe from "./Recipe";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
