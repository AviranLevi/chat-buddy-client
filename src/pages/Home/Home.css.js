import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  home: {
    display: 'grid',
    placeItems: 'center',
    width: 'calc(97% - 2rem)',
    height: 'calc(97% - 2rem)',
    padding: '1rem',
    background: theme.background.secondary,
    borderRadius: '25px',
    gridTemplateColumns: '30% 70%',
  },
}))