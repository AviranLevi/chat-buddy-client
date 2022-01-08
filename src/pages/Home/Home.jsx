import React, { useEffect, useRef, useState } from 'react'
import Page from '../../components/Page'
import Title from '../../components/Title'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import useStyles from './Home.css'
import MessageCard from '../../components/MessageCard'
import * as socket from '../../socket'
import * as api from '../../api'

const Home = () => {
  const classes = useStyles()
  const [messages, setMessages] = useState([])
  const [messageValue, setMessageValues] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef()
  const [user, setUser] = useState({})

  useEffect(() => {
    async function getUser() {
      const userId = localStorage.getItem('userId')
      const userAlreadyExists = await api.getUser(userId)

      if (userAlreadyExists) {
        const { userName } = userAlreadyExists
        setUser({ userName, userId })
      }
    }
    getUser()
  }, [])

  useEffect(() => {
    socket.initiateSocketConnection()
    socket.subscribeToMessages((err, data) => {
      if (user.userId) {
        const messageData = {
          ...data,
          user: {
            userName: user.userName,
            _Id: user.userId,
          },
        }
        setMessages((prev) => [...prev, messageData])
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
      }
    })
    return () => {
      socket.disconnectSocket()
    }
  }, [user])

  useEffect(() => {
    async function getMessages() {
      const messages = await api.getMessages()
      setMessages(messages)
    }
    getMessages()
  }, [])

  const handleOnChange = (e) => {
    setMessageValues(e.target.value)
  }

  const handleOnClick = (e) => {
    e.preventDefault()
    const socketData = {
      message: messageValue,
      user: user.userId,
    }
    setMessageValues('')
    socket.sendMessage(socketData, user)
  }

  return (
    <Page className={classes.home}>
      <div className={classes.homeTitle}>
        <Title title='Chat' />
      </div>

      <div className={classes.messagesWrapper}>
        {messages.map((data) => (
          <MessageCard scrollRef={scrollRef} data={data} currentUser={user} />
        ))}
      </div>
      {typing && <span>someone is typing...</span>}
      <form className={classes.userMessageInput} onSubmit={handleOnClick}>
        <TextInput placeholder='Type Message...' value={messageValue} onChange={handleOnChange} />
        <Button title='Send' onClick={handleOnClick} />
      </form>
    </Page>
  )
}

export default Home
