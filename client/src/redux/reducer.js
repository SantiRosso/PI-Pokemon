import {
  GET_ALL_POKEMONS,
  GET_POKEMON_BY_NAME,
  RESET_FILTERS,
  GET_FILTERS,
  GET_TYPES,
  GET_ORDER_ALPHABET,
  GET_ORDER_ATTACK,
} from "./actions";

const initialState = {
  pokemons: [],
  filtered: [],
  types: [],
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
      return {
        ...state,
        filtered: state.pokemons,
      };
    case GET_FILTERS:
      let pokesFiltered = state.pokemons;
      if (action.payload.types) {
        pokesFiltered = state.pokemons.filter((e) =>
          e.types.includes(action.payload.types)
        );
      }
      return {
        ...state,
        filtered: pokesFiltered,
      };
    case GET_ORDER_ALPHABET:
      const orderByAlphabet =
        action.payload === "A-Z"
          ? state.filtered.sort((a, b) => {
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
      return {
        ...state,
        filtered: orderByAlphabet,
      };
    case GET_ORDER_ATTACK:
      const orderByAttack =
        action.payload === "men"
          ? state.filtered.sort((a, b) => a.attack - b.attack)
          : action.payload === "may"
          ? state.filtered.sort((a, b) => b.attack - a.attack)
          : [...state.filtered];
      return {
        ...state,
        filtered: orderByAttack,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
