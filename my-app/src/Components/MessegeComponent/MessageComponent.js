import { Box } from "@material-ui/system";
import { useEffect, useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, robotMessage } from "../../actions/messageAction";
import { addChats } from "../../actions/chatsAction";
import Chats from "../ChatsComponent/ChatsComponent";

function Message() {
  const messageStore = useSelector((state) => state.messageReducer.messageList);
  const messageStoreRobot = useSelector(
    (state) => state.messageReducer.messageRobot
  );

  const [newMessageText, setNewMessageText] = useState("");

  const [newMessageAuth, setNewMessageAuth] = useState("");

  const [robotText, setRobotText] = useState("");

  const newMessage = {
    text: newMessageText,
    nameTo: newMessageAuth || messageStore[messageStore.length - 1].nameTo,
    messageId: messageStore.length,
    chatId: messageStore[messageStore.length - 1].chatId,
  };

  const ref = useRef(null);

  const changeAuth = (e) => {
    setNewMessageAuth((prev) => (prev = e.target.value));
  };

  const changeText = (e) => {
    setNewMessageText((prev) => (prev = e.target.value));
  };

  const dispatch = useDispatch();

  const changeMessageHandler = (e) => {
    e.preventDefault();

    if (newMessage.nameTo === messageStore[messageStore.length - 1].nameTo) {
      dispatch(robotMessage("How are you ???"));
    } else {
      if (newMessage.text !== "") {
        dispatch(robotMessage("Hi, I am Robot !"));
        newMessage.chatId++;
      }
    }

    if (newMessage.text !== "") {
      dispatch(addChats(newMessage));
      dispatch(addMessage(newMessage));
      setRobotText((prev) => (prev = ""));
      setNewMessageAuth((prev) => (prev = ""));
      setNewMessageText((prev) => (prev = ""));
    }
    return;
  };

  useEffect(() => {
    ref?.current.focus();
    setRobotText(messageStoreRobot[messageStoreRobot.length - 1]?.text);
  }, [messageStoreRobot]);

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 2fr)",
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            "& button": { m: 2, width: "25ch" },
            display: "grid",
            gridTemplateRows: "repeat(3, 0.5fr)",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            multiline
            size="small"
            id="outlined-name"
            label="Name"
            type="text"
            name="auth"
            value={newMessageAuth}
            onChange={changeAuth}
          />
          <TextField
            multiline
            size="small"
            id="outlined-message"
            label="Message"
            inputRef={ref}
            type="text"
            name="text"
            value={newMessageText}
            onChange={changeText}
          />
          <Button
            size="small"
            variant="outlined"
            color="primary"
            type="submit"
            onClick={changeMessageHandler}
          >
            Send
          </Button>
          <Box>
            {messageStore[messageStore.length - 1].text ? (
              <div key={messageStore[messageStore.length - 1].messageId}>
                <p>You: {messageStore[messageStore.length - 1].text}</p>
                <p>
                  {messageStore[messageStore.length - 1].nameTo}: {robotText}
                </p>
                <Divider variant="middle" />
              </div>
            ) : null}
          </Box>
        </Box>
        <Chats />
      </Box>
    </>
  );
}

export default Message;
