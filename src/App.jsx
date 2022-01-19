import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from './App.css'
import MainRoutes from './routes/MainRoutes'
import SignupRoutes from './routes/SignUpRoutes'
import * as actions from './stores/actions'

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state)

  useEffect(() => {
    dispatch(actions.getUser())
  }, [])

  return <div className={classes.app}>{user.id ? <MainRoutes /> : <SignupRoutes />}</div>
}

export default App
