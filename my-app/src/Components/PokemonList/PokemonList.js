import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemons } from "../../actions/pokemonAction";
import PokemonItem from "../PokemonItem/PokemonItem";

const PokemonList = () => {
  const pokemons = useSelector((state) => state.pokemonsReducer);
  const dispatch = useDispatch();
  const [loadFlg, setLoadFlg] = useState(false);
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    if (newArr.length && loadFlg) {
      for (let i = 0; i < newArr.length; i++) {
        fetch(newArr[i].url)
          .then((response) => response.json())
          .then((data) => {
            dispatch(addPokemons(data));
          });
      }
    } else if (!newArr.length && !loadFlg) {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.json())
        .then((data) => {
          setNewArr(data.results);
          setLoadFlg(true);
        });
    }
  }, [dispatch, loadFlg, newArr]);

  return (
    <ul>
      {pokemons?.length
        ? pokemons.map((el) => {
            return (
              <div key={el.id}>
                <PokemonItem pokemon={el} />
              </div>
            );
          })
        : null}{" "}
    </ul>
  );
};

export default PokemonList;
