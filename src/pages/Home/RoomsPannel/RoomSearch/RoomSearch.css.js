import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  roomsSearch: {
    display: 'grid',
    gridTemplateColumns: '88% 12%',
    background: theme.background.secondary,
    margin: '1rem 0',
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
}))
