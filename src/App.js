import React from "react";
import Cards from "./component/cards";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Congratulation from "./Pages/Congratulation";
import NameInput from "./NameInput";
function App() {
  return (
    <BrowserRouter>
   
    <div>
      <h1>Tilse Matching Game</h1>
      
      <Routes>
        <Route path="/" element={<NameInput />} />

        <Route path=".component/cards" element={<Cards />} />
        <Route path="../Pages/congratulation" element={<Congratulation />} />
      </Routes>
      <Cards></Cards>
    </div>
  </BrowserRouter>
  );
 
}
export default App;
 