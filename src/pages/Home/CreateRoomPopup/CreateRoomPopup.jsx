import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './CreateRoomPopup.css'
import Popup from '../../../components/Popup'
import * as actions from '../../../stores/actions'
import Title from '../../../components/Title'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Button'
import { roomTypes } from '../../../consts'
import ErrorMessage from '../../../components/ErrorMessage'

const CreateRoomPopup = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state)

  const [name, setName] = useState('')
  const [type, setType] = useState(roomTypes.private)
  const [users, setUsers] = useState([])
  const [err, setErr] = useState(false)
  const roomNameOnChange = (e) => setName(e.target.value)

  const createRoomOnClick = () => {
    if (name) {
      setErr(false)
      dispatch(actions.createRoom(name, type, users))
    } else {
      setErr(true)
    }
  }

  const setPrivate = () => setType(roomTypes.private)
  const setPublic = () => setType(roomTypes.public)

  const typeSelectedStyle = {
    background: '#2056BD',
    color: '#fff',
  }

  const closePopup = () => dispatch(actions.createRoomTogglePopup(false))

  return (
    <Popup closeOnClick={closePopup}>
      <div className={classes.createRoomPopup}>
        <Title title='Create New Chat' fontSize='2rem' className={classes.createRoomPopupTitle} />

        <div className={classes.createRoomName}>
          <div className={classes.createRoomInputWrapper}>
            <Title title='Name:' />
            <TextInput className={classes.createRoomPopupInput} value={name} onChange={roomNameOnChange} placeholder='*Name...' />
          </div>
          {err && <ErrorMessage message='*Chat name is required' />}
        </div>

        <div className={classes.roomTypesSelection}>
          <Button
            title={roomTypes.private}
            className={classes.roomTypeBtn}
            onClick={setPrivate}
            style={type === roomTypes.private ? typeSelectedStyle : {}}
          />
          <Button
            title={roomTypes.public}
            className={classes.roomTypeBtn}
            onClick={setPublic}
            style={type === roomTypes.public ? typeSelectedStyle : {}}
          />
        </div>

        <div className={classes.roomUsers}>{/* TODO - add users input */}</div>

        <div className={classes.formSelection}>
          <Button title='Create' className={classes.createBtn} onClick={createRoomOnClick} />
          <Button title='Cancel' className={classes.cancelBtn} onClick={closePopup} />
        </div>
      </div>
    </Popup>
  )
}

export default CreateRoomPopup
