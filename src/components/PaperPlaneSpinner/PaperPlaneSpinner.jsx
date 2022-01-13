import React from 'react'
import Lottie from 'react-lottie'
import * as PaperPlaneJSON from '../../assets/lottie/loading-paper-plane.json'

const PaperPlaneSpinner = ({ height = 300, width = 300 }) => (
  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData: PaperPlaneJSON,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    height={height}
    width={width}
  />
)

export default PaperPlaneSpinner
