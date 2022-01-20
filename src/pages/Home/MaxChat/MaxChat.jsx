import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputEmoji from 'react-input-emoji'
import Button from '../../../components/Button'
import MessageCard from '../../../components/MessageCard'
import Title from '../../../components/Title'
import NothingToDisplay from '../../../components/NothingToDisplay'
import * as socket from '../../../socket'
import * as actions from '../../../stores/actions'
import useStyles from './MaxChat.css'

const MaxChat = () => {
  const classes = useStyles()
  const [messageValue, setMessageValues] = useState('')
  const dispatch = useDispatch()
  const { user, max } = useSelector((state) => state)
  const { messages } = max
  const scrollRef = useRef()

  const handleOnClick = () => {
    const data = {
      user,
      message: messageValue,
      time: '4:13',
    }
    dispatch(actions.pushToMaxChatMessages(data))
    socket.sendMessageToChatBot(messageValue)
    setMessageValues('')
  }

  useEffect(() => {
    socket.initiateSocketConnection()
    if (!messages.length) {
      socket.joinToChatBot(user)
      socket.firstChatBotMessage((data) => dispatch(actions.pushToMaxChatMessages(data)))
    }
    return () => {
      socket.disconnectSocket()
    }
  }, [])

  useEffect(() => {
    //scrolling to new message
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    socket.recieveAnswerFromChatBot((data) => dispatch(actions.pushToMaxChatMessages(data)))
  }, [])

  return (
    <div className={classes.maxChat}>
      <div className={classes.chatRoomTitle}>
        <Title title='Max' />
      </div>
      <div className={classes.messagesWrapper}>
        {messages && messages.length > 0 ? (
          messages.map((data) => <MessageCard key={data._id} scrollRef={scrollRef} data={data} currentUser={user} />)
        ) : (
          <NothingToDisplay />
        )}
      </div>
      <div className={classes.userMessageInput}>
        <InputEmoji value={messageValue} onChange={setMessageValues} onEnter={handleOnClick} placeholder='Type a message...' />
        <Button className={classes.sendBtn} title={<i className='fa-solid fa-paper-plane'></i>} onClick={handleOnClick} />
      </div>
    </div>
  )
}

export default MaxChat
