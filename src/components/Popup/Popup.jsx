import React from 'react'
import useStyles from './Popup.css'
import animationsCss from '../../assets/animations.css'

const Popup = ({ children, closeOnClick }) => {
  const classes = useStyles()
  const animations = animationsCss()
  const closePopup = () => closeOnClick()
  return (
    <div className={`${classes.popup} ${animations.fadeIn}`}>
      <div className={classes.popupBackground} onClick={closePopup}></div>
      <div className={classes.popupWrapper}>
        <div className={classes.closeBtn} onClick={closePopup}>
          <i className='fa-solid fa-xmark'></i>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Popup
