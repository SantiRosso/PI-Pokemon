import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";

export const getAllPokemons = () => {
  return async (dispatch) => {
    let result = await axios.get("http://localhost:3001/pokemons");
    return dispatch({ type: GET_ALL_POKEMONS, payload: result.data });
  };
};

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    let result = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
    return dispatch({ type: GET_POKEMON_BY_NAME, payload: result.data });
  };
};
