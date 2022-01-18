import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../Title'
import useStyles from './Room.css'

const Room = ({ key, room }) => {
  const classes = useStyles()
  const { name, type, uniqueName } = room

  return (
    <Link to={`/${uniqueName}`} className={classes.room}>
      <Title title={name} className={classes.roomName} />
      <span className={classes.roomType}>{type}</span>
    </Link>
  )
}

export default Room
