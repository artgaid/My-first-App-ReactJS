import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./storeProfile";
import pokemonsReducer from "./storePokemon";
import chatsReducer from "./storeChats";
import messageReducer from "./storeMessage";
import pexelsReducer from "./storePexels";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  profileReducer,
  pokemonsReducer,
  chatsReducer,
  messageReducer,
  pexelsReducer,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
