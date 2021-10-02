import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../../actions/pokemonAction";
import useDebounce from "./useDebounce";

const PokemonSearchForm = () => {
  const [text, setText] = useState("");
  const debounceValue = useDebounce(text, 3000);
  const dispatch = useDispatch();

  useEffect(() => {
    if (debounceValue) {
      setText("");
      dispatch(searchPokemon(debounceValue));
    }
  }, [debounceValue, dispatch]);

  return (
    <>
      <Box>
        <TextField
          color="warning"
          size="small"
          id="standard-basic"
          variant="standard"
          type="text"
          label="ADD Pokemon"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Box>
    </>
  );
};

export default PokemonSearchForm;
