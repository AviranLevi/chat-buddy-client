import React from 'react'
import { useDispatch } from 'react-redux'
import Title from '../../../../components/Title'
import useStyles from './CreateRoomBtn.css'
import * as actions from '../../../../stores/actions'

const CreateRoomBtn = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const openCreatePopup = () => dispatch(actions.createRoomTogglePopup(true))

  return (
    <div className={classes.createRoom} onClick={openCreatePopup}>
      <div className={classes.createRoomIcon}>
        <i className='fa-solid fa-plus'></i>
      </div>
      <Title title='Create New' className={classes.createRoomTitle} />
    </div>
  )
}

export default CreateRoomBtn
