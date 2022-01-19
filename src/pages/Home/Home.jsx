import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Chat from './Chat'
import Profile from './Profile'
import RoomsPannel from './RoomsPannel'
import CreateRoomPopup from './CreateRoomPopup'
import Page from '../../components/Page'
import * as actions from '../../stores/actions'
import useStyles from './Home.css'
import MaxChat from './MaxChat'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = useLocation()
  const { features, room } = useSelector((state) => state)

  const roomName = pathname.split('/')[1]
  const max = pathname.split('/')[1] === 'max'
  const { createRoomTogglePopup, toggleProfile, toggleRoomList } = features
  const { errors } = room

  useEffect(() => {
    if (!max && roomName) {
      dispatch(actions.getRoomByUniqueName(roomName))
    }
  }, [roomName])

  useEffect(() => {
    if (errors.roomNotFound) {
      history.push('/')
    }
  }, [errors.roomNotFound])

  return (
    <Page className={classes.home}>
      {toggleRoomList && <RoomsPannel />}
      {toggleProfile && <Profile />}
      {max && <MaxChat />}
      {!max && roomName && <Chat />}

      {createRoomTogglePopup && <CreateRoomPopup />}
    </Page>
  )
}

export default Home
