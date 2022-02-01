import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  messageCardWrapper: {
    background: ({ userName, currentUser }) =>
      userName === currentUser.userName ? theme.background.primary : theme.background.light,

    margin: ({ userName, currentUser }) => (userName === currentUser.userName ? ' 0 0 0 auto' : '0 auto 0 0 '),

    borderRadius: ({ userName, currentUser }) =>
      userName === currentUser.userName ? '25px 25px 0 25px' : '25px 25px 25px 0',

    color: ({ userName, currentUser }) => (userName === currentUser.userName ? '#fff' : '#000'),

    padding: '1rem',
  },

  messageCard: {
    width: 'fit-content',
    height: 'fit-content',
    display: 'grid',
    gap: '.5rem',
  },

  message: {
    margin: '.5rem',
  },

  user: {
    display: ({ userName, currentUser }) => (userName !== currentUser.userName ? 'flex' : 'none'),

    background: ({ userName, currentUser }) => userName !== currentUser.userName && theme.background.primary,

    width: 'fit-content',
    padding: '.5rem',
    borderRadius: '25px',
  },

  userName: {
    color: '#fff',
    fontSize: '.8rem',
    fontWeight: '6000',
    textTransform: 'capitalize',
  },

  messageTime: {
    fontSize: '.7rem',
    color: theme.text.light,
    marginLeft: '.5rem',

    justifySelf: ({ userName, currentUser }) => (userName === currentUser.userName ? 'end' : 'start'),
  },
}))
