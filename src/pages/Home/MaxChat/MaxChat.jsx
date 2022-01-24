import React, { useRef, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as socket from "../../../socket"
import * as actions from "../../../stores/actions"
import * as utils from "../../../utils"
import Chat from "../../../components/Chat/Chat"
import useStyles from "./MaxChat.css"

const MaxChat = () => {
  const classes = useStyles()
  const [messageValue, setMessageValues] = useState("")
  const [maxIsTyping, setMaxIsTyping] = useState(false)
  const dispatch = useDispatch()
  const { user, max } = useSelector((state) => state)
  const { messages } = max
  const scrollRef = useRef()

  const handleOnClick = () => {
    const data = {
      user,
      message: messageValue,
      time: utils.messageCurrentTime(),
    }
    dispatch(actions.pushToMaxChatMessages(data))
    socket.sendMessageToChatBot(messageValue)
    setMessageValues("")
  }

  useEffect(() => {
    socket.initiateSocketConnection()
    if (!messages.length) {
      socket.joinToChatBot(user)
      socket.firstChatBotMessage((data) =>
        dispatch(actions.pushToMaxChatMessages(data))
      )
    }
    return () => {
      socket.disconnectSocket()
    }
  }, [])

  useEffect(() => {
    socket.recieveAnswerFromChatBot((data) => {
      setMaxIsTyping(true)
      return setTimeout(() => {
        dispatch(actions.pushToMaxChatMessages(data))
        setMaxIsTyping(false)
      }, 1000)
    })
  }, [])

  return (
    <Chat
      roomTitle="Max"
      messages={messages}
      scrollRef={scrollRef}
      typing={maxIsTyping}
      inputValue={messageValue}
      onChange={setMessageValues}
      onClick={handleOnClick}
      currentUser={user}
    />
  )
}

export default MaxChat
