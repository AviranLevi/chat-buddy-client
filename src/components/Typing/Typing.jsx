import React from 'react'
import Lottie from 'react-lottie'
import TypingJSON from '../../assets/lottie/typing.json'

const Typing = ({ height = 100, width = 100 }) => (
  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData: TypingJSON,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    height={height}
    width={width}
  />
)

export default Typing
