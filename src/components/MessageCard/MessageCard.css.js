import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  messageCard: {
    background: ({ userName, currentUser }) => (userName === currentUser.userName ? theme.background.primary : theme.background.light),
    padding: '1rem',
    borderRadius: ({ userName, currentUser }) => (userName === currentUser.userName ? '25px 25px 0 25px' : '25px 25px 25px 0'),
    widht: 'fit-content',
    height: 'fit-content',
    justifySelf: ({ userName, currentUser }) => (userName === currentUser.userName ? 'end' : 'start'),
    display: 'grid',
    gap: '.5rem',
  },

  message: {
    margin: '.5rem',
  },

  user: {
    display: 'flex',
    background: theme.background.primary,
    width: 'fit-content',
    padding: '.5rem',
    borderRadius: '25px',
  },
  userName: {
    color: ({ userName, currentUser }) => (userName === currentUser.userName ? '#000' : '#fff'),
    fontSize: '.8rem',
    fontWeight: '6000',
  },

  messageTime: {
    fontSize: '.7rem',
    justifySelf: ({ userName, currentUser }) => (userName === currentUser.userName ? 'end' : 'start'),
    color: theme.icons.secondary,
    marginLeft: '.5rem',
  },
}))
