import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  navbar: {
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'center',
    marginTop: '4rem',
    gap: '1rem',
    color: theme.icons.light,
    fontSize: '1.5rem',
  },

  logo: {
    background: '#ededed30',
    borderRadius: '100%',
  },

  navbarIcon: {
    borderRadius: '50%',
    padding: '1rem',
    transition: 'ease-in-out all .2s',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: '#fff',
    '&:hover': {
      background: '#ededed10',
    },
  },
}))
