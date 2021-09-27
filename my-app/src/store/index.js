import { combineReducers, createStore } from "redux";
import profileReducer from "./storeProfile";
import pokemonsReducer from "./storePokemon";
import chatsReducer from "./storeChats";
import messageReducer from "./storeMessage";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  profileReducer,
  pokemonsReducer,
  chatsReducer,
  messageReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
