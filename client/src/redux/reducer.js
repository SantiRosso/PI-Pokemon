import {
  GET_ALL_POKEMONS,
  GET_POKEMON_BY_NAME,
  RESET_FILTERS,
  GET_FILTERS,
} from "./actions";

const initialState = {
  pokemons: [],
  filtered: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        filtered: action.payload,
      };
    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        filtered: [action.payload],
      };
    case RESET_FILTERS:
      console.log("hola");
      return {
        ...state,
        filtered: state.pokemons,
      };
    case GET_FILTERS:
      let pokes = [];
      if (action.payload.types) {
        pokes = state.pokemons.filter((e) =>
          e.types.includes(action.payload.types)
        );
      }
      return {
        ...state,
        filtered: pokes,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
