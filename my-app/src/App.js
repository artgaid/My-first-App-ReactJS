import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Components/MainComponent/main";
import MessageChats from "./Components/MessegeComponent/MessageChats.js";
import Profile from "./Components/ProfileComponent/profile";
import PersonalChat from "./Components/PersonalChatComponent/personalChat";
import Pokemons from "./Components/PokemonComponent/PokemonComponent";

console.log("render");

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Main} />
          <Route exact path="/chats" component={MessageChats} />
          <Route exact path="/chats/:name" component={PersonalChat} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/pokemons" component={Pokemons} />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
