import {
  ADD_PHOTO_PEXELS,
  DELETE_PHOTO_PEXELS,
  SET_PHOTO_PEXELS,
} from "./types/pexelsTypes";

const initialState = [];

const pexelsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_PHOTO_PEXELS:
      return state.filter((el) => el.id !== payload);

    case ADD_PHOTO_PEXELS:
      return [...state, ...payload];

    case SET_PHOTO_PEXELS:
      return [...payload];

    default:
      return state;
  }
};

export default pexelsReducer;
