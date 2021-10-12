import {
  ADD_CHAT,
  ADD_MESSAGE_IN_CHAT,
  ADD_ROBOT_IN_CHAT,
  DELETE_CHAT,
  SET_CHAT,
} from "../store/types/chatsTypes";

export const deleteChats = (chatId) => ({
  type: DELETE_CHAT,
  payload: chatId,
});

export const addChats = (chat) => ({
  type: ADD_CHAT,
  payload: chat,
});

export const setChats = (chats) => ({
  type: SET_CHAT,
  payload: chats,
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

export const getChats = () => (dispatch) => {
  fetch("http://localhost:3001/chats")
    .then((response) => response.json())
    .then((data) => dispatch(setChats(data)));
};

export const postChats = (chatItem) => (dispatch) => {
  fetch("http://localhost:3001/chats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(chatItem),
  })
    .then((response) => response.json())
    .then((newData) => dispatch(setChats(newData)));
};

export const delChats = (id) => (dispatch) => {
  fetch(`http://localhost:3001/chats?id=${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((delData) => dispatch(setChats(delData)));
};

export const postMessage = (messageItem) => (dispatch) => {
  fetch(`http://localhost:3001/chats/messages/${messageItem.chatId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageItem),
  })
    .then((response) => response.json())
    .then((newData) => dispatch(setChats(newData)));
};

export const postRobotAnswer = (answer) => (dispatch) => {
  const timer = setTimeout(() => {
    fetch(`http://localhost:3001/chats/messages/${answer.chatId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answer),
    })
      .then((response) => response.json())
      .then((newData) => dispatch(setChats(newData)));
    clearTimeout(timer);
  }, 1000);
};
