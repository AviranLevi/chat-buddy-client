import { createUseStyles } from 'react-jss'

export default createUseStyles((theme) => ({
  fadeIn: {
    animation: 'fadeIn 1s ease-in-out',
  },

  fadeOut: {
    animation: 'fadeOut 1s ease-in-out',
  },

  expand: {
    animation: 'expand 1s ease-in-out, fadeIn 1s ease-in-out',
  },

  collapse: {
    animation: 'collapse 1s ease-in-out, fadeOut 1s ease-in-out',
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

    '@keyframes expand': {
      from: {
        width: '0',
      },
      to: {
        width: '30%',
      },
    },

    '@keyframes collapse': {
      from: {
        width: '30%',
      },
      to: {
        width: '0',
      },
    },
  },
}))
