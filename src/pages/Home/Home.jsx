import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Chat from './Chat'
import Profile from './Profile'
import MaxChat from './MaxChat'
import RoomsPannel from './RoomsPannel'
import CreateRoomPopup from './CreateRoomPopup'
import Page from '../../components/Page'
import * as actions from '../../stores/actions'
import useStyles from './Home.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react'

const Home = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [redirect, setRedirect] = useState(false)

  const { pathname } = useLocation()
  const roomName = pathname.split('/')[1]
  const { features, room } = useSelector((state) => state)
  const { createRoomTogglePopup, toggleProfile, toggleRoomList, talkWithMax, talkWithPeople } = features

  useEffect(() => {
    if (roomName) {
      setRedirect(false)
      dispatch(actions.getRoomByUniqueName(roomName))
    }
  }, [roomName])

  useEffect(() => {
    if (!room.id) {
      setRedirect(true)
    } else {
      setRedirect(false)
    }
  }, [room.id])

  if (redirect) {
    return <Redirect exact to='/' />
  }

  return (
    <Page className={classes.home}>
      {toggleRoomList && <RoomsPannel />}
      {toggleProfile && <Profile />}
      {talkWithMax && <MaxChat />}
      {talkWithPeople && <Chat />}
      {createRoomTogglePopup && <CreateRoomPopup />}
    </Page>
  )
}

export default Home
