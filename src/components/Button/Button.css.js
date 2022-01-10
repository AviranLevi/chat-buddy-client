import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  btn: {
    padding: '1rem 2rem',
    border: 'none',
    background: 'none',
    boxShadow: '0 1px 5px rgb(0 0 0 / 16%)',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all ease-in-out .2s',
    borderRadius: '25px',
    backgroundColor: theme.button.background.primary,
    color: theme.button.text.primary,

    '&:hover': {
      boxShadow: '0 8px 15px rgb(0 0 0 / 50%)',
    },
  },
}))
