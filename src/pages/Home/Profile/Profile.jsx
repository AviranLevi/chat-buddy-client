import React from 'react'
import { useSelector } from 'react-redux'
import animationsCss from '../../../assets/animations.css'
import TextInput from '../../../components/TextInput'
import Title from '../../../components/Title'
import useStyles from './Profile.css'

const Profile = () => {
  const classes = useStyles()
  const animations = animationsCss()
  const { user } = useSelector((state) => state)
  const { userName, email } = user

  return (
    <div className={`${classes.profile} ${animations.fadeIn}`}>
      <Title title='My Profile' className={classes.profileTitle} />

      <div className={classes.profileInfo}>
        <Title title='Username:' />
        <TextInput value={userName} className={classes.profileInfoInput} />
      </div>
      <div className={classes.profileInfo}>
        <Title title='Email:' />
        <TextInput value={email} className={classes.profileInfoInput} />
      </div>
    </div>
  )
}

export default Profile
