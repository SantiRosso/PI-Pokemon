import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";

export const getAllPokemons = () => {
  return async (dispatch) => {
    let result = await axios.get("http://localhost:3001/pokemons");
    return dispatch({ type: GET_ALL_POKEMONS, payload: result.data });
  };
};
