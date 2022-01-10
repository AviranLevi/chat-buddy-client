import React from 'react'
import Page from '../../components/Page'
import useStyles from './Home.css'
import RoomsPannel from './RoomsPannel'
import Chat from './Chat'

const Home = () => {
  const classes = useStyles()

  // useEffect(() => {
  //   socket.initiateSocketConnection()
  //   socket.subscribeToMessages((err, data) => {
  //     if (user.userId) {
  //       const messageData = {
  //         ...data,
  //         user: {
  //           userName: user.userName,
  //           _Id: user.userId,
  //         },
  //       }
  //       setMessages((prev) => [...prev, messageData])
  //       scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  //     }
  //   })
  //   return () => {
  //     socket.disconnectSocket()
  //   }
  // }, [user])

  // useEffect(() => {
  //   async function getMessages() {
  //     const messages = await api.getMessages()
  //     setMessages(messages)
  //   }
  //   getMessages()
  // }, [])

  return (
    <Page className={classes.home}>
      <RoomsPannel />
      <Chat />
    </Page>
  )
}

export default Home
