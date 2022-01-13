import React from 'react'
import useStyles from './Popup.css'
import animationsCss from '../../assets/animations.css'

const Popup = ({ children, closeOnClick }) => {
  const classes = useStyles()
  const animations = animationsCss()
  const closePopUp = () => closeOnClick()
  return (
    <div className={`${classes.popup} ${animations.fadeIn}`}>
      <div className={classes.popupWrapper}>
        <div className={classes.closeBtn} onClick={closePopUp}>
          <i className='fa-solid fa-xmark'></i>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Popup
