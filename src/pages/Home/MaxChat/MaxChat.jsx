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
  const { user, room } = useSelector((state) => state)

  const scrollRef = useRef()

  const handleOnClick = () => {
    setMessageValues('')
    //TODO - get question and return answer from bot
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
  }, [])

  return (
    <div className={classes.maxChat}>
      <div className={classes.chatRoomTitle}>
        <Title title='Max' />
      </div>
      <div className={classes.messagesWrapper}>
        {/* question / answers */}
        <NothingToDisplay />
      </div>
      <div className={classes.userMessageInput}>
        <InputEmoji value={messageValue} onChange={setMessageValues} onEnter={handleOnClick} placeholder='Type a message...' />
        <Button className={classes.sendBtn} title={<i className='fa-solid fa-paper-plane'></i>} onClick={handleOnClick} />
      </div>
    </div>
  )
}

export default MaxChat
