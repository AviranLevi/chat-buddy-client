import React from 'react'
import useStyles from './Toast.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toast = ({ message = '', type = 'error', play = false, position = 'top-center', className }) => {
  const classes = useStyles()

  return (
    play &&
    toast[type]('Wow so easy !', { position }) && (
      <div className={classes.toast}>
        <ToastContainer position={position} />
      </div>
    )
  )
}

export default Toast
