import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Title from '../../../../components/Title'
import useStyles from './CreateRoomBtn.css'
import { useHistory } from 'react-router-dom'
import * as actions from '../../../../stores/actions'

const CreateRoomBtn = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const { features } = useSelector((state) => state)
  const { isMobile } = features

  const openCreatePopup = () => {
    if (isMobile) {
      history.push(`/create`)
    } else {
      dispatch(actions.createRoomTogglePopup(true))
    }
  }

  return (
    <div className={classes.createRoom} onClick={openCreatePopup}>
      <div className={classes.createRoomIcon}>
        <i className="fa-solid fa-plus"></i>
      </div>
      <Title title="Create New" className={classes.createRoomTitle} />
    </div>
  )
}

export default CreateRoomBtn
