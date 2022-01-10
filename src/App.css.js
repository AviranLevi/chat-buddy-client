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
  },
}))
