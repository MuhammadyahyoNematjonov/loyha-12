import React from "react";
import { Routes, Route } from "react-router-dom";
import Asosiy from "./Asosiy";
import Login from "./login";
import Register from "./Register";
import Kurslar from "./Kurslar";
import BizHaqimizda from "./BizHaqimizda";
import Boglanish from "./Boglanish";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Asosiy />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Kurslar" element={<Kurslar />} />
      <Route path="/BizHaqimizda" element={<BizHaqimizda />} />
      <Route path="/Boglanish" element={<Boglanish />} />

    </Routes>
  );
}

export default App;
