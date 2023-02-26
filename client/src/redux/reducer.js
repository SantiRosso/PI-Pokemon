import { GET_ALL_POKEMONS } from "./actions";

const initialState = {
  pokemons: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemon: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
