import { ImageList } from "@material-ui/core";
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
    <>
      <ImageList cols={4}>
        {pokemons?.length
          ? pokemons.map((el) => {
              return <PokemonItem key={el.id} pokemon={el} />;
            })
          : null}{" "}
      </ImageList>
    </>
  );
};

export default PokemonList;
