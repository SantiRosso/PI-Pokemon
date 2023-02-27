import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//components
import Home from "./components/Home/Home";
import Pokemons from "./components/Pokemons/Pokemons";
import Profile from "./components/Profile/Profile";
import Foro from "./components/Foro/Foro";
import About from "./components/About/About";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginRegister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemon-detail/:id" element={<PokemonDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/foro" element={<Foro />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-pokemon" element={<CreatePokemon />} />
        {/* <Route path="/editPokemon" element={<EditPokemon />} /> */}
      </Routes>
    </div>
  );
}

export default App;
