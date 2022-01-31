import React, { useState } from 'react'
import useStyles from './Chip.css'

const Chip = ({ text = '', removeOnClick }) => {
  const [displayRemoveBtn, setDisplayRemoveBtn] = useState(false)

  const classes = useStyles()
  const displayOnHover = () => setDisplayRemoveBtn(true)
  const hideOnLeave = () => setDisplayRemoveBtn(false)

  return (
    <div className={classes.invitedUser} onMouseOver={displayOnHover} onMouseLeave={hideOnLeave}>
      <span className={classes.invitedUserName}>{text}</span>

      {displayRemoveBtn && (
        <span className={classes.removeInvitedUserBtn} onClick={removeOnClick}>
          <i className="fa-solid fa-ban" data-value={text}></i>
        </span>
      )}
    </div>
  )
}

export default Chip
