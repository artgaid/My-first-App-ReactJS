import {
  ADD_PHOTO_PEXELS,
  DELETE_PHOTO_PEXELS,
  ERROR_PEXELS,
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

export const errPexels = (err) => ({
  type: ERROR_PEXELS,
  payload: err,
});

export const getPhotoPexels = (page, query, key) => (dispatch) => {
  // setTimeout - для искусственной задержки, демонстрация загрузки
  const timer = setTimeout(() => {
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
      })
      .catch((err) => {
        console.log(err, "error fetch");
        dispatch(errPexels(true));
      });

    clearTimeout(timer);
  }, 2000);
};
