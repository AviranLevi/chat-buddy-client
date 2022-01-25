import React from 'react'
import { useSelector } from 'react-redux'
import animationsCss from '../../../assets/animations.css'
import Title from '../../../components/Title'
import useStyles from './RoomInfo.css'

const RoomInfo = () => {
  const classes = useStyles()
  const animations = animationsCss()
  const { room } = useSelector((state) => state)
  const { name, users } = room

  return (
    <div className={`${classes.roomInfo} ${animations.expand}`}>
      <Title title={name} className={classes.roomTitle} />

      <div className={classes.roomPeople}>
        <Title title="People" className={classes.roomPeopleTitle} />
        {users.map(({ userName }) => (
          <span className={classes.roomUserName}>{userName}</span>
        ))}
      </div>
    </div>
  )
}

export default RoomInfo
