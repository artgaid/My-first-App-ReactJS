import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, Typography } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import { Box } from "@material-ui/system";
import { useEffect, useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

function MessageChats() {
  const [newMessageText, setNewMessageText] = useState("");

  const [newMessageAuth, setNewMessageAuth] = useState("");

  const [messageList, setMessageList] = useState([
    {
      text: "",
      author: "",
      id: 0,
      robot: "",
    },
  ]);

  const [arrChats, setArrChats] = useState([
    {
      author: "",
      id: 0,
    },
  ]);

  const newMessage = {
    text: newMessageText,
    author: newMessageAuth,
    id: messageList.length,
    robot: "",
  };

  const ref = useRef(null);

  const changeAuth = (e) => {
    setNewMessageAuth((prev) => (prev = e.target.value));
  };

  const changeText = (e) => {
    setNewMessageText((prev) => (prev = e.target.value));
  };

  const changeMessageHandle = (e) => {
    e.preventDefault();

    if (newMessage.author === messageList[messageList.length - 1].author) {
      newMessage.robot = "How are you ???";
    } else {
      newMessage.robot = "Hi, I am Robot !";
      setArrChats((prev) => {
        return [...prev, { author: newMessage.author, id: newMessage.id }];
      });
    }

    if (newMessage.text !== "") {
      setMessageList((prev) => [...prev, newMessage]);
      setNewMessageAuth((prev) => (prev = ""));
      setNewMessageText((prev) => (prev = ""));
    }
    return;
  };

  useEffect(() => {
    ref?.current.focus();
  }, [messageList]);

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
            onClick={changeMessageHandle}
          >
            Send
          </Button>

          <div>
            {messageList.map((obj) =>
              obj.text !== "" ? (
                <div key={obj.id}>
                  <p>
                    {obj.author}: "{obj.text}"
                  </p>
                  <p> Robot:"{obj.robot}" </p> <Divider variant="middle" />
                </div>
              ) : null
            )}
          </div>
        </Box>
        <div>
          <Typography sx={{ mb: 1 }} variant="h6" component="div">
            Chats:
          </Typography>
          <List>
            {arrChats.map((obj) =>
              obj.author !== "" ? (
                <ListItem
                  key={obj.id}
                  alignItems="center"
                  component={Link}
                  to={`/chats/${obj.author}`}
                >
                  <Button color="secondary">
                    <ListItemIcon>
                      <FolderIcon color="secondary" />
                    </ListItemIcon>
                    {obj.author}
                  </Button>
                </ListItem>
              ) : null
            )}
          </List>
        </div>
      </Box>
    </>
  );
}

export default MessageChats;
