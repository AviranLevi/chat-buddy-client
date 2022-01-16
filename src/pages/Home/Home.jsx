import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './Home.css'
import RoomsPannel from './RoomsPannel'
import Chat from './Chat'
import Page from '../../components/Page'
import * as actions from '../../stores/actions'
import CreateRoomPopup from './CreateRoomPopup'

const Home = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const roomName = pathname.split('/')[2]
  const { features } = useSelector((state) => state)
  const { createRoomTogglePopup } = features

  useEffect(() => {
    if (roomName) {
      dispatch(actions.getRoomByUniqueName(roomName))
    }
  }, [roomName])

  return (
    <Page className={classes.home}>
      <RoomsPannel />
      <Chat />
      {createRoomTogglePopup && <CreateRoomPopup />}
    </Page>
  )
}

export default Home
