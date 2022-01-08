import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  page: {
    display: 'grid',
    height: '100vh',
    opacity: 1,
    placeItems: 'center',
  },
  pageWrapper: {
    display: 'grid',
    placeItems: 'center',
  },
}))
