import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, Typography } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { deleteChats } from "../../../actions/chatsAction";

function ChatsList() {
  const chatsStore = useSelector((state) => state.chatsReducer);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteChats(id));
  };

  return (
    <>
      <List>
        <Typography sx={{ mb: 1 }} variant="h6" component="div">
          Chats:
        </Typography>
        {chatsStore.map((obj) =>
          obj.chatName !== "" ? (
            <ListItem key={obj.id} alignItems="center">
              <Button component={Link} to={`/chats/${obj.id}`} color="primary">
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <FolderIcon color="primary" />
                </ListItemIcon>
                {obj.chatName}
              </Button>
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => deleteHandler(obj.id)}
              >
                <DeleteForeverIcon fontSize="small" color="primary" />
              </IconButton>
            </ListItem>
          ) : null
        )}
      </List>
    </>
  );
}

export default ChatsList;
