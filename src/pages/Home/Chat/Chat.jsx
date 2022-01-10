import React, { useRef, useState } from 'react'
import Button from '../../../components/Button'
import TextInput from '../../../components/TextInput'
import useStyles from './Chat.css'
import * as socket from '../../../socket'
import { useSelector } from 'react-redux'
import MessageCard from '../../../components/MessageCard'
import Title from '../../../components/Title'

const Chat = () => {
  const classes = useStyles()
  const [messageValue, setMessageValues] = useState('')
  const { user, room } = useSelector((state) => state)
  const { id: userId } = user
  const { id: roomId, messages } = room

  const handleOnChange = (e) => setMessageValues(e.target.value)

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
    <div className={classes.chat}>
      <div className={classes.chatRoomTitle}>
        <Title title='Test1' />
      </div>
      <div className={classes.messagesWrapper}>
        <MessageCard data={messageData} currentUser={{ userName: 'Aviran' }} />

        {messages.map((data) => (
          <MessageCard scrollRef={scrollRef} data={data} currentUser={user} />
        ))}
      </div>
      <form className={classes.userMessageInput} onSubmit={handleOnClick}>
        <TextInput placeholder='Type Message...' value={messageValue} onChange={handleOnChange} />
        <Button className={classes.sendBtn} title={<i class='fa-solid fa-paper-plane'></i>} onClick={handleOnClick} />
      </form>
    </div>
  )
}

export default Chat
