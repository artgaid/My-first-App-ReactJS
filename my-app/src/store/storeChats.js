import {
  ADD_CHAT,
  ADD_MESSAGE_IN_CHAT,
  ADD_ROBOT_IN_CHAT,
  DELETE_CHAT,
  SET_CHAT,
} from "./types/chatsTypes";

const initialState = [];

const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_CHAT:
      return state.filter((el) => el.chatId !== payload);

    case ADD_CHAT:
      return [...state, payload];

    case SET_CHAT:
      return payload;

    case ADD_MESSAGE_IN_CHAT:
      return state.map((el) => {
        if (el.id === payload.chatId) {
          return { ...el, messages: [...el.messages, payload] };
        }
        return el;
      });

    case ADD_ROBOT_IN_CHAT:
      return state.map((el) => {
        if (el.id === payload.chatId) {
          return { ...el, messages: [...el.messages, payload] };
        }
        return el;
      });

    default:
      return state;
  }
};

export default chatsReducer;
