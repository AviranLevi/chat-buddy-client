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
    zIndex: '20',
  },

  roomsWrapper: {
    display: 'grid',
    padding: '0 1rem',
    overFlow: 'hidden',
  },

  headerMobileBackground: {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '225px',
    width: '100vw',
    background: theme.background.primary,
    borderBottomRightRadius: '100%',
  },

  [theme.breakpoints.md]: {
    roomsPannel: {
      borderRadius: '0',
    },

    roomsPannelTitle: {
      color: theme.text.light,
    },
  },
}))
