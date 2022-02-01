import React, { useState } from 'react'
import { useEffect } from 'react'
import LogoJSON from '../../assets/lottie/logo.json'
import LottieAnimation from '../LottieAnimation'

const Logo = ({ height = 70, width = 60, playAnimation = false, toggleLogoAnimation = () => {} }) => {
  const [animationActivated, setAnimationActivated] = useState(false)

  useEffect(() => {
    if (playAnimation) {
      setAnimationActivated(true)
      setTimeout(() => {
        setAnimationActivated(false)
      }, 2000)
    }

    if (!animationActivated) {
      toggleLogoAnimation(false)

      setTimeout(() => {
        setAnimationActivated(true)
        toggleLogoAnimation(true)
      }, 100)
    }
  }, [toggleLogoAnimation])

  return (
    <LottieAnimation
      height={height}
      width={width}
      animationData={LogoJSON}
      autoplay={false}
      loop={false}
      isStopped={!playAnimation}
    />
  )
}

export default Logo
