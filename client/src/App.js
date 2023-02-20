import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//components
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route exact path="/" element={<LoginRegister />} /> */}
        <Route path="/home" element={<Home />} />
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/foro" element={<Foro />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/createPokemon" element={<CreatePokemon />} /> */}
        {/* <Route path="/editPokemon" element={<EditPokemon />} /> */}
      </Routes>
    </div>
  );
}

export default App;
