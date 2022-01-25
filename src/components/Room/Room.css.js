import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  room: {
    borderBottom: '1px solid #ededed',
    padding: '1.5rem 1rem 1.5rem 2rem',
    cursor: 'pointer',
    transition: 'all ease-in-out .2s',
    display: 'flex',
    gap: '.5rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    textDecoration: 'none',
    outline: 'none',
    color: '#000',
    position: 'relative',
    left: '-1.5rem',
    width: '100%',
    background: ({ currentRoom, name }) => (currentRoom === name ? theme.background.secondary : theme.background.light),

    '&:hover': {
      background: '#ededed',
    },
  },

  roomType: {
    fontSize: '.8rem',
    color: 'grey',
    marginRight: '1rem',
  },
}))
