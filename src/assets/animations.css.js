import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  fadeIn: {
    animation: 'fadeIn 1s ease-in-out',
  },
  fadeOut: {
    animation: 'fadeOut 1s ease-in-out',
  },

  '@global': {
    '@keyframes fadeIn': {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },

    '@keyframes fadeOut': {
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
      },
    },
  },
}))
