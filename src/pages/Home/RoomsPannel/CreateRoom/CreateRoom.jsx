import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Title from '../../../../components/Title'
import useStyles from './CreateRoom.css'
import * as actions from '../../../../stores/actions'

const CreateRoom = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <div className={classes.createRoom}>
      <div className={classes.createRoomIcon}>
        <i className='fa-solid fa-plus'></i>
      </div>
      <Title title='Create New' className={classes.createRoomTitle} />
    </div>
  )
}

export default CreateRoom
