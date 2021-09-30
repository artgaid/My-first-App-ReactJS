import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../../actions/pokemonAction";
import useDebounce from "./useDebounce";

const PokemonSearchForm = () => {
  const [text, setText] = useState("");
  const debounceValue = useDebounce(text, 1000);
  const dispatch = useDispatch();

  useEffect(() => {
    if (debounceValue) {
      setText("");
      dispatch(searchPokemon(debounceValue));
    }
  }, [debounceValue, dispatch]);

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
