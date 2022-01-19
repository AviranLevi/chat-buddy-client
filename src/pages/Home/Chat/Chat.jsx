import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputEmoji from 'react-input-emoji'
import Button from '../../../components/Button'
import MessageCard from '../../../components/MessageCard'
import Title from '../../../components/Title'
import NothingToDisplay from '../../../components/NothingToDisplay'
import * as socket from '../../../socket'
import * as actions from '../../../stores/actions'
import useStyles from './Chat.css'
import Typing from '../../../components/Typing'

const Chat = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { user, room } = useSelector((state) => state)
  const [messageValue, setMessageValue] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef()

  const { id: userId, userName } = user
  const { id: roomId, name, messages } = room

  let timeout

  const timeoutFunction = () => {
    setTyping(false)
    socket.userIsTyping(false)
  }

  const messageValueOnChange = (value) => {
    if (value) {
      setTyping(true)
    }
    socket.userIsTyping({ userName })
    setMessageValue(value)
    clearTimeout(timeout)
    timeout = setTimeout(timeoutFunction, 1000)
  }

  const handleOnClick = () => {
    const socketData = {
      message: messageValue,
      user: userId,
      room: roomId,
    }
    setMessageValue('')
    socket.sendMessage(socketData, user)
    socket.recivedMessages((data) => dispatch(actions.getRoomMessagesFromSocket(data)))
  }

  useEffect(() => {
    socket.initiateSocketConnection()
    return () => {
      socket.disconnectSocket()
    }
  }, [user])

  useEffect(() => {
    //scrolling to new message
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    room && (
      <div className={classes.chat}>
        <div className={classes.chatRoomTitle}>
          <Title title={name} />
        </div>
        <div className={classes.messagesWrapper}>
          {messages && messages.length > 0 ? (
            messages.map((data) => <MessageCard key={data._id} scrollRef={scrollRef} data={data} currentUser={user} />)
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
          <InputEmoji value={messageValue} onChange={messageValueOnChange} onEnter={handleOnClick} placeholder='Type a message...' />
          <Button className={classes.sendBtn} title={<i className='fa-solid fa-paper-plane'></i>} onClick={handleOnClick} />
        </div>
      </div>
    )
  )
}

export default Chat
