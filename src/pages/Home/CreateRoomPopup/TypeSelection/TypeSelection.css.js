import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  roomTypesSelection: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },

  roomTypes: {
    display: 'flex',
    gap: '1rem',
  },

  roomTypeBtn: {
    background: 'none',
    color: theme.background.primary,
    border: `1px solid ${theme.background.primary}`,
    textTransform: 'capitalize',
    padding: '.5rem 1rem ',
  },
}))
