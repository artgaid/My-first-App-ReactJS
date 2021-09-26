import {
  ADD_POKEMONS,
  DELETE_POKEMONS,
  GET_POKEMONS,
} from "../store/types/pokemonTypes";

export const getPokemons = (pokemons) => ({
  type: GET_POKEMONS,
  payload: pokemons,
});

export const deletePokemons = (pokemonId) => ({
  type: DELETE_POKEMONS,
  payload: pokemonId,
});

export const addPokemons = (pokemon) => ({
  type: ADD_POKEMONS,
  payload: pokemon,
});
