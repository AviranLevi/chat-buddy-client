import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import Chat from '../../../components/Chat/Chat'
import useStyles from './RoomChat.css'
import * as socket from '../../../socket'
import * as actions from '../../../stores/actions'

const RoomChat = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const history = useHistory()

  const { user, room, features } = useSelector((state) => state)
  const [messageValue, setMessageValue] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef()

  const { isMobile } = features
  const { id: userId, userName } = user
  const { id: roomId, name, messages, uniqueName } = room
  const roomPathName = pathname.split('/')[1]

  let timeout

  const timeoutFunction = () => socket.userStopTyping({ userName, roomId })

  const messageValueOnChange = (value) => {
    socket.userIsTyping({ userName, roomId })
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

  const toggleRoomInfoOnClick = () => {
    if (isMobile) {
      history.push(`${roomPathName}/info`)
    } else {
      dispatch(actions.toggleRoomInfo(!features.toggleRoomInfo))
    }
  }

  useEffect(() => {
    socket.initiateSocketConnection()
    return () => {
      socket.disconnectSocket()
    }
  }, [])

  useEffect(() => {
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

  useEffect(() => {
    dispatch(actions.getRoomByUniqueName(roomPathName))
  }, [roomPathName])

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
      isMobile={isMobile}
    />
  )
}

export default RoomChat
