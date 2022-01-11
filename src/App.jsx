import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import useStyles from './App.css'
import Navbar from './components/Navbar'
import Routes from './routes'
import * as actions from './stores/actions'

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state)

  useEffect(() => {
    dispatch(actions.getUser())
  }, [])

  return (
    <div className={classes.app}>
      {user && <Navbar />}
      <Routes user={user} />
    </div>
  )
}

export default App
