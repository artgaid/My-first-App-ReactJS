// import { createClient } from "pexels";
import {
  Button,
  ImageList,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { Box } from "@material-ui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotoPexels } from "../../actions/pexelsAction";
import PexelsItem from "../PexelsItem/PexelsItem";

function Pexels() {
  const myKeyAuth = "563492ad6f91700001000001aba9b78c123546b3a6e4ed9ecaad016b";
  let page_number = 1;

  const storePexels = useSelector((state) => state.pexelsReducer);
  const dispatch = useDispatch();

  const [textSearch, setTextSearch] = useState("");
  const [prevSearch, setPrevSearch] = useState("");

  //   1. способ с помощью библиотеки npm pexels (достаточно простой)

  //   const client = createClient(myKey);
  //   client.photos.search({ query, per_page: 2 })
  //    .then((date) => {
  //     console.log(date);
  //   });

  //   2. способ с помощью fetch запросов (но мы попробуем классический)

  console.log(storePexels, "store");
  const submitHandler = (e) => {
    e.preventDefault();
    setPrevSearch(textSearch);
    setTextSearch("");
    dispatch(getPhotoPexels(page_number, textSearch, myKeyAuth));
  };

  const showMoreHandler = () => {
    page_number++;
    dispatch(getPhotoPexels(page_number, prevSearch, myKeyAuth));
  };

  return (
    <Box
      sx={{
        m: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "blok" },
      }}
    >
      <Typography variant="h4" component="p">
        Image Search Gallery
      </Typography>
      <Link
        href="https://www.pexels.com"
        variant="subtitle2"
        color="green"
        underline="hover"
      >
        Provided by Pexels
      </Link>
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: 5,
          "& button": {
            height: "5ch",
          },
        }}
        noValidate
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <TextField
          size="small"
          id="outlined-name"
          label="Search for photos"
          type="text"
          name="search"
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
        />
        <Button variant="contained" color="success" type="submit">
          Search
        </Button>
      </Box>

      <ImageList cols={3}>
        {storePexels.map((obj) => (
          <PexelsItem key={obj.id} photo={obj} />
        ))}
      </ImageList>
      <Button
        size="large"
        color="success"
        variant="contained"
        type="button"
        onClick={showMoreHandler}
      >
        Show more
      </Button>
    </Box>
  );
}

export default Pexels;
