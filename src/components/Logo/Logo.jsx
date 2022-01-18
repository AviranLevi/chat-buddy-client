import React from 'react'
import Lottie from 'react-lottie'
import logoJSON from '../../assets/lottie/logo.json'

const Logo = ({ height = 100, width = 100, color = 'blue', play = false }) => (
  <Lottie
    options={{
      loop: true,
      autoplay: play,
      animationData: logoJSON,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    height={height}
    width={width}
  />
)

export default Logo
