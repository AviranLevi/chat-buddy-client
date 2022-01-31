import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import Title from '../../components/Title'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import ErrorMessage from '../../components/ErrorMessage'
import * as actions from '../../stores/actions'
import Page from '../../components/Page'
import useStyles from './Invite.css'
import { useEffect } from 'react'

const Invite = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const { userName, email, errors } = useSelector((state) => state.signup)

  const userNameOnChange = (e) => dispatch(actions.userNameOnChange(e.target.value))
  const emailOnChange = (e) => dispatch(actions.emailOnChange(e.target.value))
  const userId = pathname.split('/')[2]

  const handleOnClick = (e) => {
    e.preventDefault()
    dispatch(actions.updateUser(userId, userName, email))
  }

  useEffect(() => {
    dispatch(actions.getUserFromInvite(userId))
  }, [])

  return (
    <div className={classes.invite}>
      <div className={classes.inviteTitles}>
        <Title title="Welcome to Chat Buddies!" fontSize="2.5rem" />
        <Title fontSize="1rem" title="Please complete the signup to continue!" fontWeight="normal" />
      </div>
      <form className={classes.inviteSignup} onSubmit={handleOnClick}>
        <TextInput placeholder="Username..." value={userName} onChange={userNameOnChange} />
        {errors.userName && <ErrorMessage message="*Must contain letters & numbers (optional) only!" />}
        <TextInput placeholder="Email..." value={email} onChange={emailOnChange} />
        {errors.email && <ErrorMessage message="*Please insert valid email" />}

        <Button title="Create User" onClick={handleOnClick} />
        {errors.signup && <ErrorMessage message="*Something went wrong, please try again later :(" />}
      </form>
    </div>
  )
}

export default Invite
