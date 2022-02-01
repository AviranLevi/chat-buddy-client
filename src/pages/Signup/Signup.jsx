import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Title from '../../components/Title'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import useStyles from './Signup.css'
import Logo from '../../components/Logo'
import ErrorMessage from '../../components/ErrorMessage'
import * as actions from '../../stores/actions'

const Signup = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { signup, features } = useSelector((state) => state)
  const { userName, email, errors } = signup
  const { logoAnimation } = features

  const userNameOnChange = (e) => dispatch(actions.userNameOnChange(e.target.value))
  const emailOnChange = (e) => dispatch(actions.emailOnChange(e.target.value))

  const handleOnClick = (e) => {
    e.preventDefault()
    dispatch(actions.createUser(userName, email))
  }

  const activateLogoAniamtion = () => dispatch(actions.toggleLogoAnimation(true))

  return (
    <div className={classes.signupPage}>
      <div className={classes.logo} onMouseOver={activateLogoAniamtion}>
        <Logo
          height={150}
          width={150}
          playAnimation={logoAnimation}
          toggleLogoAnimation={(bool) => dispatch(actions.toggleLogoAnimation(bool))}
        />
      </div>

      <div className={classes.signupPageTitles}>
        <Title title="Chat Buddies!" fontSize="2.5rem" />
        <Title fontSize="1rem" title="Please signup to continue!" fontWeight="normal" />
      </div>
      <form className={classes.signup} onSubmit={handleOnClick}>
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

export default Signup
