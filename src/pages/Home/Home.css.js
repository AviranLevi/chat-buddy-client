import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  home: {
    display: 'grid',
    placeItems: 'center',
    width: 'calc(100% - 2rem)',
    height: 'calc(97% - 2rem)',
    padding: '1rem 0 1rem 1rem',
    background: theme.background.secondary,
    borderRadius: '25px',
    justifySelf: 'start',
    transition: 'all ease-in-out .5s',

    gridTemplateColumns: ({ features }) => (features.toggleRoomInfo ? '25% auto 20%' : '25% 75%'),
  },
}))
