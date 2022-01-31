import React from 'react'
import LottieAnimation from '../LottieAnimation'
import TypingJSON from '../../assets/lottie/typing.json'

const Typing = ({ scrollRef, className = '' }) => (
  <div ref={scrollRef} className={className}>
    <LottieAnimation animationData={TypingJSON} />
  </div>
)

export default Typing
