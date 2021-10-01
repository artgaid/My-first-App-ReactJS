import { Button, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <Box
        sx={{
          m: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "blok" },
        }}
      >
        <Typography variant="button" component="p">
          My App is on ReactJS
        </Typography>
        <Box>
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
        </Box>
      </Box>
    </>
  );
}

export default Main;
