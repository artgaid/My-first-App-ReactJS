import {
  ADD_POKEMONS,
  DELETE_POKEMONS,
  GET_POKEMONS,
} from "./types/pokemonTypes";

const initialState = [];

const pokemonsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_POKEMONS:
      return state.filter((el) => el.id !== payload);

    case ADD_POKEMONS:
      return [payload, ...state];

    case GET_POKEMONS:
      return [...payload];

    default:
      return state;
  }
};

export default pokemonsReducer;
