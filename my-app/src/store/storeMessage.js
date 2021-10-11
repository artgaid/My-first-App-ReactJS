import {
  ADD_MESSAGE,
  ADD_ROBOT_MESSAGE,
  DELETE_MESSAGE,
} from "./types/messageTypes";

const initialState = {
  messageList: [
    {
      text: "",
      messageId: 0,
      chatId: 0,
    },
  ],
  messageRobot: [
    {
      text: "",
      robotId: 0,
    },
  ],
};

const messageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_MESSAGE:
      return state.filter((el) => el.id !== payload);

    case ADD_MESSAGE:
      return {
        ...state,
        messageList: [...state.messageList, payload],
      };

    case ADD_ROBOT_MESSAGE:
      return {
        ...state,
        messageRobot: [...state.messageRobot, payload],
      };

    default:
      return state;
  }
};

export default messageReducer;
