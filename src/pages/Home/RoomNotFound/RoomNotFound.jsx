import React from 'react'
import LottieAnimation from '../../../components/LottieAnimation'
import NotFoundJSON from '../../../assets/lottie/page-not-found.json'
import useStyles from './RoomNotFound.css'

const RoomNotFound = () => {
  const classes = useStyles()

  return (
    <div className={classes.roomNotFound}>
      <LottieAnimation animationData={NotFoundJSON} height={500} width={500} />
    </div>
  )
}

export default RoomNotFound
