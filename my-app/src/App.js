import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Components/MainComponent/main";
import MessageComponent from "./Components/MessegeComponent/MessageComponent";
import Profile from "./Components/ProfileComponent/profile";
import PersonalChat from "./Components/PersonalChatComponent/personalChat";
import Pokemons from "./Components/PokemonComponent/PokemonComponent";
import Pexels from "./Components/PexelsAPIComponent/PexelsComponent";

console.log("render");

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Main} />
          <Route exact path="/chats" component={MessageComponent} />
          <Route exact path="/chats/:name" component={PersonalChat} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/pokemons" component={Pokemons} />
          <Route exact path="/pexels" component={Pexels} />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
