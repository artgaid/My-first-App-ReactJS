import { Grid } from "@material-ui/core";
import PokemonList from "../PokemonList/PokemonList";
import PokemonSearchForm from "../PokemonSearchForm/PokemonSearchForm";

function Pokemons() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <PokemonSearchForm />
      <PokemonList />
    </Grid>
  );
}

export default Pokemons;
