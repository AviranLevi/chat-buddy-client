import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  roomsPannel: {
    height: '100%',
    width: '100%',
    background: theme.background.light,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '25px',
  },

  roomsPannelTitle: {
    padding: '2rem 0 1rem',
  },

  maxRoom: {
    padding: '1rem',
    fontSize: '2rem',
    margin: '.5rem 0',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all ease-in-out .5s',
    background: theme.background.primary,
    color: theme.text.light,
    borderRadius: '12px',

    '&:hover': {
      borderRadius: '25px',
      boxShadow: `7px 7px 20px 0px grey`,
    },
  },

  roomsWrapper: {
    display: 'grid',
    overFlow: 'hidden',
  },
}))
