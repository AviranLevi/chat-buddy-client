import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  app: {
    position: 'relative',
    minHeight: '100vh',
    width: '100vw',
    overflowX: 'hidden',
    overflowY: 'auto',
    background: theme.background.primary,
    fontFamily: 'Roboto',
    display: 'grid',
    gridTemplateColumns: '5% 95%',
  },

  [theme.breakpoints.lg]: {
    app: {
      gridTemplateColumns: '10% 90%',
    },
  },

  [theme.breakpoints.md]: {
    app: {
      maxHeight: '100vh',
      gridTemplateColumns: 'unset',
    },
  },
}))
