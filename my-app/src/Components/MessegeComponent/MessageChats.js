import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, Typography } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Box } from "@material-ui/system";
import { useEffect, useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../actions/messageAction";
import { addChats, deleteChats } from "../../actions/chatsAction";

function MessageChats() {
  const messageStore = useSelector((state) => state.messageReducer);
  const chatsStore = useSelector((state) => state.chatsReducer);

  const [newMessageText, setNewMessageText] = useState("");

  const [newMessageAuth, setNewMessageAuth] = useState("");

  const newMessage = {
    text: newMessageText,
    nameTo: newMessageAuth,
    messageId: messageStore.length,
    chatId: 0,
    robot: "",
  };

  const filterChats = chatsStore.filter((el) => el.chatId === el.messageId);
  console.log(filterChats);

  const ref = useRef(null);

  const changeAuth = (e) => {
    setNewMessageAuth((prev) => (prev = e.target.value));
  };

  const changeText = (e) => {
    setNewMessageText((prev) => (prev = e.target.value));
  };

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteChats(id));
  };

  const changeMessageHandler = (e) => {
    e.preventDefault();

    if (newMessage.nameTo === messageStore[messageStore.length - 1].nameTo) {
      newMessage.robot = "How are you ???";
    } else {
      if (newMessage.text !== "") {
        newMessage.robot = "Hi, I am Robot !";
        newMessage.chatId = chatsStore.length + 1;
      }
    }

    if (newMessage.text !== "") {
      dispatch(addMessage(newMessage));
      dispatch(addChats(newMessage));
      setNewMessageAuth((prev) => (prev = ""));
      setNewMessageText((prev) => (prev = ""));
    }
    return;
  };

  useEffect(() => {
    ref?.current.focus();
  }, [messageStore]);

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

          <div>
            {messageStore.map((obj) =>
              obj.text !== "" ? (
                <div key={obj.messageId}>
                  <p>You: "{obj.text}"</p>
                  <p>
                    {" "}
                    {obj.nameTo}:"{obj.robot}"{" "}
                  </p>{" "}
                  <Divider variant="middle" />
                </div>
              ) : null
            )}
          </div>
        </Box>
        <List>
          {" "}
          <Typography sx={{ mb: 1 }} variant="h6" component="div">
            Chats:
          </Typography>
          {filterChats.map((obj) =>
            obj.nameTo !== "" ? (
              <ListItem key={obj.messageId} alignItems="center">
                <Button
                  component={Link}
                  to={`/chats/${obj.nameTo}`}
                  color="primary"
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <FolderIcon color="primary" />
                  </ListItemIcon>
                  {obj.nameTo}
                </Button>
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={() => deleteHandler(obj.chatId)}
                >
                  <DeleteForeverIcon fontSize="small" color="primary" />
                </IconButton>
              </ListItem>
            ) : null
          )}
        </List>
      </Box>
    </>
  );
}

export default MessageChats;
