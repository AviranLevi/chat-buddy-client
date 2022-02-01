import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from './App.css'
import MainRoutes from './routes/MainRoutes'
import MobileMainRoutes from './routes/MobileMainRoutes'
import SignupRoutes from './routes/SignUpRoutes'
import * as actions from './stores/actions'

const App = () => {
  const classes = useStyles()
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const dispatch = useDispatch()
  const { user, features } = useSelector((state) => state)
  const { isMobile } = features
  const handleWindowSizeChange = () => setScreenWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  useEffect(() => {
    dispatch(actions.getUser())
  }, [])

  useEffect(() => {
    const isMobile = screenWidth <= 769
    if (isMobile) {
      dispatch(actions.mobileViewStatus(true))
    } else {
      dispatch(actions.mobileViewStatus(false))
    }
  }, [screenWidth])

  const mainRoutes = isMobile ? <MobileMainRoutes /> : <MainRoutes />

  return <div className={classes.app}>{user.id ? mainRoutes : <SignupRoutes />}</div>
}

export default App
