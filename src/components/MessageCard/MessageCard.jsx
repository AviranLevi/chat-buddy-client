import React from 'react'
import useStyles from './MessageCard.css'

const MessageCard = ({ scrollRef, currentUser, data, className, style = {} }) => {
  const { user, message, messageId, time } = data || {}
  const { userName, _id: id } = user
  const classes = useStyles({ userName, currentUser })

  return (
    <div ref={scrollRef} key={messageId} className={`${classes.messageCard} ${className}`} style={style}>
      <div className={classes.user}>
        <p className={classes.userName}>{userName || 'Aviran Levi'}</p>
      </div>
      <div className={classes.message}>{message}</div>

      <span className={classes.messageTime}>{time || '4:13pm'}</span>
    </div>
  )
}

export default MessageCard
