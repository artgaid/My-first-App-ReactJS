import { combineReducers, createStore } from "redux";
import profileReducer from "./storeProfile";
import pokemonsReducer from "./storePokemon";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  profileReducer,
  pokemonsReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
