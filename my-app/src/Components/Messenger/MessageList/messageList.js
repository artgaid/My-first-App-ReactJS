import Divider from "@material-ui/core/Divider";
import { useSelector } from "react-redux";
import { List } from "@material-ui/core";

const MessagesList = ({ chatId }) => {
  const chatsStore = useSelector((state) => state.chatsReducer);

  return (
    <List>
      {chatsStore
        .filter((el) => el.id === Number(chatId))[0]
        .messages?.map((obj) => (
          <div key={obj.id}>
            <p>You: {obj.text}</p>
            <Divider variant="middle" />
          </div>
        ))}
    </List>
  );
};

export default MessagesList;