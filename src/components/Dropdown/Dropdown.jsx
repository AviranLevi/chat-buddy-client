import React from 'react'
import useStyles from './Dropdown.css'

const Dropdown = ({ items }) => {
  const classes = useStyles()

  return <div className={classes.dropdown}></div>
}

export default Dropdown
