import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './CreateRoomPopup.css'
import Popup from '../../../components/Popup'
import * as actions from '../../../stores/actions'
import Title from '../../../components/Title'
import Button from '../../../components/Button'
import { roomTypes } from '../../../consts'
import * as utils from '../../../utils'
import UsersForm from './UsersForm'
import TypeSelection from './TypeSelection'
import RoomName from './RoomName'
import { useHistory } from 'react-router-dom'

const CreateRoomPopup = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const { user, features } = useSelector((state) => state)
  const { email } = user
  const { isMobile } = features
  //room values
  const [name, setName] = useState('')
  const [type, setType] = useState(roomTypes.private)
  const [users, setUsers] = useState([email])
  const [addUserValue, setAddUserValue] = useState('')
  //errors
  const [nameErr, setNameErr] = useState(false)
  const [emailValidationErr, setEmailValidationErr] = useState(false)

  const roomNameOnChange = (e) => setName(e.target.value)
  const setPrivate = () => setType(roomTypes.private)
  const setPublic = () => setType(roomTypes.public)

  const createRoomOnClick = () => {
    if (name) {
      setNameErr(false)
      dispatch(actions.createRoomTogglePopup(false))
      dispatch(actions.createRoom(name, type, users))
    } else {
      setNameErr(true)
    }
  }

  const addToUsers = (e) => {
    e.preventDefault()
    const validUserEmail = utils.validateEmail(addUserValue)

    if (validUserEmail) {
      setUsers((prev) => [...prev, addUserValue])
      setAddUserValue('')
      setEmailValidationErr(false)
    } else {
      setEmailValidationErr(true)
    }
  }

  const removeUser = (e) => {
    const { value } = e.target.dataset
    setUsers(users.filter((user) => user !== value))
  }

  const addUserOnChange = (e) => setAddUserValue(e.target.value)

  const closePopup = () => {
    if (isMobile) {
      history.push('/')
    } else {
      dispatch(actions.createRoomTogglePopup(false))
    }
  }
  return (
    <Popup closeOnClick={closePopup} className={classes.createRoomPopupWrapper}>
      <div className={classes.createRoomPopup}>
        <Title title="Create New Chat" fontSize="2rem" className={classes.createRoomPopupTitle} />
        <RoomName roomName={name} roomNameOnChange={roomNameOnChange} err={nameErr} />

        <TypeSelection type={type} setPrivate={setPrivate} setPublic={setPublic} />

        {type === roomTypes.private && (
          <UsersForm
            users={users}
            addToUsers={addToUsers}
            addUserValue={addUserValue}
            addUserOnChange={addUserOnChange}
            removeUserOnClick={removeUser}
            usersValueErr={emailValidationErr}
          />
        )}

        <div className={classes.formSelection}>
          <Button title="Create" className={classes.createBtn} onClick={createRoomOnClick} />
          <Button title="Cancel" className={classes.cancelBtn} onClick={closePopup} />
        </div>
      </div>
    </Popup>
  )
}

export default CreateRoomPopup
