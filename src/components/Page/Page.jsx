import React from 'react'
import useStyles from './Page.css'
import animationsCss from '../../assets/animations.css'

const Page = ({ children, className }) => {
  const classes = useStyles()
  const animations = animationsCss()

  return (
    <div className={`${classes.page} ${animations.fadeIn}`}>
      <div className={`${classes.pageWrapper} ${className}`}>{children}</div>
    </div>
  )
}

export default Page
