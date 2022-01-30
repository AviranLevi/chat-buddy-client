import React from 'react'
import { useSelector } from 'react-redux'
import animationsCss from '../../../assets/animations.css'
import Title from '../../../components/Title'
import { roomTypes } from '../../../consts'
import useStyles from './RoomInfo.css'

const RoomInfo = () => {
  const classes = useStyles()
  const animations = animationsCss()
  const { room, features } = useSelector((state) => state)
  const { name, users, type } = room
  const { toogleRoomInfoAnimation } = features

  const displayAnimation = toogleRoomInfoAnimation ? animations.expand : animations.collapse

  return (
    <div className={`${classes.roomInfo} ${displayAnimation} `}>
      <Title title={name} className={classes.roomTitle} />

      <div className={`${classes.roomPeople}`}>
        <Title title="People" className={classes.roomPeopleTitle} />
        {type === roomTypes.private ? (
          users.map(({ userName }) => <span className={classes.roomUserName}>{userName}</span>)
        ) : (
          <span className={classes.roomUserName}>Everyone 😜</span>
        )}
      </div>
    </div>
  )
}

export default RoomInfo
