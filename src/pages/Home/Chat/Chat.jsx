import React, { useRef, useState } from 'react'
import Button from '../../../components/Button'
import useStyles from './Chat.css'
import { useSelector } from 'react-redux'
import MessageCard from '../../../components/MessageCard'
import Title from '../../../components/Title'
import InputEmoji from 'react-input-emoji'
import * as socket from '../../../socket'

const Chat = () => {
  const classes = useStyles()
  const [messageValue, setMessageValues] = useState('')
  const { user, room } = useSelector((state) => state)
  const { id: userId, userName } = user
  const { id: roomId, name, messages } = room

  const handleOnClick = (e) => {
    e.preventDefault()
    const socketData = {
      message: messageValue,
      user: userId,
      room: roomId,
    }
    setMessageValues('')
    socket.sendMessage(socketData, user)
  }

  const scrollRef = useRef()
  const messageData = {
    user: '123',
    message: 'test message',
    messageId: '1234566',
  }
  return (
    room && (
      <div className={classes.chat}>
        <div className={classes.chatRoomTitle}>
          <Title title={name} />
        </div>
        <div className={classes.messagesWrapper}>
          <MessageCard data={messageData} currentUser={{ userName }} />

          {messages.map((data) => (
            <MessageCard id={data.messageId} scrollRef={scrollRef} data={data} currentUser={user} />
          ))}
        </div>
        <form className={classes.userMessageInput} onSubmit={handleOnClick}>
          <InputEmoji value={messageValue} onChange={setMessageValues} placeholder='Type a message...' />
          <Button className={classes.sendBtn} title={<i className='fa-solid fa-paper-plane'></i>} onClick={handleOnClick} />
        </form>
      </div>
    )
  )
}

export default Chat
