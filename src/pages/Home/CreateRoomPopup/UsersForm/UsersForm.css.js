import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  roomUsers: {
    display: 'grid',
    gap: '1rem',
  },

  roomUsersForm: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  roomUsersInput: {
    border: '1px solid #ededed',
    width: '100%',
  },

  inviteUsersDisplay: {
    display: 'flex',
    gap: '.2rem',
    flexWrap: 'wrap',
  },

  addUserBtn: {
    padding: '1rem',
  },
}))
