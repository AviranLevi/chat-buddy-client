import React from 'react'
import CreateRoomBtn from './CreateRoomBtn'
import RoomSearch from './RoomSearch'
import RoomsList from './RoomsList'
import Title from '../../../components/Title'
import useStyles from './RoomsPannel.css'

const RoomsPannel = () => {
  const classes = useStyles()

  return (
    <div className={classes.roomsPannel}>
      <CreateRoomBtn />
      <Title className={classes.roomsPannelTitle} title='Chats' fontSize='2rem' />
      <RoomSearch />
      <RoomsList />
    </div>
  )
}

export default RoomsPannel
