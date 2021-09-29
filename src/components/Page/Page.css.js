import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  page: {
    display: 'grid',
    height: '100vh',
    opacity: 1,
  },
  pageWrapper: {
    display: 'grid',
    width: '100%',
    height: '100%',
    placeItems: 'center',
  },
}))
