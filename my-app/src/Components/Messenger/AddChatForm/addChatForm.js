import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChats } from "../../../actions/chatsAction";

function AddChatForm() {
  const dispatch = useDispatch();
  const chatsStore = useSelector((state) => state.chatsReducer);
  const [textField, setTextField] = useState("");

  const newChat = {
    id: chatsStore.length,
    chatName: textField,
    messages: [],
  };

  const addChatsHandler = (e) => {
    e.preventDefault();
    setTextField("");
    dispatch(addChats(newChat));
  };

  return (
    <>
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
          label="Chat name"
          type="text"
          name="auth"
          value={textField}
          onChange={(e) => setTextField(e.target.value)}
        />
        <Button
          size="small"
          variant="outlined"
          color="primary"
          type="submit"
          onClick={addChatsHandler}
        >
          ADD CHATS
        </Button>
      </Box>
    </>
  );
}

export default AddChatForm;
