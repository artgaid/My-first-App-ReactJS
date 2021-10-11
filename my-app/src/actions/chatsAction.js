import {
  ADD_CHAT,
  ADD_MESSAGE_IN_CHAT,
  ADD_ROBOT_IN_CHAT,
  DELETE_CHAT,
} from "../store/types/chatsTypes";

export const deleteChats = (chatId) => ({
  type: DELETE_CHAT,
  payload: chatId,
});

export const addChats = (chat) => ({
  type: ADD_CHAT,
  payload: chat,
});

export const addMessageInChat = (message) => ({
  type: ADD_MESSAGE_IN_CHAT,
  payload: message,
});

export const addRobotInChat = (robot) => ({
  type: ADD_ROBOT_IN_CHAT,
  payload: robot,
});

export const chatRobotAnswer = (robot) => (dispatch) => {
  const timer = setTimeout(() => {
    dispatch(addRobotInChat(robot));
    clearTimeout(timer);
  }, 2000);
};
