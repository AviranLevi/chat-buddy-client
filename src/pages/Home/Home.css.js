import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  home: {
    display: 'grid',
    placeItems: 'center',
    width: '97%',
    height: 'calc(95% - 1rem)',
    background: '#ededed',
    borderRadius: '25px',
    padding: '1rem 0',
    gridTemplateRows: 'auto 1fr',
  },

  homeTitle: {
    width: '97%',
    alignSelf: 'start',
    borderBottom: '1px solid #ddd',
    padding: '1rem 0',
    textAlign: 'center',
  },

  messagesWrapper: {
    display: 'grid',
    alignItems: 'end',
    maxHeight: '75vh',
    width: '97%',
    overflow: 'scroll',
    gap: '.5rem',
    margin: '1rem 0',
    alignSelf: 'start',
  },

  userMessageInput: {
    display: 'grid',
    gridTemplateColumns: '90% 10%',
    gap: '.5rem',
    width: '97%',
    alignSelf: 'end',
  },
}))
