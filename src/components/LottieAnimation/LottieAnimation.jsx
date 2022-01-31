import React from 'react'
import Lottie from 'react-lottie'

const LottieAnimation = ({ height = 100, width = 100, animationData, loop = true, autoplay = true }) => (
  <Lottie
    options={{
      loop,
      autoplay,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    height={height}
    width={width}
  />
)

export default LottieAnimation
