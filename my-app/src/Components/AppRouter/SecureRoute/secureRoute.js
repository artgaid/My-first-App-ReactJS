import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const SecureRoute = ({ ...rest }) => {
  const { user } = useSelector((state) => state.userReducer);

  return user ? <Route {...rest} /> : <Redirect to={{ pathname: "/" }} />;
};

export default SecureRoute;
