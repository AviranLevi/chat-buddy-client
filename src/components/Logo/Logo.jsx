import React from 'react'
import Lottie from 'react-lottie'
import logoJSON from '../../assets/lottie/logo.json'

const Logo = ({ height = 300, width = 300, color = 'blue', play = false, className }) => (
  <Lottie
    options={{
      loop: true,
      autoplay: play,
      animationData: logoJSON,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    className={className}
    height={height}
    width={width}
  />
)

export default Logo
