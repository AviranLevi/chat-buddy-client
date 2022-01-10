import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  roomsPannel: {
    height: '100%',
    width: '100%',
    background: theme.background.light,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '25px',
  },
  roomsPannelTitle: {
    padding: '2rem 1rem 1rem',
  },

  roomsSearch: {
    display: 'grid',
    gridTemplateColumns: '88% 12%',
    background: theme.background.secondary,
    margin: '1rem',
    borderRadius: '25px',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  searchInput: {
    background: 'none',
  },

  roomSearchIcon: {
    color: theme.icons.secondary,
  },

  roomsWrapper: {
    display: 'grid',
    padding: '0 1rem',
    gap: '.5rem',
    overFlow: 'hidden',
  },
}))
