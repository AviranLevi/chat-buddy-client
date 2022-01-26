import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  profile: {
    height: '100%',
    width: 'calc(100% - 3rem)',
    background: theme.background.light,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '25px',
    padding: '0 1.5rem',
    justifySelf: 'start',
    flexBasis: '25%',
  },
  profileTitle: {
    fontSize: '2.5rem',
    marginRight: 'auto',
    margin: '2rem auto 2rem 0',
  },

  profileInfo: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    marginRight: 'auto',
    marginBottom: '1rem',
  },

  profileInfoInput: {
    borderRadius: '8px',
    background: theme.background.secondary,
  },
}))
