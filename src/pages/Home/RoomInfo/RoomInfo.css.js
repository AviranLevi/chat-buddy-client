import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  roomInfo: {
    display: 'flex',
    opacity: 1,
    flexDirection: 'column',
    height: '100%',
    width: '30%',
    gap: '1rem',
    borderLeft: '1px solid #ededed',
  },
  roomTitle: {
    padding: '1rem',
    borderBottom: '1px solid #ededed',
    textAlign: 'center',
  },

  roomPeople: {
    display: 'grid',
    gap: '1rem',
    padding: '1rem',
  },

  roomUserName: {
    textTransform: 'capitalize',
  },
}))
