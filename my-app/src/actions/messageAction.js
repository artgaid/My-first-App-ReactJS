import {
  ADD_MESSAGE,
  ADD_ROBOT_MESSAGE,
  DELETE_MESSAGE,
} from "../store/types/messageTypes";

export const deleteMessage = (messageId) => ({
  type: DELETE_MESSAGE,
  payload: messageId,
});

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const addRobotMessage = (text) => ({
  type: ADD_ROBOT_MESSAGE,
  payload: text,
});

export const robotMessage = (text) => (dispatch) => {
  const timer = setTimeout(() => {
    dispatch(addRobotMessage(text));
    clearTimeout(timer);
  }, 2000);
};
