import React from 'react'
import CreateRoomBtn from './CreateRoomBtn'
import RoomSearch from './RoomSearch'
import RoomsList from './RoomsList'
import Title from '../../../components/Title'
import useStyles from './RoomsPannel.css'
import animationsCss from '../../../assets/animations.css'

const RoomsPannel = () => {
  const classes = useStyles()
  const animations = animationsCss()

  return (
    <div className={`${classes.roomsPannel} ${animations.fadeIn}`}>
      <CreateRoomBtn />
      <Title className={classes.roomsPannelTitle} title='Chats' fontSize='2rem' />
      <RoomSearch />
      <RoomsList />
    </div>
  )
}

export default RoomsPannel
