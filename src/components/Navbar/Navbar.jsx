import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './Navbar.css'

const Navbar = () => {
  const classes = useStyles()
  return (
    <div className={classes.navbar}>
      <Link to='/profile' className={classes.navbarIcon}>
        <i className='fa-solid fa-user'></i>
      </Link>

      <Link to='/room/' className={classes.navbarIcon}>
        <i className='fa-solid fa-comment'></i>
      </Link>
    </div>
  )
}

export default Navbar
