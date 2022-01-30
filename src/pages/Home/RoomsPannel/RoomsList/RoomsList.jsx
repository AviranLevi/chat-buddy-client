import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Room from '../../../../components/Room/Room'
import useStyles from './RoomsList.css'
import * as actions from '../../../../stores/actions'
import CircleSpinner from '../../../../components/CircleSpinner'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import NothingToDisplay from '../../../../components/NothingToDisplay'

const RoomsList = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const { user, features, room } = useSelector((state) => state)
  const { roomListIsLoading } = features
  const { id: userId, rooms } = user
  const { name: currentRoom } = room

  const talWithMax = () => history.push('/max')

  useEffect(() => {
    //get rooms
    if (userId) {
      dispatch(actions.getRoomsByUser(userId))
    }
  }, [userId])

  return (
    <div className={classes.roomsWrapper}>
      <div className={classes.maxRoom} onClick={talWithMax}>
        Max 🤖
      </div>

      {!roomListIsLoading && rooms && rooms.length > 0 ? (
        rooms.map((room) => <Room key={room._id} room={room} currentRoom={currentRoom} />)
      ) : (
        <NothingToDisplay />
      )}

      {roomListIsLoading && <CircleSpinner />}
    </div>
  )
}

export default RoomsList
