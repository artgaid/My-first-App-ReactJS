import { Button, Grid, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <Box
        sx={{
          mt: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="button" component="p">
          My App is on ReactJS
        </Typography>
        <Grid
          container
          mt={2}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            sx={{
              ":hover": {
                color: "green",
              },
            }}
            component={Link}
            to={"/chats"}
          >
            Chats
          </Button>
          <Button
            sx={{
              ":hover": {
                color: "green",
              },
            }}
            component={Link}
            to={"/profile"}
          >
            Profile
          </Button>
          <Button
            sx={{
              ":hover": {
                color: "green",
              },
            }}
            component={Link}
            to={"/pokemons"}
          >
            API Pokemons
          </Button>
          <Button
            sx={{
              ":hover": {
                color: "green",
              },
            }}
            component={Link}
            to={"/pexels"}
          >
            API Pexels
          </Button>
        </Grid>
      </Box>
    </>
  );
}

export default Main;
