import { CHANGE_CHECKBOX } from "./types/checkboxTypes";
import {
  DELETE_PROFILE_ITEM,
  ADD_PROFILE_ITEM,
} from "./types/profileListTypes";

const initialState = {
  profileList: [
    { name: "Test store 1", id: 0 },
    { name: "Test store 2", id: 1 },
    { name: "Test store 3", id: 2 },
  ],
  checkbox: false,
};
const profileReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_PROFILE_ITEM:
      return {
        ...state,
        profileList: [
          ...state.profileList,
          { name: payload, id: state.profileList.length },
        ],
      };
    case DELETE_PROFILE_ITEM:
      return {
        ...state,
        profileList: state.profileList.filter((el) => el.id !== payload),
      };
    case CHANGE_CHECKBOX:
      return {
        ...state,
        checkbox: !state.checkbox,
      };
    default:
      return state;
  }
};

export default profileReducer;
