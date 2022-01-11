import React from 'react'
import Title from '../Title'
import useStyles from './Room.css'

const Room = ({ key, room, onClick }) => {
  const classes = useStyles()
  const { name, type } = room

  return (
    <div key={key} className={classes.room} onClick={onClick}>
      <Title title={name} className={classes.roomName} />
      <span className={classes.roomType}>{type}</span>
    </div>
  )
}

export default Room
