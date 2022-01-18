import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import useStyles from './App.css'
import Routes from './routes'
import * as actions from './stores/actions'

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state)

  useEffect(() => {
    dispatch(actions.getUser())
  }, [])
  console.log({ user })
  return (
    <div className={classes.app}>
      <Routes user={user} />
    </div>
  )
}

export default App
