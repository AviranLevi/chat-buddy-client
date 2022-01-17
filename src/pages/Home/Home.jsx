import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './Home.css'
import RoomsPannel from './RoomsPannel'
import Chat from './Chat'
import Page from '../../components/Page'
import * as actions from '../../stores/actions'
import CreateRoomPopup from './CreateRoomPopup'
import Profile from './Profile'

const Home = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const roomName = pathname.split('/')[1]
  const { features } = useSelector((state) => state)
  const { createRoomTogglePopup, toggleProfile, toggleRoomList } = features

  useEffect(() => {
    if (roomName) {
      dispatch(actions.getRoomByUniqueName(roomName))
    }
  }, [roomName])

  return (
    <Page className={classes.home}>
      {toggleRoomList && <RoomsPannel />}
      {toggleProfile && <Profile />}
      <Chat />
      {createRoomTogglePopup && <CreateRoomPopup />}
    </Page>
  )
}

export default Home
