import {
  DELETE_PROFILE_ITEM,
  ADD_PROFILE_ITEM,
} from "../store/types/profileListTypes";

export const deleteProfileItem = (id) => ({
  type: DELETE_PROFILE_ITEM,
  payload: id,
});

export const addProfileItem = (text) => ({
  type: ADD_PROFILE_ITEM,
  payload: text,
});
