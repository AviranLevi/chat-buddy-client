import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Room from '../../../components/Room/Room'
import TextInput from '../../../components/TextInput'
import Title from '../../../components/Title'
import useStyles from './RoomsPannel.css'
import * as actions from '../../../stores/actions'

const dummyData = [
  {
    name: 'Test1',
  },
  {
    name: 'Test2',
  },
]

const RoomsPannel = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state)

  const { id, rooms } = user

  useEffect(() => {
    //get rooms
    dispatch(actions.getRooms(id))
  }, [])

  return (
    <div className={classes.roomsPannel}>
      <Title className={classes.roomsPannelTitle} title='Chats' fontSize='2rem' />

      <div className={classes.roomsSearch}>
        <TextInput placeholder='Search...' className={classes.searchInput} />
        <div className={classes.roomSearchIcon}>
          <i className='fa-solid fa-magnifying-glass'></i>
        </div>
      </div>
      <div className={classes.roomsWrapper}>{rooms.length > 0 && rooms.map((room) => <Room key={room._id} room={room} />)}</div>
    </div>
  )
}

export default RoomsPannel
