import { useSelector } from "react-redux";
import { Box } from "@material-ui/system";
import { useEffect, useRef } from "react";
import { Typography } from "@material-ui/core";

const MessagesList = ({ chatId, chatName }) => {
  const chatsStore = useSelector((state) => state.chatsReducer);

  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <Box
        sx={{
          height: 300,
          overflow: "scroll",
          border: 1,
          borderColor: "lightslategray",
          borderRadius: 1,
          p: 2,
          m: 1,
        }}
      >
        {chatsStore
          .filter((el) => el.id === Number(chatId))[0]
          .messages?.map((obj) => (
            <Box display="flex" ref={scrollRef} key={obj.id}>
              {obj.robotText ? (
                <Typography
                  sx={{
                    maxWidth: "auto",
                    mt: 1,
                    mb: 1,
                    p: 1,
                    boxShadow: 2,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    backgroundColor: "lavender",
                  }}
                  variant="subtitle1"
                  component="p"
                >
                  {obj.robotText}
                </Typography>
              ) : (
                <Typography
                  sx={{
                    ml: "auto",
                    maxWidth: "auto",
                    p: 1,
                    boxShadow: 2,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    backgroundColor: "cornsilk",
                  }}
                  variant="subtitle1"
                  component="p"
                >
                  {obj.text}
                </Typography>
              )}
            </Box>
          ))}
      </Box>
    </>
  );
};

export default MessagesList;
