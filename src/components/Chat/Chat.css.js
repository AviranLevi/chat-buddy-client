import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  chat: {
    display: 'grid',
    height: '100%',
    width: '100%',
    gridTemplateRows: '10% 83% 7%',
    placeItems: 'center',
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
    display: 'grid',
    alignItems: 'end',
    maxHeight: 'calc(78.5vh - 2rem)',
    width: 'calc(100% - 2rem)',
    overflow: 'scroll',
    gap: '.5rem',
    padding: '1rem .5rem 1rem 1rem',
    alignSelf: 'start',
    overflowX: 'hidden',
    marginRight: '.5rem',
    position: 'relative',

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
    justifySelf: 'start',
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
}))
