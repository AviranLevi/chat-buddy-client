import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  createRoom: {
    marginTop: '1rem',
    transition: 'ease-in-out all .2s',
    display: 'flex',
    borderRadius: '25px',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    zIndex: '20',

    '&:hover': {
      background: '#ededed',
    },
  },

  createRoomIcon: {
    padding: '1rem',
    color: theme.background.primary,
    background: theme.background.secondary,
    borderRadius: '50%',
  },

  createRoomTitle: {
    background: 'none',
    margin: '0 auto',
  },

  [theme.breakpoints.md]: {
    createRoom: {
      color: theme.text.light,
    },

    createRoomIcon: {
      color: theme.background.light,
      background: 'none',
      padding: '1rem .5rem',
    },
  },
}))
