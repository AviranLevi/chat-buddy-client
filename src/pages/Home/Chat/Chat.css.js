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
  },

  messagesWrapper: {
    display: 'grid',
    alignItems: 'end',
    minHeight: 'calc(77vh - 2rem)',
    maxHeight: 'calc(77vh - 2rem)',
    width: 'calc(100% - 2rem)',
    overflow: 'scroll',
    gap: '.5rem',
    padding: '1rem',
    alignSelf: 'start',
    position: 'relative',
  },

  userMessageInput: {
    width: '95%',
    display: 'grid',
    gridTemplateColumns: '92% 8%',
    alginSelf: 'end',
    position: 'relative',
  },

  typing: {
    position: 'absolute',
    bottom: '0',
    left: '0',
  },
  sendBtn: {
    padding: '0',
  },
}))
