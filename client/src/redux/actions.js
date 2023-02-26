import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";

export const getAllPokemons = () => {
  return async (dispatch) => {
    let result = axios.get("/pokemons");
    return dispatch({ type: GET_ALL_POKEMONS, payload: result.data });
  };
};
