import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  roomsPannel: {
    flexBasis: '25%',
    height: '100%',
    width: 'calc(100% - 3rem)',
    background: theme.background.light,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '25px',
    padding: '0 1.5rem',
  },
  roomsPannelTitle: {
    padding: '2rem 0 1rem',
  },

  roomsWrapper: {
    display: 'grid',
    padding: '0 1rem',
    overFlow: 'hidden',
  },
}))
