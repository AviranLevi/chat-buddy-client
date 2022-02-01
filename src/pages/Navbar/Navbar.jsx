import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './Navbar.css'
import Logo from '../../components/Logo'
import * as actions from '../../stores/actions'

const Navbar = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { features } = useSelector((state) => state)
  const { logoAnimation } = features

  const showProfileOnClick = () => {
    dispatch(actions.toggleRoomList(false))
    dispatch(actions.toggleProfile(true))
  }

  const showRoomListOnClick = () => {
    dispatch(actions.toggleProfile(false))
    dispatch(actions.toggleRoomList(true))
  }

  const activateLogoAniamtion = () => dispatch(actions.toggleLogoAnimation(true))

  return (
    <div className={classes.navbar}>
      <div className={classes.logo} onMouseOver={activateLogoAniamtion}>
        <Logo
          playAnimation={logoAnimation}
          toggleLogoAnimation={(bool) => dispatch(actions.toggleLogoAnimation(bool))}
        />
      </div>
      <div className={classes.navbarIcon} onClick={showProfileOnClick}>
        <i className="fa-solid fa-user"></i>
      </div>

      <div className={classes.navbarIcon} onClick={showRoomListOnClick}>
        <i className="fa-solid fa-comment"></i>
      </div>
    </div>
  )
}

export default Navbar
