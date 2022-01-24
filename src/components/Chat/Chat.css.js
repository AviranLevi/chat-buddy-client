import { createUseStyles } from "react-jss"

export default createUseStyles((theme) => ({
  chat: {
    display: "grid",
    height: "100%",
    width: "100%",
    gridTemplateRows: "10% 83% 7%",
    placeItems: "center",
  },
  chatRoomTitle: {
    display: "grid",
    placeItems: "center",
    width: "95%",
    height: "100%",
    borderBottom: "1px solid #ededed",
  },

  messagesWrapper: {
    display: "grid",
    alignItems: "end",
    maxHeight: "calc(77vh - 2rem)",
    width: "calc(100% - 2rem)",
    overflow: "scroll",
    gap: ".5rem",
    padding: "1rem .5rem 1rem 1rem",
    alignSelf: "start",
    overflowX: "hidden",
    marginRight: ".5rem",
    position: "relative",
    borderBottom: "1px solid #ededed",

    "&::-webkit-scrollbar-track": {
      width: "10px",
    },

    "&::-webkit-scrollbar": {
      width: "10px",
    },

    "&::-webkit-scrollbar-thumb": {
      borderRadius: "18px",
      backgroundColor: theme.background.primary,
    },
  },

  typing: {
    position: "absolute",
    bottom: "0",
    left: "0",
  },

  userMessageInput: {
    width: "95%",
    display: "grid",
    gridTemplateColumns: "92% 8%",
    alginSelf: "end",
  },

  sendBtn: {
    padding: "0",
  },
}))
