import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as socket from '../../../socket'
import * as actions from '../../../stores/actions'
import useStyles from './RoomChat.css'
import Chat from '../../../components/Chat/Chat'

const RoomChat = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { user, room, features } = useSelector((state) => state)
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
    if (value) setTyping(true)
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
  }

  const toggleRoomInfoOnClick = () => dispatch(actions.toggleRoomInfo(!features.toggleRoomInfo))

  useEffect(() => {
    socket.initiateSocketConnection()

    socket.recivedMessages((data) => {
      const { updatedMessages, roomId: messageRoomId } = data
      if (roomId === messageRoomId) {
        dispatch(actions.getRoomMessagesFromSocket(updatedMessages))
      }
    })
    return () => {
      socket.disconnectSocket()
    }
  }, [user])

  return (
    <Chat
      roomTitle={name}
      messages={messages}
      scrollRef={scrollRef}
      typing={typing}
      inputValue={messageValue}
      onChange={messageValueOnChange}
      onClick={handleOnClick}
      currentUser={user}
      toggleRoomInfo={toggleRoomInfoOnClick}
    />
  )
}

export default RoomChat
