import { SET_ERROR, USER_LOGIN, USER_LOGOUT } from "../store/types/userTypes";

export const userLogin = (user) => ({
  type: USER_LOGIN,
  payload: { ...user },
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const setError = (str) => ({
  type: SET_ERROR,
  payload: str,
});

export const fetchUser = (user) => async (dispatch) => {
  let response = await fetch("http://localhost:3001/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });
  if (response.status === 400) {
    console.log("error");
    dispatch(setError("usera net "));
  } else {
    const data = await response.json();
    dispatch(userLogin(data));
  }
};
