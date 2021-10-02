import {
  ADD_POKEMONS,
  DELETE_POKEMONS,
  GET_POKEMONS,
} from "../store/types/pokemonTypes";

export const setPokemons = (pokemons) => ({
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

export const getPokemons = () => (dispatch) => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        fetch(data.results[i].url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data, " fetch");
            dispatch(addPokemons(data));
          });
      }
    });
};

export const searchPokemon = (debounceValue) => (dispatch) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${debounceValue}`)
    .then((response) => response.json())
    .then((data) => dispatch(addPokemons(data)));
};
