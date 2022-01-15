import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  popup: {
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    display: 'grid',
    placeItems: 'center',
    top: '0',
    left: '0',
    zIndex: '100',
  },

  popupBackground: {
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'rgba(0, 0, 0, 0.6)',
    height: '100%',
    width: '100%',
  },

  popupWrapper: {
    background: '#fff',
    height: '500px',
    width: '500px',
    borderRadius: '8px',
    padding: '1rem 2rem',
    position: 'relative',
  },

  closeBtn: {
    position: 'absolute',
    top: '1rem',
    right: '1.3rem',
    fontSize: '1.5rem',
    transition: 'all ease-in-out .2s',
    cursor: 'pointer',

    '&:hover': {
      color: theme.button.background.primary,
    },
  },
}))
