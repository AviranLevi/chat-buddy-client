import React, { useEffect } from 'react'
import InputEmoji from 'react-input-emoji'
import Button from '../Button'
import MessageCard from '../MessageCard'
import Title from '../Title'
import NothingToDisplay from '../NothingToDisplay'
import useStyles from './Chat.css'
import Typing from '../Typing'

const Chat = ({
  roomTitle,
  typing = false,
  messages = [],
  scrollRef,
  currentUser,
  inputValue = '',
  toggleRoomInfo,
  onChange,
  onClick,
}) => {
  const classes = useStyles()

  useEffect(() => {
    //scrolling to new message
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className={classes.chat}>
      <div className={classes.chatRoomTitle}>
        <Title title={roomTitle} />

        <div className={classes.roomInfoBtn} onClick={toggleRoomInfo}>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      <div className={classes.messagesWrapper}>
        {messages && messages.length > 0 ? (
          messages.map((data) => (
            <MessageCard
              key={data._id}
              scrollRef={scrollRef}
              data={data}
              currentUser={currentUser}
            />
          ))
        ) : (
          <NothingToDisplay />
        )}

        {typing && (
          <div className={classes.typing}>
            <Typing />
          </div>
        )}
      </div>

      <div className={classes.userMessageInput}>
        <InputEmoji
          value={inputValue}
          onChange={onChange}
          onEnter={onClick}
          placeholder="Type a message..."
        />
        <Button
          className={classes.sendBtn}
          title={<i className="fa-solid fa-paper-plane"></i>}
          onClick={onClick}
        />
      </div>
    </div>
  )
}

export default Chat
