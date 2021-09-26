import { useDispatch } from "react-redux";
import { deletePokemons } from "../../actions/pokemonAction";

/* eslint-disable jsx-a11y/alt-text */
const PokemonItem = ({ pokemon }) => {
  const dispatch = useDispatch();

  const hadlerClick = () => {
    dispatch(deletePokemons(pokemon.id));
  };

  return (
    <li>
      <img src={pokemon.sprites.front_default} />
      <p>{pokemon.name}</p>
      <button onClick={hadlerClick}>Delete</button>
    </li>
  );
};

export default PokemonItem;
