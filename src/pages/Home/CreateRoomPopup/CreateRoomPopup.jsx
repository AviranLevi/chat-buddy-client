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
import * as utils from '../../../utils'

const CreateRoomPopup = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state)
  const { email } = user

  const [name, setName] = useState('')
  const [type, setType] = useState(roomTypes.private)
  const [users, setUsers] = useState([email])
  const [addUserValue, setAddUserValue] = useState('')
  const [err, setErr] = useState(false)

  const roomNameOnChange = (e) => setName(e.target.value)
  const setPrivate = () => setType(roomTypes.private)
  const setPublic = () => setType(roomTypes.public)

  const createRoomOnClick = () => {
    if (name) {
      setErr(false)
      dispatch(actions.createRoomTogglePopup(false))
      dispatch(actions.createRoom(name, type, users))
    } else {
      setErr(true)
    }
  }

  const addToUsers = (e) => {
    e.preventDefault()
    const validUserEmail = utils.validateEmail(addUserValue)

    if (validUserEmail) {
      setUsers((prev) => [...prev, addUserValue])
    }
  }

  const addUserOnChange = (e) => setAddUserValue(e.target.value)

  const closePopup = () => dispatch(actions.createRoomTogglePopup(false))

  const selectedTypeStyle = {
    background: '#2056BD',
    color: '#fff',
  }

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
            style={type === roomTypes.private ? selectedTypeStyle : {}}
          />
          <Button
            title={roomTypes.public}
            className={classes.roomTypeBtn}
            onClick={setPublic}
            style={type === roomTypes.public ? selectedTypeStyle : {}}
          />
        </div>

        <div className={classes.roomUsers}>
          <form onSubmit={addToUsers}>
            <Title title='Invite:' />
            <TextInput value={addUserValue} onChange={addUserOnChange} placeholder='Invite by email..' />
          </form>
          <div className={classes.inviteUsersDisplay}>{users.map((email, index) => index !== 0 && <span>{email}</span>)}</div>
        </div>

        <div className={classes.formSelection}>
          <Button title='Create' className={classes.createBtn} onClick={createRoomOnClick} />
          <Button title='Cancel' className={classes.cancelBtn} onClick={closePopup} />
        </div>
      </div>
    </Popup>
  )
}

export default CreateRoomPopup
