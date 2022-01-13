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

  roomsWrapper: {
    display: 'grid',
    overFlow: 'hidden',
  },
}))
