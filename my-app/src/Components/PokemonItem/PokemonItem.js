import {
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { Box } from "@material-ui/system";
import { useDispatch } from "react-redux";
import { deletePokemons } from "../../actions/pokemonAction";

/* eslint-disable jsx-a11y/alt-text */
const PokemonItem = ({ pokemon }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deletePokemons(pokemon.id));
  };

  return (
    <ImageListItem>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "right",
            p: 4,
          }}
        >
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            loading="lazy"
            width="150px"
          />
        </Box>
        <ImageListItemBar
          sx={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, " +
              "rgba(255,255,255,0.1) 70%, rgba(255,255,255,0) 100%)",
            borderRadius: 5,
            borderTop: 2,
            borderColor: "orange",
          }}
          title={
            <Typography
              color="black"
              component="p"
              variant="button"
              sx={{
                fontWeight: "bold",
                fontSize: 17,
                lineHeight: 1,
              }}
            >
              {pokemon.name}
            </Typography>
          }
          position="top"
          actionIcon={
            <IconButton
              sx={{
                color: "rgba(255, 255, 255, 0.54)",
                ":hover": {
                  color: "red",
                },
              }}
              onClick={() => deleteHandler(pokemon.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
        />
        <ImageListItemBar
          sx={{
            background:
              "linear-gradient(to top, rgba(255,255,255,0.7) 0%, " +
              "rgba(255,255,255,0.5) 70%, rgba(255,255,0,0) 100%)",
            borderRadius: 5,
            borderBottom: 2,
            borderColor: "orange",
          }}
          title={
            <Box>
              {pokemon.stats.map((el) => (
                <Typography
                  color="black"
                  component="p"
                  variant="overline"
                  key={el.stat.name}
                  sx={{
                    fontWeight: "bold",
                    fontSize: 10,
                    lineHeight: 1.3,
                  }}
                >
                  {" "}
                  {el.stat.name} : {el.base_stat}
                </Typography>
              ))}
            </Box>
          }
          position="bottom"
        />
      </Box>
    </ImageListItem>
  );
};

export default PokemonItem;
