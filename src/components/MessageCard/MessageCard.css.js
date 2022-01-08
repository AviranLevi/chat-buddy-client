import { createUseStyles } from 'react-jss'

export default createUseStyles({
  messageCard: {
    background: '#ddd',
    padding: '1rem',
    borderRadius: '25px',
    widht: 'fit-content',
    height: 'fit-content',
    justifySelf: ({ userName, currentUser }) => (userName === currentUser.userName ? 'end' : 'start'),
  },

  user: {
    display: 'flex',
    gap: '.5rem',
    alignItems: 'center',
    paddingLeft: '1rem',
    paddingBottom: '.5rem',
  },
  userName: {
    color: ({ userName, currentUser }) => (userName === currentUser.userName ? '#000' : 'grey'),
  },
  message: {
    background: '#8ED081',
    borderRadius: '25px',
    padding: '1rem',
  },
})
