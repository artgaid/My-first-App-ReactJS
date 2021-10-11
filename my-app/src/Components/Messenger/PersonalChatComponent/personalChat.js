import { useParams } from "react-router-dom";
import { Box } from "@material-ui/system";
import { useEffect, useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  addMessageInChat,
  chatRobotAnswer,
} from "../../../actions/chatsAction";
import MessagesList from "../MessageList/messageList";

const PersonalChat = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const ref = useRef(null);
  const chatsStore = useSelector((state) => state.chatsReducer);

  const [newMessageText, setNewMessageText] = useState("");

  const newMessage = {
    text: newMessageText,
    id: 0,
    chatId: Number(id),
  };

  const robotAnswer = {
    text: "",
    id: 0,
    chatId: Number(id),
  };

  const filterChatStore = (idChat) => {
    for (let i = 0; i < chatsStore.length; i++) {
      if (chatsStore[i].id === Number(idChat)) {
        newMessage.id = chatsStore[i].messages.length;
        robotAnswer.id = chatsStore[i].messages.length;
      }
    }
  };

  const changeMessageHandler = (e) => {
    e.preventDefault();
    filterChatStore(id);

    if (newMessage.id > 0) {
      robotAnswer.text = "I AM GROOOOT";
      dispatch(chatRobotAnswer(robotAnswer));
    } else {
      if (newMessage.text !== "") {
        robotAnswer.text = "Hi, I am Groot !";
        dispatch(chatRobotAnswer(robotAnswer));
      }
    }

    if (newMessage.text !== "") {
      dispatch(addMessageInChat(newMessage));
      setNewMessageText((prev) => (prev = ""));
    }
    return;
  };

  useEffect(() => {
    ref?.current.focus();
  }, [chatsStore]);

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
            id="outlined-message"
            label="Message"
            inputRef={ref}
            type="text"
            name="text"
            value={newMessageText}
            onChange={(e) => setNewMessageText(e.target.value)}
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
        </Box>
        <MessagesList chatId={id} />
      </Box>
    </>
  );
};

export default PersonalChat;
