import React from 'react'
import useStyles from './Navbar.css'

const Navbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.navbar}>
      <div className={classes.navbarIcon}>
        <i className='fa-solid fa-user'></i>
      </div>

      <div className={classes.navbarIcon}>
        <i className='fa-solid fa-comment'></i>
      </div>
    </div>
  )
}

export default Navbar
