import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
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
  createRoomInputWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
  },
  createRoomPopupInput: {
    border: '1px solid #ededed',
  },

  roomTypesSelection: {
    display: 'flex',
    gap: '1rem',
  },

  roomTypeBtn: {
    background: 'none',
    color: theme.background.primary,
    border: `1px solid ${theme.background.primary}`,
    textTransform: 'capitalize',
  },

  cancelBtn: {
    background: 'none',
    color: theme.background.primary,
    border: `1px solid ${theme.background.primary}`,
    textTransform: 'capitalize',
  },

  formSelection: {
    display: 'flex',
    gap: '1rem',
  },
}))
