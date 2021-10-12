import Divider from "@material-ui/core/Divider";
import { useSelector } from "react-redux";
import { List } from "@material-ui/core";

const MessagesList = ({ chatId }) => {
  const chatsStore = useSelector((state) => state.chatsReducer);
  const chatName = chatsStore.filter((el) => el.id === Number(chatId))[0]
    .chatName;

  return (
    <>
      <p> {chatName ? chatName : null} </p>
      <List>
        {chatsStore
          .filter((el) => el.id === Number(chatId))[0]
          .messages?.map((obj) => (
            <div key={obj.id}>
              {obj.robotText ? (
                <div>
                  <p>
                    {chatName} : {obj.robotText}
                  </p>
                  <Divider variant="middle" />
                </div>
              ) : (
                <div>
                  <p>You : {obj.text}</p>
                  <Divider variant="middle" />
                </div>
              )}
            </div>
          ))}
      </List>
    </>
  );
};

export default MessagesList;
