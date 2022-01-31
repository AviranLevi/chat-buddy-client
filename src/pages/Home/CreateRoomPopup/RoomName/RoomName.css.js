import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  roomNameInputWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },

  roomNameInput: {
    border: '1px solid #ededed',
    width: '100%',
  },
}))
