import PokemonList from "../PokemonList/PokemonList";
import PokemonSearchForm from "../PokemonSearchForm/PokemonSearchForm";

function Pokemons() {
  return (
    <div className="pokemons">
      <PokemonSearchForm />
      <PokemonList />
    </div>
  );
}

export default Pokemons;
