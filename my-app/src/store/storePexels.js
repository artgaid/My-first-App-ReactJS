import {
  ADD_PHOTO_PEXELS,
  DELETE_PHOTO_PEXELS,
  ERROR_PEXELS,
  SET_PHOTO_PEXELS,
} from "./types/pexelsTypes";

const initialState = {
  photoList: [],
  errorPexeles: false,
};

const pexelsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_PHOTO_PEXELS:
      return {
        ...state,
        photoList: state.photoList.filter((el) => el.id !== payload),
      };

    case ADD_PHOTO_PEXELS:
      return {
        ...state,
        photoList: [...state.photoList, ...payload],
      };

    case SET_PHOTO_PEXELS:
      return {
        ...state,
        photoList: [...payload],
      };

    case ERROR_PEXELS:
      return {
        ...state,
        errorPexeles: payload,
      };

    default:
      return state;
  }
};

export default pexelsReducer;
