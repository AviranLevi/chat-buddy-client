import React from 'react'
import Lottie from 'react-lottie'
import CircleJSON from '../../assets/lottie/loading-circle.json'

const CircleSpinner = ({ height = 100, width = 100 }) => (
  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData: CircleJSON,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    height={height}
    width={width}
  />
)

export default CircleSpinner
