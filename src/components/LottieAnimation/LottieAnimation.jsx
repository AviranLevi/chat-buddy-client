import React from 'react'
import Lottie from 'react-lottie'

const LottieAnimation = ({
  height = 100,
  width = 100,
  animationData,
  loop = true,
  autoplay = true,
  isPaused = false,
  isStopped = false,
}) => (
  <Lottie
    options={{
      loop,
      autoplay,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    isPaused={isPaused}
    isStopped={isStopped}
    height={height}
    width={width}
  />
)

export default LottieAnimation
