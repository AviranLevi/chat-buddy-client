import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  chat: {
    display: 'grid',
    height: '100%',
    width: '100%',
    gridTemplateRows: '10% 83% 7%',
    placeItems: 'center',
    background: theme.background.secondary,
  },

  chatRoomTitle: {
    display: 'grid',
    placeItems: 'center',
    width: '95%',
    height: '100%',
    borderBottom: '1px solid #ededed',
    position: 'relative',
  },

  roomInfoBtn: {
    position: 'absolute',
    right: '1%',
    fontSize: '1.5rem',
    top: 'calc(50% - .75rem)',
    cursor: 'pointer',
    color: theme.background.primary,
  },

  messagesWrapper: {
    display: 'flex',
    alignItems: 'end',
    height: 'calc(100% - 2rem)',
    maxHeight: 'calc(78.5vh - 2rem)',
    width: 'calc(100% - 2rem)',
    overflow: 'scroll',
    gap: '.5rem',
    padding: '1rem .5rem 1rem 1rem',
    alignSelf: 'start',
    overflowX: 'hidden',
    marginRight: '.5rem',
    position: 'relative',
    flexDirection: 'column',

    '&::-webkit-scrollbar-track': {
      width: '10px',
    },

    '&::-webkit-scrollbar': {
      width: '10px',
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: '18px',
      backgroundColor: theme.background.primary,
    },
  },

  typing: {
    margin: 'auto auto 0  0',
    alignSelf: 'flex-end',
  },

  userMessageInput: {
    width: '100%',
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    gridTemplateColumns: '92% 8%',
    borderTop: '1px solid #ededed',
  },

  sendBtn: {
    padding: '1.2rem',
    borderRadius: '100%',
  },

  menuBtn: {
    color: theme.background.primary,
    position: 'absolute',
    top: 'calc(50% - .75rem)',
    left: '5%',
    fontSize: '1.5rem',
  },

  [theme.breakpoints.md]: {
    chat: {
      gridTemplateRows: '10% 80% 10%',
    },

    messagesWrapper: {
      maxHeight: 'calc(80vh - 2rem)',
    },

    userMessageInput: {
      gridTemplateColumns: '80% 20%',
    },

    sendBtn: {
      padding: '.8rem',
    },

    roomInfoBtn: {
      right: '5%',
    },
  },
}))
