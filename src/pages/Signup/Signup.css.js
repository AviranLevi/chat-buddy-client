import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  signupPage: {
    display: 'grid',
    placeItems: 'center',
    width: 'calc(100% - 2rem)',
    height: 'calc(100% - 2rem)',
    background: theme.background.secondary,
    borderRadius: '25px',
    gridColumn: '1/3',
    alignSelf: 'center',
    justifySelf: 'center',
    position: 'relative',
  },

  signUpLogo: {
    position: 'absolute',
    top: '0',
    left: '0',
    '-webkit-mask-image': 'linear-gradient(to right, transparent, #fff, transparent)',
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
    width: '30%',
  },

  signupTitle: {
    justifySelf: 'start',
  },

  logo: {
    position: 'absolute',
    top: '2%',
    left: '4%',
  },

  [theme.breakpoints.lg]: {
    signup: {
      width: '60%',
    },
  },

  [theme.breakpoints.sm]: {
    signup: {
      width: '80%',
    },
  },
}))
