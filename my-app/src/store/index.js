import { createStore } from "redux";
import profileReducer from "./storeProfile";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(profileReducer, composeWithDevTools());
