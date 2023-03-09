import axios from "axios";
import { showMessage } from "../ShowMessage";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const RESET_FILTERS = "RESET_FILTERS";

export const getAllPokemons = () => {
  return async (dispatch) => {
    let result = await axios.get("http://localhost:3001/pokemons");
    return dispatch({ type: GET_ALL_POKEMONS, payload: result.data });
  };
};

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    try {
      let result = await axios.get(
        `http://localhost:3001/pokemons?name=${name}`
      );
      return dispatch({ type: GET_POKEMON_BY_NAME, payload: result.data });
    } catch (error) {
      showMessage("Pokemon not found.", "error");
    }
  };
};

export const resetFilters = (dispatch) => {
  return (dispatch) => {
    return dispatch({ type: RESET_FILTERS });
  };
};
