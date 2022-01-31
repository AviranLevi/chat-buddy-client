import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  home: {
    display: 'flex',
    placeItems: 'center',
    flexDirection: 'row',
    width: 'calc(100% - 2rem)',
    height: 'calc(97% - 2rem)',
    padding: '1rem 0 1rem 1rem',
    background: theme.background.secondary,
    borderRadius: '25px',
    justifySelf: 'start',
    transition: 'all ease-in-out .5s',
  },

  [theme.breakpoints.xs]: {
    home: {
      flexDirection: 'column',
    },
  },
}))
