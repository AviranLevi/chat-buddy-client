import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  signupPage: {
    gridTemplateRows: '20% 80%',
    placeItems: 'center',
    height: '90%',
  },
  signupPageTitles: {
    display: 'grid',
    placeItems: 'center',
    gap: '1rem',
  },
  signup: {
    display: 'grid',
    gap: '1rem',
    alignSelf: 'start',
  },
  signupTitle: {
    justifySelf: 'start',
  },
}))
