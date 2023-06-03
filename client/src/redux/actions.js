import axios from "axios";
import { showMessage } from "../ShowMessage";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const RESET_FILTERS = "RESET_FILTERS";
export const GET_FILTERS = "GET_FILTERS";
export const GET_TYPES = "GET_TYPES";
export const GET_ORDER_ALPHABET = "GET_ORDER_ALPHABET";
export const GET_ORDER_ATTACK = "GET_ORDER_ATTACK";

export const getAllPokemons = () => {
  return async (dispatch) => {
    let result = await axios.get("/pokemons");
    return dispatch({ type: GET_ALL_POKEMONS, payload: result.data });
  };
};

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    try {
      let result = await axios.get(`/pokemons?name=${name}`);
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

export const getFilters = (payload) => {
  return async (dispatch) => {
    return dispatch({ type: GET_FILTERS, payload });
  };
};

export const getOrderAlphabet = (payload) => {
  return async (dispatch) => {
    console.log(payload);
    return dispatch({ type: GET_ORDER_ALPHABET, payload });
  };
};

export const getOrderAttack = (payload) => {
  return async (dispatch) => {
    console.log(payload);
    return dispatch({ type: GET_ORDER_ATTACK, payload });
  };
};

export const getTypes = () => {
  return async (dispatch) => {
    const types = await axios.get("/types");
    return dispatch({ type: GET_TYPES, payload: types.data });
  };
};
