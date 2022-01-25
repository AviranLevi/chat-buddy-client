import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import RoomChat from './RoomChat'
import Profile from './Profile'
import RoomsPannel from './RoomsPannel'
import CreateRoomPopup from './CreateRoomPopup'
import Page from '../../components/Page'
import * as actions from '../../stores/actions'
import useStyles from './Home.css'
import MaxChat from './MaxChat'
import { useHistory } from 'react-router-dom'
import RoomInfo from './RoomInfo'

const Home = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = useLocation()
  const { features, room } = useSelector((state) => state)
  const classes = useStyles({ features })

  const roomName = pathname.split('/')[1]
  const max = pathname.split('/')[1] === 'max'

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
      {features.toggleRoomList && <RoomsPannel />}
      {features.toggleProfile && <Profile />}
      {max && <MaxChat />}
      {!max && roomName && <RoomChat />}
      {features.toggleRoomInfo && <RoomInfo />}

      {features.createRoomTogglePopup && <CreateRoomPopup />}
    </Page>
  )
}

export default Home
