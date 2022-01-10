import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import * as api from './api'
import useStyles from './App.css'
import Routes from './routes'

const App = () => {
  const classes = useStyles()
  const [user, setUser] = useState({})

  useEffect(() => {
    //get user
    async function getUser() {
      const userId = localStorage.getItem('userId')
      const userAlreadyExists = await api.getUser(userId)

      if (userAlreadyExists) {
        const { userName } = userAlreadyExists
        setUser({ userName, userId })
      }
    }
    getUser()
  }, [])

  return (
    <div className={classes.app}>
      <Routes user={user} setUser={setUser} />
    </div>
  )
}

export default App
