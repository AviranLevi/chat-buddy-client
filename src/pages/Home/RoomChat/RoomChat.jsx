import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as socket from '../../../socket'
import * as actions from '../../../stores/actions'
import useStyles from './RoomChat.css'
import Chat from '../../../components/Chat/Chat'

const RoomChat = ({ location }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { user, room, features } = useSelector((state) => state)
  const [messageValue, setMessageValue] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef()

  const { id: userId, userName } = user
  const { id: roomId, name, messages, uniqueName } = room

  let timeout

  const timeoutFunction = () => {
    setTyping(false)
    socket.userStopTyping({ userName, roomId })
  }

  const messageValueOnChange = (value) => {
    socket.userIsTyping({ userName, roomId })
    setTyping(true)
    setMessageValue(value)
    clearTimeout(timeout)
    timeout = setTimeout(timeoutFunction, 1000)
  }

  const handleOnClick = () => {
    const socketData = {
      message: messageValue,
      user: userId,
      room: roomId,
      roomName: name,
    }
    setMessageValue('')
    socket.sendMessage(socketData, user)
  }

  const toggleRoomInfoOnClick = () => dispatch(actions.toggleRoomInfo(!features.toggleRoomInfo))

  useEffect(() => {
    socket.initiateSocketConnection()
    return () => {
      socket.disconnectSocket()
    }
  }, [])

  useEffect(() => {
    const roomPathName = location.split('/')[1]

    socket.recivedMessages((data) => {
      const { updatedMessages, roomId: messageRoomId } = data
      if (roomId === messageRoomId && uniqueName === roomPathName) {
        dispatch(actions.getRoomMessagesFromSocket(updatedMessages))
      }
    })
  }, [messages])

  useEffect(() => {
    socket.recivedTyping((data) => {
      const { userName: typingUserName } = data
      console.log({ typingUserName })
      if (typingUserName !== userName) {
        setTyping(true)
      }
    })

    socket.recivedStopTyping((data) => {
      const { userName: typingUserName } = data
      console.log('stop', { typingUserName })

      if (typingUserName !== userName) {
        setTyping(false)
      }
    })
  }, [])

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
