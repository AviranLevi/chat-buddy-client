import React from 'react'
import Lottie from 'react-lottie'

const Spinner = ({ animationData , height = 300, width = 300 }) => (
  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    height={height}
    width={width}
  />
)

export default Spinner
