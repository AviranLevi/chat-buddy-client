import React, { useEffect, useState } from 'react'
import Page from '../../components/Page'
import Title from '../../components/Title'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import useStyles from './Signup.css'
import { createUser } from '../../api/chatBuddy'

const Signup = ({ setUser }) => {
  const classes = useStyles()
  const [userValue, setUserValue] = useState('')

  const handleOnChange = (e) => setUserValue(e.target.value)

  const handleOnClick = async (e) => {
    e.preventDefault()
    const userCreated = await createUser(userValue)
    if (userCreated) {
      const { userName, _id: id } = userCreated
      localStorage.setItem('userId', id)
      setUser(userName)
    }
  }
  return (
    <Page className={classes.signupPage}>
      <div className={classes.signupPageTitles}>
        <Title title='Chat Buddies!' fontSize='2.5rem' />
        <Title fontSize='1rem' title='Please signup to continue!' fontWeight='normal' />
      </div>
      <form className={classes.signup} onSubmit={handleOnClick}>
        <TextInput placeholder='Username...' value={userValue} onChange={handleOnChange} />
        <Button title='Create User' onClick={handleOnClick} />
      </form>
    </Page>
  )
}

export default Signup
