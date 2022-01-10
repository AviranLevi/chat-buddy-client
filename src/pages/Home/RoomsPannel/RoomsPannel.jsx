import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Room from '../../../components/Room/Room'
import TextInput from '../../../components/TextInput'
import Title from '../../../components/Title'
import useStyles from './RoomsPannel.css'

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
  const { user } = useSelector((state) => state)
  const { id, rooms } = user
  useEffect(() => {
    //get rooms
  }, [])

  const goToRoom = (roomId) => {}

  return (
    <div className={classes.roomsPannel}>
      <Title className={classes.roomsPannelTitle} title='Chats' fontSize='2rem' />

      <div className={classes.roomsSearch}>
        <TextInput placeholder='Search...' className={classes.searchInput} />
        <div className={classes.roomSearchIcon}>
          <i class='fa-solid fa-magnifying-glass'></i>
        </div>
      </div>
      <div className={classes.roomsWrapper}>
        {dummyData.map((room) => (
          <Room room={room} onClick={goToRoom} />
        ))}
      </div>
    </div>
  )
}

export default RoomsPannel
