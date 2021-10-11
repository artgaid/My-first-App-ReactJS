import {
  ADD_CHAT,
  ADD_MESSAGE_IN_CHAT,
  ADD_ROBOT_IN_CHAT,
  DELETE_CHAT,
} from "./types/chatsTypes";

const initialState = [
  {
    id: 0,
    chatName: "",
    messages: [],
  },
];

const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_CHAT:
      return state.filter((el) => el.chatId !== payload);

    case ADD_CHAT:
      return [...state, payload];

    case ADD_MESSAGE_IN_CHAT:
      state.filter((el) => el.id === payload.chatId)[0].messages.push(payload);
      return state;

    case ADD_ROBOT_IN_CHAT:
      state.filter((el) => el.id === payload.chatId)[0].messages.push(payload);
      return state;

    default:
      return state;
  }
};

export default chatsReducer;
