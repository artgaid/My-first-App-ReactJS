import { ADD_MESSAGE, DELETE_MESSAGE } from "../store/types/messageTypes";

export const deleteMessage = (messageId) => ({
  type: DELETE_MESSAGE,
  payload: messageId,
});

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});
