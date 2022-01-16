import React from 'react'
import useStyles from './NothingToDisplay.css'

const NothingToDisplay = () => {
  const classes = useStyles()
  return <span className={classes.nothingToDisplay}> Nothing to display... </span>
}

export default NothingToDisplay
