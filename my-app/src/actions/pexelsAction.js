import {
  ADD_PHOTO_PEXELS,
  DELETE_PHOTO_PEXELS,
  SET_PHOTO_PEXELS,
} from "../store/types/pexelsTypes";

export const deletePohotoPexels = (photoId) => ({
  type: DELETE_PHOTO_PEXELS,
  payload: photoId,
});

export const addPohotoPexels = (photo) => ({
  type: ADD_PHOTO_PEXELS,
  payload: photo,
});

export const setPhotoPexels = (photos) => ({
  type: SET_PHOTO_PEXELS,
  payload: photos,
});

export const getPhotoPexels = (page, query, key) => (dispatch) => {
  fetch(`https://api.pexels.com/v1/search?page=${page}&query=${query}`, {
    headers: {
      Accept: "application/json",
      Authorization: key,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (page === 1) {
        dispatch(setPhotoPexels(data.photos));
      } else dispatch(addPohotoPexels(data.photos));
    });
};
