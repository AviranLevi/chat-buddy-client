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
    maxHeight: '100%',
    width: '95%',
    overflow: 'scroll',
    gap: '.5rem',
    margin: '1rem 0',
    alignSelf: 'start',
  },

  userMessageInput: {
    width: '95%',
    display: 'grid',
    gridTemplateColumns: '92% 8%',
    alginSelf: 'end',
  },
  sendBtn: {
    padding: '0',
  },
}))
