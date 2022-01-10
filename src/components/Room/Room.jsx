import React from 'react'
import useStyles from './Room.css'

const Room = ({ room, onClick }) => {
  const classes = useStyles()
  const { name } = room
  return (
    <div className={classes.room} onClick={onClick}>
      {name}
    </div>
  )
}

export default Room
