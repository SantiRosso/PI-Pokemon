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
      if (action.payload.alphabet) {
        pokes =
          action.payload === "A-Z"
            ? pokes.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
              })
            : action.payload === "Z-A"
            ? state.filtered.sort((a, b) => {
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
                return 0;
              })
            : [...state.filtered];
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
