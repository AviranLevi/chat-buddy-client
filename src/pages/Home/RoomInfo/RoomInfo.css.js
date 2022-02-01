import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  roomInfo: {
    display: 'flex',
    opacity: 1,
    flexDirection: 'column',
    height: '100%',
    width: '30%',
    gap: '1rem',
    borderLeft: '1px solid #ededed',
    position: 'relative',
  },
  roomTitle: {
    padding: '1rem',
    borderBottom: '1px solid #ededed',
    textAlign: 'center',
  },

  roomPeople: {
    display: 'grid',
    gap: '1rem',
    padding: '1rem',
  },

  roomUserName: {
    textTransform: 'capitalize',
  },

  goBackBtn: {
    position: 'absolute',
    top: '2.5rem',
    left: '2.5rem',
    fontSize: '2rem',
    textDecoration: 'none',
    color: theme.text.primary,
  },

  [theme.breakpoints.md]: {
    roomInfo: {
      background: theme.background.secondary,
      width: '100%',
    },

    roomTitle: {
      fontSize: '3rem',
      padding: '2rem 1rem',
    },
  },
}))
