import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import RoomChat from './RoomChat'
import Profile from './Profile'
import RoomsPannel from './RoomsPannel'
import CreateRoomPopup from './CreateRoomPopup'
import MaxChat from './MaxChat'
import RoomInfo from './RoomInfo'
import Page from '../../components/Page'
import * as actions from '../../stores/actions'
import useStyles from './Home.css'
import RoomNotFound from './RoomNotFound'

const Home = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = useLocation()
  const { features, room } = useSelector((state) => state)
  const classes = useStyles({ features })

  const roomName = pathname.split('/')[1]
  const max = roomName === 'max'
  const { errors } = room

  useEffect(() => {
    if (!max && roomName) {
      dispatch(actions.getRoomByUniqueName(roomName))
    }
  }, [roomName])

  return (
    <Page className={classes.home}>
      {features.toggleRoomList && <RoomsPannel />}
      {features.toggleProfile && <Profile />}

      {max && <MaxChat />}
      {!errors.roomNotFound && !max && roomName && <RoomChat location={pathname} />}
      {errors.roomNotFound && <RoomNotFound />}

      {features.toggleRoomInfo && <RoomInfo />}
      {features.createRoomTogglePopup && <CreateRoomPopup />}
    </Page>
  )
}

export default Home
