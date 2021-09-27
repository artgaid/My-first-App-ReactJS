import { ADD_CHAT, DELETE_CHAT } from "./types/chatsTypes";

const initialState = [];

const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_CHAT:
      console.log(payload);
      return state.filter((el) => el.chatId !== payload);

    case ADD_CHAT:
      return [...state, payload];

    default:
      return state;
  }
};

export default chatsReducer;
