import React, { useState } from 'react'
import { useEffect } from 'react'
import useStyles from './MessageCard.css'

const MessageCard = ({ scrollRef, currentUser, data, className, style = {} }) => {
  const [displayMessage, setDisplayMessage] = useState(false)
  const { user, message, time } = data || {}
  const { userName } = user

  const classes = useStyles({ userName, currentUser })

  useEffect(() => {
    setTimeout(() => setDisplayMessage(true), 1000)
  }, [])

  return (
    <div className={classes.messageCardWrapper}>
      <div ref={scrollRef} className={`${classes.messageCard} ${className}`} style={style}>
        <div className={`${classes.user} `}>
          <p className={classes.userName}>{userName}</p>
        </div>
        <div className={`${classes.message}  `}>{message}</div>

        <span className={`${classes.messageTime} `}>{time}</span>
      </div>
    </div>
  )
}

export default MessageCard
