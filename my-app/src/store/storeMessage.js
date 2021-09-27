import { ADD_MESSAGE, DELETE_MESSAGE } from "./types/messageTypes";

const initialState = [
  {
    text: "",
    nameTo: "",
    messageId: 0,
    chatId: 0,
    robot: "",
  },
];

const messageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_MESSAGE:
      return state.filter((el) => el.id !== payload);

    case ADD_MESSAGE:
      return [...state, payload];

    default:
      return state;
  }
};

export default messageReducer;
