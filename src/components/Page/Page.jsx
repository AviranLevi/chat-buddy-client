import React, { useEffect, useState } from 'react'
import useStyles from './Page.css'
import animationsCss from '../../assets/animations.css'

const Page = ({ children }) => {
  const [example, setExmaple] = useState(null)
  const classes = useStyles()
  const animations = animationsCss()

  useEffect(() => {}, [])

  return (
    <div className={`${classes.page} ${animations.fadeIn}`}>
      <div className={classes.pageWrapper}>{children}</div>
    </div>
  )
}

export default Page
