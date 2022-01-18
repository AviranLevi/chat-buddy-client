import React from 'react'
import { useDispatch } from 'react-redux'
import useStyles from './Navbar.css'
import * as actions from '../../stores/actions'

const Navbar = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const showProfileOnClick = () => {
    dispatch(actions.toggleRoomList(false))
    dispatch(actions.toggleProfile(true))
  }

  const showRoomListOnClick = () => {
    dispatch(actions.toggleProfile(false))
    dispatch(actions.toggleRoomList(true))
  }
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarIcon} onClick={showProfileOnClick}>
        <i className='fa-solid fa-user'></i>
      </div>

      <div className={classes.navbarIcon} onClick={showRoomListOnClick}>
        <i className='fa-solid fa-comment'></i>
      </div>
    </div>
  )
}

export default Navbar
