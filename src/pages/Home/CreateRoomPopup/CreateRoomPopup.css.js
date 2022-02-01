import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  createRoomPopupWrapper: {
    height: 'fit-content',
  },

  createRoomPopup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
    height: '100%',
  },

  createRoomPopupTitle: {
    margin: '2rem 0',
  },

  formSelection: {
    display: 'flex',
    gap: '1rem',
    margin: '2rem auto',
  },

  cancelBtn: {
    background: 'none',
    color: theme.background.primary,
    border: `1px solid ${theme.background.primary}`,
    textTransform: 'capitalize',
  },

  [theme.breakpoints.md]: {
    createRoomPopupTitle: {
      margin: '2rem auto',
    },
  },
}))
