import { Switch, Route, Router, useHistory } from "react-router-dom";
import Main from "../MainComponent/main";
import Profile from "../ProfileComponent/profile";
import Pokemons from "../PokemonComponent/PokemonComponent";
import Pexels from "../PexelsAPIComponent/PexelsComponent";
import AuthPage from "../AuthComponent/authComponent";
import SecureRoute from "./SecureRoute/secureRoute";
import MainMessenger from "../Messenger/mainMessenger";
import PersonalChat from "../Messenger/PersonalChatComponent/personalChat";

const AppRouter = () => {
  const history = useHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <SecureRoute path="/main" component={Main} />
        <Route exact path="/chats" component={MainMessenger} />
        <Route exact path="/chats/:id" component={PersonalChat} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/pokemons" component={Pokemons} />
        <Route exact path="/pexels" component={Pexels} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
