import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  room: {
    borderBottom: '1px solid #ededed',
    padding: '1.5rem 1rem',
    cursor: 'pointer',
    transition: 'all ease-in-out .2s',
    display: 'flex',
    gap: '.5rem',
    alignItems: 'center',
    justifyContent: 'space-between',

    '&:hover': {
      background: '#ededed',
    },
  },

  roomType: {
    fontSize: '.8rem',
    color: 'grey',
    marginRight: '1rem',
  },
}))
