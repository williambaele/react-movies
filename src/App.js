import React from "react";
import Home from "./pages/Home";
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Liked from "./pages/Liked";




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/liked" element={<Liked />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
