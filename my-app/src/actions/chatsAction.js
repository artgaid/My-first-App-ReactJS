import { ADD_CHAT, DELETE_CHAT } from "../store/types/chatsTypes";

export const deleteChats = (chatId) => ({
  type: DELETE_CHAT,
  payload: chatId,
});

export const addChats = (chat) => ({
  type: ADD_CHAT,
  payload: chat,
});
