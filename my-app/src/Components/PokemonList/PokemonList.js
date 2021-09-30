import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../actions/pokemonAction";
import PokemonItem from "../PokemonItem/PokemonItem";

const PokemonList = () => {
  const pokemons = useSelector((state) => state.pokemonsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <ul>
      {pokemons?.length
        ? pokemons.map((el) => {
            return <PokemonItem key={el.id} pokemon={el} />;
          })
        : null}{" "}
    </ul>
  );
};

export default PokemonList;
