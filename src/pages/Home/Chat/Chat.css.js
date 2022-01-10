import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  chat: {
    display: 'grid',
    height: '100%',
    width: '100%',
    gridTemplateRows: '10% 80% 10%',
    placeItems: 'center',
  },
  chatRoomTitle: {
    display: 'grid',
    placeItems: 'center',
    width: '90%',
    height: '100%',
    borderBottom: '1px solid #ededed',
  },

  messagesWrapper: {
    display: 'grid',
    alignItems: 'end',
    maxHeight: '100%',
    width: '97%',
    overflow: 'scroll',
    gap: 'rem',
    margin: '1rem 0',
    alignSelf: 'start',
  },

  userMessageInput: {
    width: '100%',
    alginSelf: 'end',
  },
  sendBtn: {},
}))
