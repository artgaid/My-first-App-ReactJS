import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchUser } from "../../actions/userAction";
import { Button, Grid, TextField, Typography } from "@material-ui/core";

const AuthComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorFlg, setErrorFlg] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const { error, user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (error) {
      setEmail("");
      setPassword("");
      setErrorFlg((prev) => !prev);
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      history.push("/main");
    }
  }, [history, user]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setErrorFlg(false);
    dispatch(fetchUser({ email, password }));
  };
  return (
    <>
      <Grid
        mt={4}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        component="form"
        onSubmit={handlerSubmit}
      >
        <Grid item>
          <TextField
            type="email"
            size="small"
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </Grid>
        <Grid item>
          <TextField
            type="password"
            size="small"
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </Grid>
        <Grid item>
          <Button size="small" type="submit">
            Login
          </Button>
        </Grid>
      </Grid>
      {errorFlg && <Typography>Error : EMAIL or PASSWORD</Typography>}
    </>
  );
};

export default AuthComponent;
