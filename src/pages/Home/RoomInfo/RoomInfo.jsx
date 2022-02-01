import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import animationsCss from '../../../assets/animations.css'
import Title from '../../../components/Title'
import { roomTypes } from '../../../consts'
import useStyles from './RoomInfo.css'

const RoomInfo = () => {
  const classes = useStyles()
  const animations = animationsCss()
  const { room, features } = useSelector((state) => state)
  const { name, users, type, uniqueName } = room
  const { toogleRoomInfoAnimation, isMobile } = features

  const displayAnimation = !isMobile && (toogleRoomInfoAnimation ? animations.expand : animations.collapse)
  return (
    <div className={`${classes.roomInfo} ${displayAnimation} `}>
      {isMobile && (
        <Link to={`/${uniqueName}`} className={classes.goBackBtn}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </Link>
      )}
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
