import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Room from '../../../../components/Room/Room'
import useStyles from './RoomsList.css'
import * as actions from '../../../../stores/actions'
import CircleSpinner from '../../../../components/CircleSpinner'

const RoomsList = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state)

  const { id, rooms } = user

  useEffect(() => {
    //get rooms
    dispatch(actions.getRooms(id))
  }, [])

  return (
    <div className={classes.roomsWrapper}>
      {rooms.length > 0 ? rooms.map((room) => <Room key={room._id} room={room} />) : <CircleSpinner />}
    </div>
  )
}

export default RoomsList
