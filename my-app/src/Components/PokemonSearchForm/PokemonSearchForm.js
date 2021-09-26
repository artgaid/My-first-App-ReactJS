import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPokemons } from "../../actions/pokemonAction";
import useDebounce from "./useDebounce";

const PokemonSearchForm = () => {
  const [text, setText] = useState("");
  const debounceValue = useDebounce(text, 500);
  const dispatch = useDispatch();

  useEffect(() => {
    if (debounceValue) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${debounceValue}`)
        .then((response) => response.json())
        .then((data) => dispatch(addPokemons(data)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);

  return (
    <input
      type="text"
      placeholder="What is this pokemon?"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default PokemonSearchForm;
