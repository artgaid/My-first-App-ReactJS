import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, Typography } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { deleteChats } from "../../actions/chatsAction";

function Chats() {
  const chatsStore = useSelector((state) => state.chatsReducer);

  const filterChats = chatsStore.filter((el) => el.chatId === el.messageId);

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
        {filterChats.map((obj) =>
          obj.nameTo !== "" ? (
            <ListItem key={obj.messageId} alignItems="center">
              <Button
                component={Link}
                to={`/chats/${obj.messageId}`}
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
    </>
  );
}

export default Chats;
