import React from 'react'
import useStyles from './MessageCard.css'

const MessageCard = ({ scrollRef, currentUser, data, className, style = {} }) => {
  const { user, message, messageId } = data || {}
  const { userName, _id: id } = user
  const classes = useStyles({ userName, currentUser })

  return (
    <div ref={scrollRef} id={messageId} className={`${classes.messageCard} ${className}`} style={style}>
      <div className={classes.user}>
        <p className={classes.userName}>{userName}</p>
      </div>
      <div className={classes.message}>{message || 'This is a test message you know...'}</div>
    </div>
  )
}

export default MessageCard
