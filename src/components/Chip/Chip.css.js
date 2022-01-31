import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  invitedUser: {
    display: 'flex',
    gap: '.5rem',
    alignItems: 'center',
    background: theme.background.primary,
    width: 'fit-content',
    color: theme.text.light,
    padding: '.5rem 1rem',
    borderRadius: '25px',
    transition: 'all 1s ease-in-out',
  },
  removeInvitedUserBtn: {
    cursor: 'pointer',
  },
}))
